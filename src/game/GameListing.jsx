import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const GameListing = () => {
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  const { id } = useParams(); // Extract the ID from the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const catId = queryParams.get('catId'); // Extract catId from query parameters

  const [games, setGames] = useState([]);
  const [visibleGames, setVisibleGames] = useState(20); // Initial number of games to display
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
 
  useEffect(() => {
    const userId = Cookies.get('user_id');

    if (!userId) {
      console.error('Please Login First.');
      navigate('/login');
      setLoading(false);
    } 
    let fetchURL = `${baseURLAPI}users/get_all_games`;
    if (id) {
      fetchURL += `/${id}`;
    }
    if (catId) {
      fetchURL += `?catId=${catId}`;
    }

    fetch(fetchURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGames(data.data || []);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching games:', error));
  }, [id, catId]);

  const loadMoreGames = () => {
    setVisibleGames(prevVisibleGames => prevVisibleGames + 20);
  };

  const handleGameClick = (game) => {
    // Create a form element
    const form = document.createElement('form');
    form.method = 'POST'; // Use 'GET' if needed
    form.action = 'https://delristech-projects.in/pak_game/index.php/admin/apihitGame';
    form.target = '_blank';

    // Add the data as hidden inputs
    const data = {
      game_id: game.id,
      game_title: game.title,
      MerchantID: game.MerchantID,
      PageCode: game.PageCode
    };

    Object.keys(data).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = data[key];
      form.appendChild(input);
    });

    // Append the form to the body and submit it
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color">
          <div className="game-listing-heading">
            <h5>Game Listing</h5>
          </div>
          <div className="container">
            <div className="row">
              {games.slice(0, visibleGames).map(game => (
                <div className="col-4 px-1" key={game.id}>
                  <div className="game-listing" onClick={() => handleGameClick(game)}>
                    <img
                      className='img-fluid'
                      src={game.image || lotteryImage1}
                      alt={game.title}
                    />
                  </div>
                </div>
              ))}
            </div>
            {visibleGames < games.length && (
              <div className="row">
                <div className="col-12 text-center">
                  <button onClick={loadMoreGames} className="btn btn-primary">
                    See More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameListing;
