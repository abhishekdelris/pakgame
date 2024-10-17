import React, { useEffect, useState } from 'react';
import './SettingsCenter.css'; // Import your CSS for styles
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import depositIcon from '../assets/image/deposite-icon.png';
import AccountHead from '../account/AccountHead';
import AccountSafe from '../account/AccountSafe';
import UserService from '../account/UserService';
import userTag from '../assets/image/user-tag.png'
import rsImg from '../assets/image/rs-img.png'
import userIcon1 from '../assets/image/user-icon/user-icon-1.png'
import userIcon2 from '../assets/image/user-icon/user-icon-2.png'
import userIcon3 from '../assets/image/user-icon/user-icon-3.png'
import userIcon4 from '../assets/image/user-icon/user-icon-4.png'

const SettingsCenter = () => {
  const navigate = useNavigate();
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  const handleBackClick = () => {
    navigate(-1);
    // alert("hello")
  };
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openAvtar, setOpenAvtar] = useState(false);
  const [nickName, setNickName] = useState('');

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
  const handleOpen = () => setOpenAvtar(true);
  const handleClose = () => {
    setOpenAvtar(false);
    // setIsSubmitted(false); // Reset the submission state when modal closes
  };
  const handleNickNameSubmit = () => {
    // alert("this is submit")
    const formdata = new FormData();
    formdata.append("user_id", userId);
    formdata.append("username", nickName);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch("https://delristech-projects.in/pak_game/index.php/api/users/update_nickname", requestOptions)
      .then((response) => response.json()) // Assuming API returns JSON
      .then((result) => {
        console.log(result); // Log the result to see the response
        if (result.error === false) {
          setOpenAvtar(false);
          // If the response contains a URL, redirect
          //|| result.referralLink;
        } else {
          console.error("No URL found in the response.");
        }
      })
      .catch((er) => console.error("Error:", er));
  }
  const handleSendReferral = () => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=85c9g64c108kdala2ocdtihvb4eak7uo");

    const formdata = new FormData();
    formdata.append("user_id", userId);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };

    fetch("https://delristech-projects.in/pak_game/index.php/api/users/send_referral_link", requestOptions)
      .then((response) => response.json()) // Assuming API returns JSON
      .then((result) => {
        console.log(result); // Log the result to see the response
        if (result && result.referralLink) {
          // If the response contains a URL, redirect
          window.location.href = result.referralLink || "http://localhost:5173/register?referral=WJPKEX"   //|| result.referralLink;
        } else {
          console.error("No URL found in the response.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const copyUID = () => {
    navigator.clipboard.writeText(profile.data.id);
    alert("UID copied!");
  };

  // nickName = profile.data.username;

  return (


    <div className="settings-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto agency-bg-color">
            <div className="row account-user-top">

              <div className="col-12">
                {/* <div className="account-user-card"> */}
                {/* <div className="account-user-heading">
                <img src={profile.data.profile_image} className="user-profile" alt />
                <p>Nickname</p>
             </div> */}
                <div className="userInfo__container-setting-center">

                  {/* Header Section with Avatar and Change Avatar Button */}
                  <div className="userInfo__container-setting-center-header">
                    <div className="userInfo__container-content__avatar">
                      <img src={`https://delristech-projects.in/pak_game/${profile.data.profile_image}`} alt="Avatar" />
                    </div>

                    <div className="userInfo__container-setting-center-header-edit">
                      <Link to={"/Avatar"} >
                        <span style={{ color: 'black' }}>Change avatar</span>
                        <svg
                          width={10}
                          height={11}
                          className="ms-2"
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.382399 0.355303C0.137549 0.499761 0 0.695661 0 0.899925C0 1.10419 0.137549 1.30009 0.382399 1.44455L6.84743 5.25768L0.382399 9.07081C0.144488 9.21609 0.0128435 9.41068 0.0158193 9.61266C0.018795 9.81463 0.156153 10.0078 0.398309 10.1507C0.640464 10.2935 0.968042 10.3745 1.31049 10.3763C1.65294 10.378 1.98285 10.3004 2.22918 10.16L9.6176 5.8023C9.86245 5.65784 10 5.46194 10 5.25768C10 5.05341 9.86245 4.85751 9.6176 4.71305L2.22918 0.355303C1.98425 0.210888 1.65211 0.129761 1.30579 0.129761C0.959466 0.129761 0.627323 0.210888 0.382399 0.355303Z"
                            fill="#C4B9B9"
                          />
                        </svg>
                      </Link>
                    </div>


                  </div>

                  {/* Nickname Section */}
                  <div className="userInfo__container-setting-center-content ar-1px-b" onClick={handleOpen}>
                    <h5>Nickname</h5>
                    <div>
                      <span>{profile.data.username}</span>
                      <i className="van-icon van-icon-arrow" style={{ color: '#888' }}></i>
                      <svg
                        width={10}
                        height={11}
                        className="ms-2"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.382399 0.355303C0.137549 0.499761 0 0.695661 0 0.899925C0 1.10419 0.137549 1.30009 0.382399 1.44455L6.84743 5.25768L0.382399 9.07081C0.144488 9.21609 0.0128435 9.41068 0.0158193 9.61266C0.018795 9.81463 0.156153 10.0078 0.398309 10.1507C0.640464 10.2935 0.968042 10.3745 1.31049 10.3763C1.65294 10.378 1.98285 10.3004 2.22918 10.16L9.6176 5.8023C9.86245 5.65784 10 5.46194 10 5.25768C10 5.05341 9.86245 4.85751 9.6176 4.71305L2.22918 0.355303C1.98425 0.210888 1.65211 0.129761 1.30579 0.129761C0.959466 0.129761 0.627323 0.210888 0.382399 0.355303Z"
                          fill="#C4B9B9"
                        />
                      </svg>
                    </div>
                  </div>
                  {openAvtar && (
                    <div className="modal-overlay">
                      <div className="modal-content">
                        <h2 className="modal-title">Change NickName</h2>

                        <div className="modal-body">
                          <input
                            type="text"
                            placeholder="Required fields"
                            value={nickName}
                            onChange={(e) => setNickName(e.target.value)}
                          />
                        </div>

                        <div className="modal-footer">
                          <button className="confirm-btn" onClick={handleNickNameSubmit} >
                            Confirm
                          </button>

                          <button className="cancel-btn" onClick={handleClose}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* UID Section */}
                  <div className="userInfo__container-setting-center-content">
                    <h5>UID</h5>
                    <div className='ms-6'>
                      <span>{profile.data.id}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" onClick={copyUID} className="svg-icon icon-copy" viewBox="0 0 448 512">
                        <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
                        <use xlinkHref="#icon-copy" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="security-info mt-4">
              <h2>Security information</h2>

              <div className="security-item">
                <div className="item-left">
                  <label className="form-label">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" className="me-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="#f95959" />
                      <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#f95959" />
                      <path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="#f95959" />
                      <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Login password
                  </label>
                </div>
                <Link to={"/ChangePassword"} >
                  <button className="edit-button">Edit
                    <svg
                      width={10}
                      height={11}
                      className="ms-2"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.382399 0.355303C0.137549 0.499761 0 0.695661 0 0.899925C0 1.10419 0.137549 1.30009 0.382399 1.44455L6.84743 5.25768L0.382399 9.07081C0.144488 9.21609 0.0128435 9.41068 0.0158193 9.61266C0.018795 9.81463 0.156153 10.0078 0.398309 10.1507C0.640464 10.2935 0.968042 10.3745 1.31049 10.3763C1.65294 10.378 1.98285 10.3004 2.22918 10.16L9.6176 5.8023C9.86245 5.65784 10 5.46194 10 5.25768C10 5.05341 9.86245 4.85751 9.6176 4.71305L2.22918 0.355303C1.98425 0.210888 1.65211 0.129761 1.30579 0.129761C0.959466 0.129761 0.627323 0.210888 0.382399 0.355303Z"
                        fill="#C4B9B9"
                      />
                    </svg>
                  </button>
                </Link>
              </div>

              <div className="security-item">
                <div className="item-left">
                  <label className="form-label">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px" className="me-2" fill="#ff6457"><path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 13 15 C 11.35503 15 10 16.35503 10 18 L 10 32 C 10 33.64497 11.35503 35 13 35 L 37 35 C 38.64497 35 40 33.64497 40 32 L 40 18 C 40 16.35503 38.64497 15 37 15 L 13 15 z M 13.414062 17 L 36.583984 17 L 27.677734 25.892578 C 26.18494 27.382984 23.796834 27.382819 22.304688 25.890625 L 13.414062 17 z M 38 18.412109 L 38 31.587891 L 31.402344 25 L 38 18.412109 z M 12 18.414062 L 18.585938 25 L 12 31.585938 L 12 18.414062 z M 29.988281 26.412109 L 36.585938 33 L 13.414062 33 L 20 26.414062 L 20.890625 27.304688 C 23.146478 29.56054 26.832638 29.562194 29.089844 27.308594 L 29.988281 26.412109 z" /></svg>
                    Bind mailbox</label>
                </div>
                <button className="edit-button">to bind
                  <svg
                    width={10}
                    height={11}
                    className="ms-2"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.382399 0.355303C0.137549 0.499761 0 0.695661 0 0.899925C0 1.10419 0.137549 1.30009 0.382399 1.44455L6.84743 5.25768L0.382399 9.07081C0.144488 9.21609 0.0128435 9.41068 0.0158193 9.61266C0.018795 9.81463 0.156153 10.0078 0.398309 10.1507C0.640464 10.2935 0.968042 10.3745 1.31049 10.3763C1.65294 10.378 1.98285 10.3004 2.22918 10.16L9.6176 5.8023C9.86245 5.65784 10 5.46194 10 5.25768C10 5.05341 9.86245 4.85751 9.6176 4.71305L2.22918 0.355303C1.98425 0.210888 1.65211 0.129761 1.30579 0.129761C0.959466 0.129761 0.627323 0.210888 0.382399 0.355303Z"
                      fill="#C4B9B9"
                    />
                  </svg>
                </button>
              </div>

              <div className="security-item">
                <div className="item-left">
                
<svg width="20px" height="20px" className="me-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" stroke="#ff6457" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.34" d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" stroke="#ff6457" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ff6457" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    

                  <label className="form-label">
                    Update Your Profile </label>
                </div>

                <Link to={"/UpdateDetails"} >
                <button className="edit-button">Edit
                  <svg
                    width={10}
                    height={11}
                    className="ms-2"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.382399 0.355303C0.137549 0.499761 0 0.695661 0 0.899925C0 1.10419 0.137549 1.30009 0.382399 1.44455L6.84743 5.25768L0.382399 9.07081C0.144488 9.21609 0.0128435 9.41068 0.0158193 9.61266C0.018795 9.81463 0.156153 10.0078 0.398309 10.1507C0.640464 10.2935 0.968042 10.3745 1.31049 10.3763C1.65294 10.378 1.98285 10.3004 2.22918 10.16L9.6176 5.8023C9.86245 5.65784 10 5.46194 10 5.25768C10 5.05341 9.86245 4.85751 9.6176 4.71305L2.22918 0.355303C1.98425 0.210888 1.65211 0.129761 1.30579 0.129761C0.959466 0.129761 0.627323 0.210888 0.382399 0.355303Z"
                      fill="#C4B9B9"
                    />
                  </svg>
                </button>
                </Link>
              </div>

              <div className="security-item">
                <div className="item-left">
                  <label className="form-label">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" className="me-2" height="20px" fill="#ff6457">    <path d="M21.915,10.752L21.697,9h-4.393l2.974-2.974l-1.548-1.411C16.88,2.929,14.49,2,12,2C6.486,2,2,6.486,2,12s4.486,10,10,10 s10-4.486,10-10C22,11.61,21.973,11.214,21.915,10.752z M12,20c-4.418,0-8-3.582-8-8s3.582-8,8-8c2.076,0,3.96,0.797,5.382,2.093 l-2.134,2.134C14.372,7.473,13.247,7,12,7c-2.761,0-5,2.239-5,5s2.239,5,5,5c2.049,0,3.806-1.236,4.578-3H13v-3h6.931 C19.972,11.328,20,11.661,20,12C20,16.418,16.418,20,12,20z M11,9.171V11v3v0.829C9.836,14.416,9,13.304,9,12S9.836,9.584,11,9.171 z" /></svg>

                    Google Verification </label>
                </div>
                <button className="edit-button">Unopened
                  <svg
                    width={10}
                    height={11}
                    className="ms-2"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.382399 0.355303C0.137549 0.499761 0 0.695661 0 0.899925C0 1.10419 0.137549 1.30009 0.382399 1.44455L6.84743 5.25768L0.382399 9.07081C0.144488 9.21609 0.0128435 9.41068 0.0158193 9.61266C0.018795 9.81463 0.156153 10.0078 0.398309 10.1507C0.640464 10.2935 0.968042 10.3745 1.31049 10.3763C1.65294 10.378 1.98285 10.3004 2.22918 10.16L9.6176 5.8023C9.86245 5.65784 10 5.46194 10 5.25768C10 5.05341 9.86245 4.85751 9.6176 4.71305L2.22918 0.355303C1.98425 0.210888 1.65211 0.129761 1.30579 0.129761C0.959466 0.129761 0.627323 0.210888 0.382399 0.355303Z"
                      fill="#C4B9B9"
                    />
                  </svg>
                </button>
              </div>

              <div className="security-item">
                <div className="item-left">
                  <label className="form-label">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" className="me-2" height="20px" fill="#ff6457"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                    Updated version
                  </label>
                </div>
                <p className="version">1.0.9
                  <svg
                    width={10}
                    height={11}
                    className="ms-2"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.382399 0.355303C0.137549 0.499761 0 0.695661 0 0.899925C0 1.10419 0.137549 1.30009 0.382399 1.44455L6.84743 5.25768L0.382399 9.07081C0.144488 9.21609 0.0128435 9.41068 0.0158193 9.61266C0.018795 9.81463 0.156153 10.0078 0.398309 10.1507C0.640464 10.2935 0.968042 10.3745 1.31049 10.3763C1.65294 10.378 1.98285 10.3004 2.22918 10.16L9.6176 5.8023C9.86245 5.65784 10 5.46194 10 5.25768C10 5.05341 9.86245 4.85751 9.6176 4.71305L2.22918 0.355303C1.98425 0.210888 1.65211 0.129761 1.30579 0.129761C0.959466 0.129761 0.627323 0.210888 0.382399 0.355303Z"
                      fill="#C4B9B9"
                    />
                  </svg>
                </p>

              </div>
            </div>
            {/* <AccountSafe />
        <UserService /> */}
          </div>
        </div>

      </div>




    </div>


  );
};

export default SettingsCenter;
