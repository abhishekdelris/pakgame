import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie'; 
import { Modal, Button } from 'react-bootstrap';
import Banner from './Banner';
import Attention from './Attention';
import Categories from './Categories';
import Lottery from './Lottery';
import Winning from './Winning';
import WinningList from './WinningList';
import WelcomeBack from '../assets/image/activity-image/WelcomeBack.png';
import Recommendation from './Recomendation';
// import Footer from '../common/Footer'

const Home = () => {
  const [showModal, setShowModal] = useState(false);  // State to handle modal visibility
  const navigate = useNavigate();

  // Use useEffect to trigger the modal after a delay when the page loads
  useEffect(() => {
    const userId = Cookies.get('user_id');
    const modalShown = Cookies.get('modal_shown'); // Track if modal has already been shown

    if (userId && !modalShown) {
      // Delay the modal display by 5 seconds
      const timer = setTimeout(() => {
        setShowModal(true);
        // Set a cookie to track that the modal has been shown
        Cookies.set('modal_shown', 'true', { expires: 1 }); // Cookie expires in 1 day
      }, 1000); // 5000 ms = 5 seconds

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color">
            <Banner />
            <Attention />
            <Categories />
            <Recommendation />
            <Lottery />
            <Winning />
            <WinningList />
            {/* <Footer /> */}
          </div>
        </div>
      </div>

       {/* Modal for displaying the policy content */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered className='notification-modal'>
        <Modal.Header>
          <Modal.Title>Important Policy Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Welcome Back, PAKGAME Member!</h2>
          <h4 className='text-success text-center'>Dear members, before making a withdrawal, please ensure that your wallet has been verified and that the ID card and account number used for verification are accurate and valid.</h4>
          <h4 className='text-success text-center'> If these details are incorrect, your withdrawal will not be processed successfully!</h4>
          <h4 className='text-success text-center'>Stay updated by following us on the official PakGame Discord Channel. &gt;&gt; <a href="" target="_blank">CLICK HERE</a> &lt;&lt; for the latest announcements and event information.</h4>
          <h2>Starting August 15th, the recharge bonus will return upto 9% on every recharge.</h2>
          <h2> But don’t worry! You can now use the QR Code Bank Card recharge channel to enjoy a 4% bonus on EVERY recharge!</h2>
          <img src={WelcomeBack} className='img-fluid' alt="welcomeback" />
          <h2> VIP GOLD</h2>
          <p>VIP GOLD REWARD for the period from March 1st to April 30th. Get a chance to win exciting rewards!</p>
          <p>Click the link below for more information.</p>
          <p>WE HAVE MANY BONUS FOR YOU TO CLAIM</p>
          <ul>
            <li>1.	First Deposit Bonus: Register and link your E-wallet to claim the bonus.</li>
            <li>2.	Attendance Bonus: Make deposits for 7 consecutive days to claim the reward. </li>
            <li>3.	Gift Code: Use the code provided by our agent to receive a bonus. </li>
            <li>4.	Activity Award: Meet specific requirements to claim additional rewards. </li>
            <li>5.	Invitation Bonus: Invite others to deposit and play, and earn a referral bonus.</li>
            <li>6.	Betting Rebate: Earn commission on every bet placed. </li>
            <li>7.	Super Jackpot: Play slots, and if you hit a big win, claim an additional bonus.</li>
            <li>8.	VIP Bonus: Claim monthly bonuses as you level up in VIP status.</li>
          </ul>
          <p>Join our agent program to unlock amazing benefits! The more people you invite and the higher the level of your downlines, the greater the bonuses you can earn.</p>
          <p>Don’t miss out on these fantastic opportunities!</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="view-all-btn" onClick={() => setShowModal(false)}>
            Confirm 
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Home
