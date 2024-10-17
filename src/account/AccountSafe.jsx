import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import safeIcon from '../assets/image/safe-icon.png'
const AccountSafe = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Retrieve the user_id from session storage
    // const userId = sessionStorage.getItem('user_id');
    const userId = Cookies.get('user_id');

    if (!userId) {
      console.error('Please Login First.');
      navigate('/login');
      setLoading(false);
    } 
    }, []);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Link to={'/safeBox'}>
          <div className="safe-card">
            <img src={safeIcon} alt />
            <div>
              <h4>Safe</h4>
              <p>
                Daily interest rate 0.1% + VIP extra income safe,calculated
                every 1 minute
              </p>
            </div>
            <div className="safe-card-icon">
              <h5>Rs0.00</h5>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.61623 2.045C6.38189 2.27941 6.25024 2.59729 6.25024 2.92875C6.25024 3.2602 6.38189 3.57809 6.61623 3.8125L12.8037 10L6.61623 16.1875C6.38853 16.4233 6.26254 16.739 6.26538 17.0668C6.26823 17.3945 6.39969 17.708 6.63145 17.9398C6.86321 18.1715 7.17673 18.303 7.50448 18.3058C7.83222 18.3087 8.14797 18.1827 8.38373 17.955L15.455 10.8837C15.6893 10.6493 15.821 10.3315 15.821 10C15.821 9.66854 15.6893 9.35066 15.455 9.11625L8.38373 2.045C8.14932 1.81066 7.83143 1.67902 7.49998 1.67902C7.16852 1.67902 6.85064 1.81066 6.61623 2.045Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AccountSafe;
