// src/common/Footer.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon1 from '../assets/image/footer-icon/home-active.png';
import homeIcon2 from '../assets/image/footer-icon/home-inactive.png';
import activityIcon1 from '../assets/image/footer-icon/activity-active.png';
import activityIcon2 from '../assets/image/footer-icon/activity-inactive.png';
import centerIcon1 from '../assets/image/footer-icon/footer-center.png';
import walletIcon1 from '../assets/image/footer-icon/wallet-active.png';
import walletIcon2 from '../assets/image/footer-icon/wallet-inactive.png';
import acountIcon1 from '../assets/image/footer-icon/acount-active.png';
import acountIcon2 from '../assets/image/footer-icon/acount-inactive.png';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer>
      <div className="container footer-top-1">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto px-0">
            <div className="footer-top">
              <ul id="footer-menu">
                <li className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
                  <Link to="/" className="nav-link">
                    <img src={homeIcon1} className={`icon-active ${currentPath === '/' ? 'd-block' : 'd-none'}`} alt="Home Active" />
                    <img src={homeIcon2} className={`icon-inactive ${currentPath === '/' ? 'd-none' : 'd-block'}`} alt="Home Inactive" />
                    <p>Home</p>
                  </Link>
                </li>
                <li className={`nav-item ${currentPath === '/activity' ? 'active' : ''}`}>
                  <Link to="/activity" className="nav-link">
                    <img src={activityIcon1} className={`icon-active ${currentPath === '/activity' ? 'd-block' : 'd-none'}`} alt="Activity Active" />
                    <img src={activityIcon2} className={`icon-inactive ${currentPath === '/activity' ? 'd-none' : 'd-block'}`} alt="Activity Inactive" />
                    <p>Activity</p>
                  </Link>
                </li>
                <li className={`nav-item footer-center ${currentPath === '/promotion' ? 'active' : ''}`}>
                  <Link to="/agency" className="nav-link">
                    <div>
                      <img src={centerIcon1} alt="Promotion" />
                      <p>Promotion</p>
                    </div>
                  </Link>
                </li>
                <li className={`nav-item ${currentPath === '/wallet' ? 'active' : ''}`}>
                  <Link to="/wallet" className="nav-link">
                    <img src={walletIcon1} className={`icon-active ${currentPath === '/wallet' ? 'd-block' : 'd-none'}`} alt="Wallet Active" />
                    <img src={walletIcon2} className={`icon-inactive ${currentPath === '/wallet' ? 'd-none' : 'd-block'}`} alt="Wallet Inactive" />
                    <p>Wallet</p>
                  </Link>
                </li>
                <li className={`nav-item ${currentPath === '/account' ? 'active' : ''}`}>
                  <Link to="/account" className="nav-link">
                    <img src={acountIcon1} className={`icon-active ${currentPath === '/account' ? 'd-block' : 'd-none'}`} alt="Account Active" />
                    <img src={acountIcon2} className={`icon-inactive ${currentPath === '/account' ? 'd-none' : 'd-block'}`} alt="Account Inactive" />
                    <p>Account</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
