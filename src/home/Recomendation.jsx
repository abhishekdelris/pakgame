import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import lotteryImage1 from '../assets/image/Lottery-1.png';

const Recommendation = () => {
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null); // Store selected game
  const userId = Cookies.get('user_id');
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(baseURLAPI + 'users/HotGameList')
      .then(response => response.json())
      .then(data => {
        setGames(data.transactions || []);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  const handleGameClick = (game) => {
    

    if (!userId) {
      console.error('Please Login First.');
      navigate('/login');
      return;
    }

    setSelectedGame(game);
    setIsOpen(true);
  };

  const handleConfirm = () => {
    if (!selectedGame) return;

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://delristech-projects.in/pak_game/index.php/admin/apihitGame';
    form.target = '_blank';

    const data = {
      user_id:userId,
      game_id: selectedGame.id,
      game_title: selectedGame.title,
      MerchantID: selectedGame.MerchantID,
      PageCode: selectedGame.PageCode
    };

    Object.keys(data).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = data[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setIsOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999
    },
    content: {
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      zIndex: 9999
    }
  };

  return (
    <>
      {/* Lottery Start */}
      <div className="row">
        <div className="col-12">
          <div className="lottery-heading">
            <h3>Platform Recommendation</h3>
          </div>
        </div>
        {games.map(game => (
          <div className="col-4 px-1" key={game.id}>
            <div className="game-listing" onClick={() => handleGameClick(game)}>
              <img className='img-fluid' src={game.image || lotteryImage1} alt={game.title} />
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.content}>
            <h2>Join Game</h2>
            <p>Are you sure you want to join the game?</p>
            <div className="d-flex justify-content w-100">
              <button onClick={toggleModal} className="btn border-0 bg-white mx-auto">Cancel</button>
              <button onClick={handleConfirm} className="btn border-0 bg-white text-primary mx-auto">Confirm</button>
            </div>
          </div>
        </div>
      )}
      {/* Lottery End */}
    </>
  );
};

export default Recommendation;
