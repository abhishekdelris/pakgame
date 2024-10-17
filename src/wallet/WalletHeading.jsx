import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {  useNavigate } from "react-router-dom";
import walletIcon from '../assets/image/wallet-icon.png'

const WalletHeading = () => {
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

  const handleReload = () => {
    window.location.reload();
  };

  if (loading) {
  return <div>Loading...</div>;
  }
  return (
    <>
      <div className="col-12">
        <div className="wallet-heading-inner">
          <h5>WALLET</h5>
          <img src={walletIcon} alt="wallet" onClick={handleReload} />
          <h6>Rs{profile.data.total_amount}</h6>
          <p>Total balance</p>
        </div>
      </div>
    </>
  );
};

export default WalletHeading;
