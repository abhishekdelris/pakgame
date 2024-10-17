import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import lotteryImage1 from '../assets/image/Lottery-1.png';
import lotteryImage2 from '../assets/image/Lottery-2.png';
import lotteryImage3 from '../assets/image/Lottery-3.png';
import lotteryImage4 from '../assets/image/Lottery-4.png';

const Lottery = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;

  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const userId = Cookies.get('user_id');

  if (!userId) {
    console.error('Please Login First.');
    navigate('/login');
    setLoading(false);
  } 
  
    fetch(baseURLAPI + 'users/get_games')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGames(data.data || []);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching games:', error));
  }, []);

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
    <>
      {/* Lottery Start */}
      <div className="row">
        <div className="col-12">
          <div className="lottery-heading">
            <h3>Popular Games</h3>
          </div>
        </div>
        {games.map(game => (

          <div className="col-4 px-1">
            <div className="game-listing" onClick={() => handleGameClick(game)}>
              <img className='img-fluid' src={game.image || lotteryImage1} alt={game.title} />
            </div>
          </div>
          // <div className="col-12" key={game.id}>
          //   <div className="lottery-card" onClick={() => handleGameClick(game)}>
          //     <div>
          //       <h3>{game.title}</h3>
          //       {/* <h4>Guess the number</h4> */}
          //       {/* <h4>Green/Red/Purple to win </h4> */}
          //     </div>
          //     <img src={game.image || lotteryImage1} alt={game.title} />
          //   </div>
          // </div>


        ))}
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <a href="/GameListing" class="view-all-btn">View All</a>
        </div>
      </div>
      {/* Lottery End */}
    </>
  );
};

export default Lottery;
