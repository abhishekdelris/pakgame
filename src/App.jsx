// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './common/Header';
import Home from './home/Home';
import Game from './home/Game';
import ActivityHome from './activity/ActivityHome';
import Footer from './common/Footer';
import WalletHome from './wallet/WalletHome';
import AccountHome from './account/AccountHome';
import DepositHome from './deposit/DepositHome';
import WithdrawHome from './withdraw/WithdrawHome';
import AgencyHome from './agency/AgencyHome';
import Login from './login/Login';
import Register from './login/Register';
import Forgot from './login/ForgotPassword';
import GameListing from './game/GameListing';
import CategoriesList from './game/CategoriesList';
import Sendotp from './login/Sendotp';
import UpdateProfile from './account/UpdateProfile';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstRecharge from './activity/FirstRecharge';
import ActivityDetail from './activity/ActivityDetail';
import DailyTasks from './activity/DailyTasks';
import Rebate from './activity/Rebate';
import SuperJackpot from './activity/SuperJackpot';
import RedeemGift from './activity/RedeemGift';
import DailySignIn from './activity/DailySignIn';
import Vip from './account/Vip';
import GameStats from './account/GameStats';
import UserFeedback from './account/UserFeedback';
import SettingsCenter from './settings/SettingsCenter';
import AvatarSelection from './settings/AvatarSelection';
import ChangePassword from './settings/ChangePassword';
import AboutDetail2 from './account/AboutDetail2';
import AboutDetail from './account/AboutDetail';
import About from './account/About';
import Guide from './account/Guide';
import CustomerService from './account/CustomerService';
import SafeBox from './account/SafeBox';
import DepositHistory from './deposit/DepositHistory';
import WithdrawalHistory from './withdraw/WithdrawalHistory';
import TeamReport from './agency/TeamReport';
import MyCommission from './agency/MyCommission';
import PromotionRule from './agency/PromotionRule';
import AgentLine from './agency/AgentLine';
import RebateRatio from './agency/RebateRatio';
import FullProfileUpdate from './account/FullProfileUpdate';
import EWalletPayment1 from './payment/EWalletPayment1';
import EWalletPayment2 from './payment/EWalletPayment2';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Home page with Header and Footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        {/* Route for ActivityHome page with Footer only */}
        <Route
          path="activity"
          element={
            <>
              <ActivityHome />
              <Footer />
            </>
          }
        />
        {/* Route for WalletHome page with Footer only */}
        <Route
          path="/wallet"
          element={
            <>
              <WalletHome />
              <Footer />
            </>
          } 
        />
         <Route
          path="/updateProfile"
          element={
            <>
              <SettingsCenter/>
              <Footer />
            </>
          }
          />
           <Route
          path="/UpdateDetails"
          element={
            <>
              <FullProfileUpdate/>
              <Footer />
            </>
          }
          />
        {/* Route for AccountHome page with Footer only */}
        <Route
          path="/account"
          element={
            <>
              <AccountHome />
              <Footer />
            </>
          }
        />
        {/* Route for Account VIP page with Footer only */}
        <Route
          path="/vip"
          element={
            <>
              <Vip />
              <Footer />
            </>
          }
        />
        <Route
          path="/Avatar"
          element={
            <>
              <AvatarSelection />
            </>
          }
        />
        <Route
          path="/deposithistory"
          element={
            <>
             <Header />
             <DepositHistory />
              <Footer />
              
            </>
          }
        />
         <Route
          path="/withdrawalhistory"
          element={
            <>
             <Header />
             <WithdrawalHistory />
              <Footer />
              
            </>
          }
        />
        <Route
          path="/addbank"
          element={
            <>
             
             <EWalletPayment1 />
             
              
            </>
          } 
          />
           <Route
          path="/eWalletPayment2"
          element={
            <>
             
             <EWalletPayment2 />
             
              
            </>
          } 
          />
         <Route
          path="/ChangePassword"
          element={
            <>
              <ChangePassword />
            </>
          }
        />
        {/* Route for Account Game Stats page with  */}
        <Route
          path="/gameStats"
          element={
            <>
              <Header />
              <GameStats />
              <Footer />
            </>
          }
        />
         {/* Route for Account Safe Box page */}
         <Route
          path="/safeBox"
          element={
            <>
            <Header />
              <SafeBox />
              <Footer />
            </>
          }
        />
        {/* Route for Account Customer Service page */}
        <Route
          path="/customerService"
          element={
            <>
            <Header />
              <CustomerService />
              <Footer />
            </>
          }
        />
        {/* Route for Account Customer Service page */}
        <Route
          path="/guide"
          element={
            <>
            <Header />
              <Guide />
              <Footer />
            </>
          }
        />
        {/* Route for Account About page */}
        <Route
          path="/about"
          element={
            <>
            <Header />
              <About />
              <Footer />
            </>
          }
        />
        {/* Route for Account AboutDetail page */}
        <Route
          path="/aboutDetail"
          element={
            <>
            <Header />
              <AboutDetail />
              <Footer />
            </>
          }
        />
        {/* Route for Account AboutDetail2 page */}
        <Route
          path="/aboutDetail2"
          element={
            <>
            <Header />
              <AboutDetail2 />
              <Footer />
            </>
          }
        />
        {/* Route for Account Feedback page with y */}
        <Route
          path="/feedback"
          element={
            <>
              <Header />
              <UserFeedback />
              <Footer />
            </>
          }
        />
        {/* Route for DepositHome page with Footer only */}
        <Route
          path="/deposit"
          element={
            <>
              <DepositHome />
              <Footer />
            </>
          }
        />
        {/* Route for WithdrawHome page with Footer only */}
        <Route
          path="/withdraw"
          element={
            <>
              <WithdrawHome />
              <Footer />
            </>
          }
        />
        {/* Route for AgencyHome page with Footer only */}
      
        {/* route for login page  */}
        <Route
          path="/login"
          element={
            <>
              <Login />
              {/* <Footer /> */}
            </>
          }
        />
        {/* route for register page  */}
        <Route
          path="register"
          element={
            <>
              <Register />
              {/* <Footer /> */}
            </>
          }
        />
        {/* route for register page  */}
        <Route
          path="/game"
          element={
            <>
              <Header />
              <Game />
              <Footer />
              {/* <Footer /> */}
            </>
          }
        />

        {/* route for register page  */}
        <Route
          path="/forgot"
          element={
            <>
              <Forgot />
              {/* <Footer /> */}
            </>
          }
        />
        {/* route for Game Listing page  */}
        <Route
          path="/GameListing/:id"
          element={
            <>
              <Header />
              <GameListing />
              <Footer />
            </>
          }
        />
        <Route
          path="/GameListing"
          element={
            <>
              <Header />
              <GameListing />
              <Footer />
            </>
          }
        />
        {/* route for Category Listing page  */}
        <Route
          path="/CategoriesListing"
          element={
            <>
              <Header />
              <CategoriesList />
              <Footer />
            </>
          }
        />
        {/* route for Send OTP page  */}
        <Route
          path="/Sendotp"
          element={
            <>
              <Header />
              <Sendotp />
              <Footer />
            </>
          }
        />
        {/* route for Activity First Recharge page  */}
        <Route
          path="/firstrecharge"
          element={
            <>
              <Header />
              <FirstRecharge />
              <Footer />
            </>
          }
        />
        {/* route for Activity detail page  */}
       
         <Route
          path="/activitydetail/:id"
          element={
            <>
              <Header />
              <ActivityDetail />
              <Footer />
            </>
          }
        />
       
        <Route
          path="/activitydetail"
          element={
            <>
              <Header />
              <ActivityDetail />
              <Footer />
            </>
          }
        />
        {/* route for Activity Daily Tasks page  */}
        <Route
          path="/dailytasks"
          element={
            <>
              <Header />
              <DailyTasks />
              <Footer />
            </>
          }
        />
        {/* route for Activity Rebate Tasks page  */}
        <Route
          path="/rebate"
          element={
            <>
              <Header />
              <Rebate />
              <Footer />
            </>
          }
        />
        {/* route for Activity Super Jackpot Tasks page  */}
        <Route
          path="/superJackpot"
          element={
            <>
              <Header />
              <SuperJackpot />
              <Footer />
            </>
          }
        />
        {/* route for Activity Redeem Gift Tasks page  */}
        <Route
          path="/redeemGift"
          element={
            <>
              <Header />
              <RedeemGift />
              <Footer />
            </>
          }
        />
           {/* Route for Agency team Report page with Footer only */}
           <Route
          path="/teamReport"
          element={
            <>
              <Header />
              <TeamReport />
              <Footer />
            </>
          }
        />
        {/* Route for Rebate Ratio page with Footer only */}
        <Route
          path="/rebateRatio"
          element={
            <>
              <Header />
              <RebateRatio />
              <Footer />
            </>
          }
        />
        {/* Route for Agency My Commission page with Footer only */}
        <Route
          path="/myCommission"
          element={
            <>
              <Header />
              <MyCommission />
              <Footer />
            </>
          }
        />
        {/* Route for Agency promotion Rule page with Footer only */}
        <Route
          path="/promotionRule"
          element={
            <>
              <Header />
              <PromotionRule />
              <Footer />
            </>
          }
        />
        {/* Route for AgencyHome page with Footer only */}
        <Route
          path="/agency"
          element={
            <>
              <AgencyHome />
              <Footer />
            </>
          }
        />
        {/* Route for Agency server page with Footer only */}
        <Route
          path="/server"
          element={
            <>
              <Header />
              <AgentLine />
              <Footer />
            </>
          }
        />
        {/* route for Activity Daily Sign In Tasks page  */}
        <Route
          path="/dailySignIn"
          element={
            <>
              <Header />
              <DailySignIn />
              <Footer />
            </>
          }
        />
         <Route
          path="/withdawsblehistory"
          element={
            <>
              <Header />
              <WithdrawalHistory />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
