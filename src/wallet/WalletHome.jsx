import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import WalletHeading from "./WalletHeading";
import WalletTransfer from "./WalletTransfer";
import WalletCards from "./WalletCards";

const WalletHome = () => {
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
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto agency-bg-color">
            <div className="row wallet-heading">
                <WalletHeading />
                <WalletTransfer />
                <WalletCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletHome;
