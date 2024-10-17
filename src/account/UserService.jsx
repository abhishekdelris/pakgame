import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import notification from '../assets/image/user-icon/Notification.png'
import gifts from '../assets/image/user-icon/Gifts.png'
import statistics from '../assets/image/user-icon/statistics.png'
import language from '../assets/image/user-icon/Language.png'
import settings from '../assets/image/user-icon/Settings.png'
import notification1 from '../assets/image/user-icon/Notification-1.png'
import feedback from '../assets/image/user-icon/Feedback.png'
import customer from '../assets/image/user-icon/Customer.png'
import guide1 from '../assets/image/user-icon/Guide.png'
import guide2 from '../assets/image/user-icon/Guide-1.png'

const UserService = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear local storage
    Cookies.remove('user_id');
  Cookies.remove('username');
  Cookies.remove('mobile');
  Cookies.remove('modal_shown'); // If you are using this to track the modal display

  // Clear localStorage and sessionStorage
  localStorage.clear();
  sessionStorage.clear();
    navigate('/login'); 
    // You can also redirect the user to a login page or home page after logout
    // window.location.href = '/login'; // Example for redirection
  
    alert("Logged out successfully");
  };
  
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="user-option-card">
            <ul>
              <li>
                <div>
                  <img src={notification} alt />
                  <p>Notification</p>
                </div>
                <div>
                  <label htmlFor>15</label>
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.96223 1.53375C4.78648 1.70956 4.68774 1.94797 4.68774 2.19656C4.68774 2.44515 4.78648 2.68357 4.96223 2.85937L9.60286 7.5L4.96223 12.1406C4.79146 12.3174 4.69696 12.5543 4.6991 12.8001C4.70124 13.0459 4.79983 13.281 4.97365 13.4548C5.14747 13.6287 5.38261 13.7272 5.62842 13.7294C5.87423 13.7315 6.11104 13.637 6.28786 13.4662L11.5913 8.16281C11.767 7.987 11.8658 7.74859 11.8658 7.5C11.8658 7.25141 11.767 7.01299 11.5913 6.83719L6.28786 1.53375C6.11205 1.358 5.87364 1.25926 5.62504 1.25926C5.37645 1.25926 5.13804 1.358 4.96223 1.53375Z"
                      fill="#9D9797"
                    />
                  </svg>
                </div>
              </li>
              <Link to={'/redeemGift'}>
              <li>
                <div>
                  <img src={gifts} alt />
                  <p>Gifts</p>
                </div>
                <div>
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.96223 1.53375C4.78648 1.70956 4.68774 1.94797 4.68774 2.19656C4.68774 2.44515 4.78648 2.68357 4.96223 2.85937L9.60286 7.5L4.96223 12.1406C4.79146 12.3174 4.69696 12.5543 4.6991 12.8001C4.70124 13.0459 4.79983 13.281 4.97365 13.4548C5.14747 13.6287 5.38261 13.7272 5.62842 13.7294C5.87423 13.7315 6.11104 13.637 6.28786 13.4662L11.5913 8.16281C11.767 7.987 11.8658 7.74859 11.8658 7.5C11.8658 7.25141 11.767 7.01299 11.5913 6.83719L6.28786 1.53375C6.11205 1.358 5.87364 1.25926 5.62504 1.25926C5.37645 1.25926 5.13804 1.358 4.96223 1.53375Z"
                      fill="#9D9797"
                    />
                  </svg>
                </div>
              </li>
              </Link>
              <Link to={'/gameStats'}>
              <li>
                <div>
                  <img src={statistics} alt />
                  <p>Game statistics</p>
                </div>
                <div>
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.96223 1.53375C4.78648 1.70956 4.68774 1.94797 4.68774 2.19656C4.68774 2.44515 4.78648 2.68357 4.96223 2.85937L9.60286 7.5L4.96223 12.1406C4.79146 12.3174 4.69696 12.5543 4.6991 12.8001C4.70124 13.0459 4.79983 13.281 4.97365 13.4548C5.14747 13.6287 5.38261 13.7272 5.62842 13.7294C5.87423 13.7315 6.11104 13.637 6.28786 13.4662L11.5913 8.16281C11.767 7.987 11.8658 7.74859 11.8658 7.5C11.8658 7.25141 11.767 7.01299 11.5913 6.83719L6.28786 1.53375C6.11205 1.358 5.87364 1.25926 5.62504 1.25926C5.37645 1.25926 5.13804 1.358 4.96223 1.53375Z"
                      fill="#9D9797"
                    />
                  </svg>
                </div>
              </li>
              </Link>
              <li>
                <div>
                  <img src={language} alt />
                  <p>Language</p>
                </div>
                <div>
                  <p>English</p>
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.96223 1.53375C4.78648 1.70956 4.68774 1.94797 4.68774 2.19656C4.68774 2.44515 4.78648 2.68357 4.96223 2.85937L9.60286 7.5L4.96223 12.1406C4.79146 12.3174 4.69696 12.5543 4.6991 12.8001C4.70124 13.0459 4.79983 13.281 4.97365 13.4548C5.14747 13.6287 5.38261 13.7272 5.62842 13.7294C5.87423 13.7315 6.11104 13.637 6.28786 13.4662L11.5913 8.16281C11.767 7.987 11.8658 7.74859 11.8658 7.5C11.8658 7.25141 11.767 7.01299 11.5913 6.83719L6.28786 1.53375C6.11205 1.358 5.87364 1.25926 5.62504 1.25926C5.37645 1.25926 5.13804 1.358 4.96223 1.53375Z"
                      fill="#9D9797"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <div className="user-option-card-2">
            <h4>Service center</h4>
            <ul>
              <li>
               <Link to="/updateProfile">
                <img src={settings} alt="Settings Icon" />
                <p style={{color:"black"}}>Settings</p>
              </Link>
              </li>
              
              <li>
              <Link to={'/feedback'}>
                <img src={feedback} alt />
                <p>Feedback</p>
                </Link>
              </li>
              <li>
                <img src={notification1} alt />
                <p>Notification</p>
              </li>
              <li>
                <Link to={'/customerService'}>
                <img src={customer} alt />
                <p>24/7 Customer service</p>
                </Link>
              </li>
              <li>
                <Link to={'/guide'}>
                  <img src={guide1} alt />
                  <p>Beginner’s Guide</p>
                </Link>
              </li>
              <li>
                <Link to={'/about'}>
                  <img src={guide2} alt />
                  <p>About Us</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12">
        <button className="log-out-btn" onClick={handleLogout}>
  <svg
    width={21}
    height={19}
    viewBox="0 0 21 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.48388 7.32495C9.48388 7.78298 9.93883 8.15432 10.5 8.15432C11.0612 8.15432 11.5161 7.78298 11.5161 7.32495H9.48388ZM11.5161 0.829365C11.5161 0.371323 11.0612 0 10.5 0C9.93883 0 9.48388 0.371323 9.48388 0.829365H11.5161ZM6.85664 3.77257C7.36738 3.58276 7.59282 3.09093 7.36034 2.67407C7.12771 2.25721 6.52516 2.07317 6.01443 2.26299L6.85664 3.77257ZM1.01625 9.85286L0 9.84855L0.000203499 9.86248L1.01625 9.85286ZM10.5 17.4167L10.5117 16.5873C10.5039 16.5873 10.4961 16.5873 10.4883 16.5873L10.5 17.4167ZM19.9837 9.85286L21 9.86248L20.9999 9.84855L19.9837 9.85286ZM14.9855 2.26299C14.4748 2.07317 13.8723 2.25721 13.6397 2.67407C13.4072 3.09093 13.6326 3.58276 14.1434 3.77257L14.9855 2.26299ZM11.5161 7.32495V0.829365H9.48388V7.32495H11.5161ZM6.01443 2.26299C2.36895 3.61792 0.0209862 6.57909 0 9.84855L2.03235 9.85717C2.04919 7.23469 3.93245 4.85942 6.85664 3.77257L6.01443 2.26299ZM0.000203499 9.86248C0.0669962 14.5466 4.77287 18.2998 10.5117 18.246L10.4883 16.5873C5.87171 16.6306 2.08603 13.6113 2.0323 9.84324L0.000203499 9.86248ZM10.4883 18.246C16.2271 18.2998 20.9333 14.5466 21 9.86248L18.9678 9.84324C18.914 13.6113 15.1283 16.6306 10.5117 16.5873L10.4883 18.246ZM20.9999 9.84855C20.9789 6.57909 18.6311 3.61792 14.9855 2.26299L14.1434 3.77257C17.0675 4.85942 18.9508 7.23469 18.9676 9.85717L20.9999 9.84855Z"
      fill="#9D9797"
    />
  </svg>
  Log out
</button>

        </div>
      </div>
    </>
  );
};

export default UserService;
