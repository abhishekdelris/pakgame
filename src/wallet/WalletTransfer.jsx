import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {  useNavigate } from "react-router-dom";
import walletIcon1 from '../assets/image/wallet-icon/wallet-icon-1.png'
import walletIcon2 from '../assets/image/wallet-icon/wallet-icon-2.png'
import walletIcon3 from '../assets/image/wallet-icon/wallet-icon-3.png'
import walletIcon4 from '../assets/image/wallet-icon/wallet-icon-4.png'
import { Link } from 'react-router-dom';

const WalletTransfer = () => {
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  // const userId = sessionStorage.getItem('user_id');
  const userId = Cookies.get('user_id');
  useEffect(() => {
  // Retrieve the user_id from session storage
  // const userId = sessionStorage.getItem('user_id');
  const userId = Cookies.get('user_id');

  if (userId) {
      fetch(`${baseURLAPI}users/get_profile?user_id=${userId}`)
      .then(response => response.json())
      .then(data => {
          // console.log(data);
          // return false;
          setProfile(data);
          setLoading(false);
      })
      .catch(error => console.error('Error fetching profile:', error));
  } else {
      console.error('Please Login First.');
      navigate('/login');
      setLoading(false);
  }
  }, []);

  if (loading) {
  return <div>Loading...</div>;
  }
  return (
    <div className="col-12">
      <div className="progres-bar-div">
        <div className="progres-bar">
          <div>
            <div
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={0}
              style={{ '--value': 0 }}
            />
            <h6>Rs{profile.data.total_amount}</h6>
            <p>Main wallet</p>
          </div>
          <div>
            <div
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={0}
              style={{ '--value': 0 }}
            />
            <h6>Rs0.00</h6>
            <p>3rd party wallet</p>
          </div>
        </div>
        <button className="wallet-transfer-btn">Main wallet transfer</button>
        <div className="wallet-icon">
          <div>
            <Link to={'/deposit'}>
              <img src={walletIcon1} alt="Deposit" />
              <p>Deposit</p>
            </Link>
          </div>
          <div>
            <Link to={'/withdraw'}>
              <img src={walletIcon2} alt="Withdraw" />
              <p>Withdraw</p>
            </Link>
          </div>
          <div>
            <Link to={'/deposit'}>
              <img src={walletIcon3} alt="Deposit History" />
              <p>Deposit <br />history</p>
            </Link>
          </div>
          <div>
            <Link to={'/withdraw'}>
              <img src={walletIcon4} alt="Withdraw History" />
              <p>Withdraw <br />history</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletTransfer;
