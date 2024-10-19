import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import taj1 from '../assets/image/taj-1.png';
import taj2 from '../assets/image/taj-2.png';
import taj3 from '../assets/image/taj-3.png';
import userWin1 from '../assets/image/user-win-1.png';
import userWin2 from '../assets/image/user-win-2.png';
import userWin3 from '../assets/image/user-win-3.png';
import userWin4 from '../assets/image/user-win-4.png';
import todayWin1 from '../assets/image/Today-win-1.png';
import todayWin2 from '../assets/image/Today-win-2.png';
import todayWin3 from '../assets/image/Today-win-3.png';

const WinningList = () => {
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;

  const navigate = useNavigate();
  const [earn, setEarn] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const response = await fetch(baseURLAPI + 'users/TodayEarnings');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setEarn(data.data || []); // Assuming `data` contains the winners
      } catch (error) {
        console.error('Error fetching winners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWinners();
  }, []); // Run only once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Winning List Start */}
      <div className="row">
        <div className="col-12">
          <div className="lottery-heading">
            <h3>Today’s earnings chart</h3>
          </div>
        </div>
      </div>

      <div className="row win-card-top">
        {earn.slice(0, 3).map((winner, index) => (
          <div className={`col-4 win-card ${index === 1 ? 'win-card-center' : ''}`} key={winner.username}>
            <div className="win-user">
              {/* Taj icons for first 3 winners */}
              <img src={index === 0 ? taj1 : index === 1 ? taj2 : taj3} className="win-taj-image" alt="" />
              <img
                src={winner.profile_image ? `https://delristech-projects.in/pak_game/${winner.profile_image}` : userWin1}
                className="win-user-image"
                alt=""
              />
              <img
                src={index === 0 ? todayWin1 : index === 1 ? todayWin2 : todayWin3}
                className="today-wing-label"
                alt=""
              />
            </div>
            <div className="win-content">
              <h5>{winner.username}</h5>
              <h6>Rs{winner.amount}</h6>
            </div>
          </div>
        ))}
      </div>

      {/* Display remaining winners */}
      <div className="row">
        {earn.slice(3, 5).map((winner, index) => (
          <div className="col-12" key={winner.username}>
            <div className="wining-list-top">
              <div>
                <h5>{index + 4}</h5>
                <img
                  src={winner.profile_image ? `https://delristech-projects.in/pak_game/${winner.profile_image}` : userWin3}
                  alt=""
                />
                <h4>{winner.username}</h4>
              </div>
              <h3>Rs{winner.amount}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Winning List End */}
    </>
  );
};

export default WinningList;
