import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import userImage1 from '../assets/image/Ellipse-1.png'
import userImage2 from '../assets/image/Ellipse-2.png'
import userImage3 from '../assets/image/Ellipse-3.png'
import userImage4 from '../assets/image/Ellipse-4.png'
import userImage5 from '../assets/image/Ellipse-5.png'
import winintImage1 from '../assets/image/Winning-1.png'
import winintImage2 from '../assets/image/Winning-2.png'
import winintImage3 from '../assets/image/Winning-3.png'

const Winning = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  
    const navigate = useNavigate();
    const [winner, setWinner] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchWinners = async () => {
          try {
            const response = await fetch(baseURLAPI + 'users/WinnerList');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setWinner(data.data || []);
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
       {/* Winning Start */}
        <div className="row">
            <div className="col-12">
                <div className="lottery-heading">
                <h3>Winning information</h3>
                </div>
            </div>
            {winner.map(winner  => (
                <div className="col-12">
                <div className="winning-card">
                <div className="winning-inner">
                    <img src={`https://delristech-projects.in/pak_game/${winner.profile_image}`} alt />
                    <h5>{winner.name}</h5>
                </div>
                <div className="winning-bottom">
                    <div className="winning-image">
                    <img src={winner.game_image} alt />
                    </div>
                    <div>
                    <h3>Recieve Rs{winner.amount}</h3>   
                    <h4>Winning amount</h4>
                    </div>
                </div>
                </div>
            </div>
            ))}
          
           
        </div>
        {/* Winning Start */}

    </>
  )
}

export default Winning
