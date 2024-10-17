import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/image/pak-logo-white.png";

const ForgotPassword = () => {

  const handleSendOtp = async () => {


    const fullPhoneNumber = `${countryCode}${phoneNum}`;
    if (!validatePhoneNumber(phoneNum)) {
      return setPhoneError("Phone number must be 10 digits and contain only numbers.");
    } else {
      setPhoneError(""); // Clear the error if valid
    }

    const formdata = new FormData();
    formdata.append("number", fullPhoneNumber);

    localStorage.setItem("fullPhoneNumber", fullPhoneNumber);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    // setOtpSent(true);
    setIsSending(true);
    try {
      const response = await fetch(`${baseURLAPI}users/send_sms`, requestOptions);
      const result = await response.json(); // Parse the response as JSON
      console.log("send otp", result);
      if (result.status === "success") {
        // Set the OTP in state
        console.log("your OTP is : ", result.otp);
        //setOtp(result.otp);
        setOtpSent(true);
        startTimer(59);
      } else if (result.status === 'fail') {
        setPhoneError("Your mobile number is already registered. Please log in or use a different number.");
      } else {
        setPhoneError("");
      }
    } catch (error) {
      console.error(error);
    }

  };

  const handleResendOtp = async () => {
    await handleSendOtp(); // Reuse the handleSendOtp logic
  };



  const handleOtpVerification = async () => {
    // Retrieve the fullPhoneNumber from localStorage 
    const storedPhoneNumber = localStorage.getItem("fullPhoneNumber");
    console.log('Stored phone number:', storedPhoneNumber);

    if (!storedPhoneNumber) {
      console.error("Phone number not found in local storage");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ci_session=cqrau2nhdp1thd77jodgp73d8nfl73kv");

    const verifyData = JSON.stringify({
      otp: otp, // Assuming 'otp' is the variable holding the entered OTP
      mobile: storedPhoneNumber
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: verifyData,
      redirect: "follow"
    };

    try {
      const response = await fetch(`${baseURLAPI}users/verify_otp`, requestOptions);

      // Try to parse as text (since your second snippet uses .text())
      const result = await response.text();
      console.log("Verification result:", result);

      // You can parse the result to JSON if you expect JSON response
      let jsonResult;
      try {
        jsonResult = JSON.parse(result); // Attempt to parse if it's JSON
      } catch (error) {
        console.warn("Response is not in JSON format");
      }
      setIsOtpVerified(true);
      setOtpSent(false);
      alert("OTP verified successfully");
      setOtpSent(false);  // Disable OTP input after successful verification
      startTimer(0);
    }
    catch (error) {
      console.error("Error during OTP verification:", error);
      alert("An error occurred while verifying the OTP. Please try again.");
    }
  };

 
  const handleBackClick = () => {
    navigator(-1);
    
  };


  const [activeTab, setActiveTab] = useState("phone");
  const [phone, setPhone] = useState('');
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [passwordEmail, setPasswordEmail] = useState('');
  const [passwordEmailNew, setPasswordEmailNew] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordNew, setShowPasswordNew] = useState(false);
  const [showPasswordEmail, setShowPasswordEmail] = useState(false);
  const [showPasswordEmailNew, setShowPasswordEmailNew] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPasswordNew = () => {
    setShowPasswordNew(!showPasswordNew);
  };
  const toggleShowPasswordEmail = () => {
    setShowPasswordEmail(!showPasswordEmail);
  };
  const toggleShowPasswordEmailNew = () => {
    setShowPasswordEmailNew(!showPasswordEmailNew);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Phone:', phone, 'Password:', password, 'Remember Me:', rememberMe);
  };

  const handleRegister = () => {
    console.log('Redirect to registration page');
  };

  const countryCodes = [
    { code: '+92' }
    // Add more country codes and names here
  ];

  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
  };

  // Function to check if phone number is valid
  const isPhoneNumberValid = () => {
    // Basic check for non-empty phone number; you might want to improve this
    return phone.trim().length > 0;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh">
            <div className="row login-bg align-items-center">
              <div className="col-2">
                <svg
                  width={21}
                  height={21}
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleBackClick}
                  style={{ cursor: "pointer" }}
                >
                  <path
                    d="M13.6634 18.3412C13.8999 18.109 14.0345 17.7924 14.0377 17.461C14.0408 17.1295 13.9121 16.8104 13.68 16.5738L7.55115 10.3282L13.7967 4.19934C14.0266 3.96575 14.1556 3.6512 14.1558 3.32344C14.1561 2.99568 14.0276 2.68094 13.798 2.447C13.5685 2.21307 13.2562 2.07866 12.9285 2.07272C12.6008 2.06678 12.2839 2.18979 12.046 2.41526L4.90835 9.41951C4.67182 9.6517 4.53718 9.96833 4.53405 10.2998C4.53093 10.6312 4.65957 10.9503 4.89169 11.1869L11.8959 18.3245C12.1281 18.5611 12.4448 18.6957 12.7762 18.6988C13.1076 18.702 13.4268 18.5733 13.6634 18.3412Z"
                    fill="black"
                    style={{ fill: "#fff" }}
                  />
                </svg>
              </div>
              <div className="col-8 text-center">
                <img src={logo} alt="" className="img-fluid login-logo" />
              </div>
              <div className="col-12">
                <div className="login-head">
                  <h5>Forgot password</h5>
                  <p>
                    Please retrieve/change your password through your mobile phone number or email
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tabs-pills">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "phone" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("phone")}
                        href="#phone"
                      >
                        <svg
                          height="26px"
                          width="26px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 27.442 27.442"
                          xml:space="preserve"
                        >
                          <g>
                            <path
                              d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546
                                c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481
                                s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469
                                c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z
                                M19.995,21.1H7.448V3.373h12.547V21.1z"
                            />
                          </g>
                        </svg>
                        Phone Reset
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "email" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("email")}
                        href="#email"
                      >
                        <svg
                          width="26px"
                          height="26px"
                          viewBox="0 -3.5 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill-rule="evenodd"
                            sketch:type="MSPage"
                          >
                            <g
                              id="Icon-Set-Filled"
                              sketch:type="MSLayerGroup"
                              transform="translate(-414.000000, -261.000000)"
                            >
                              <path
                                d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
                                id="mail"
                                sketch:type="MSShapeGroup"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        Mailbox Reset
                      </a>
                    </li>
                  </ul>

                  {/* Tab Content */}
                  <div className="tab-content mt-3">
                    <div
                      className={`tab-pane fade ${
                        activeTab === "phone" ? "show active" : ""
                      }`}
                      id="phone"
                    >
                      <form onSubmit={handleLogin}>
                        <div className="mt-4">
                          <label htmlFor="phone" className="form-label">
                            <svg
                              height="20px"
                              width="20px"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 27.442 27.442"
                              xml:space="preserve"
                              style={{ fill: "#f95959" }}
                            >
                              <g>
                                <path
                                  d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546
                                        c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481
                                        s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469
                                        c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z
                                        M19.995,21.1H7.448V3.373h12.547V21.1z"
                                />
                              </g>
                            </svg>
                            Phone Number
                          </label>
                          <div className="input-group counrty-code">
                            <select
                              className="form-select"
                              value={countryCode}
                              onChange={handleCountryChange}
                            >
                              {countryCodes.map((country) => (
                                <option key={country.code} value={country.code}>
                                  {country.code}
                                </option>
                              ))}
                            </select>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Please enter the phone number"
                              id="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label htmlFor="password" className="form-label">
                                <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="#f95959" />
                                    <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#f95959" />
                                    <path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="#f95959" />
                                    <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                A new password
                          </label>
                          <div className="input-group">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="form-control"
                              placeholder="A new password"
                              id="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={toggleShowPassword}
                            >
                              {showPassword ? <EyeSlash /> : <Eye />}
                            </button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label htmlFor="password" className="form-label">
                                <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="#f95959" />
                                    <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#f95959" />
                                    <path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="#f95959" />
                                    <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                Confirm new password
                          </label>
                          <div className="input-group">
                            <input
                              type={showPasswordNew ? "text" : "password"}
                              className="form-control"
                              placeholder="Confirm new password"
                              id="password"
                              value={passwordNew}
                              onChange={(e) => setPasswordNew(e.target.value)}
                              required
                            />
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={toggleShowPasswordNew}
                            >
                              {showPassword ? <EyeSlash /> : <Eye />}
                            </button>
                          </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="form-label">
                                
                                <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39542 13.1046 8.49999 12 8.49999C10.8954 8.49999 10 9.39542 10 10.5C10 11.6046 10.8954 12.5 12 12.5ZM12 12.5V15.5M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#f95959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Verification Code
                          </label>
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Please enter the confirmation code"
                              required
                            />
                            <button
                              type="button"
                              className="verification-btn"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                        <div className="form-check mt-4 custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            I have read and agree 
                          </label>
                        </div>

                        <div className="text-center mt-4">
                          <button type="submit" className="registration-btn">
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className={`tab-pane fade ${
                        activeTab === "email" ? "show active" : ""
                      }`}
                      id="email"
                    >
                       <form onSubmit={handleLogin}>
                        <div className="mt-4">
                          <label htmlFor="phone" className="form-label">
                          <svg
                          width="26px"
                          height="26px"
                          viewBox="0 -3.5 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                          style={{ fill : "#f95959"}}
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill-rule="evenodd"
                            sketch:type="MSPage"
                          >
                            <g
                              id="Icon-Set-Filled"
                              sketch:type="MSLayerGroup"
                              transform="translate(-414.000000, -261.000000)"
                            >
                              <path
                                d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
                                id="mail"
                                sketch:type="MSShapeGroup"
                              ></path>
                            </g>
                          </g>
                        </svg>
                            Mail
                          </label>
                          <div className="input-group">
                            <input
                              type="mail"
                              className="form-control"
                              placeholder="Please enter your email"
                              id="phone"
                              value={mail}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label htmlFor="password" className="form-label">
                                <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="#f95959" />
                                    <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#f95959" />
                                    <path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="#f95959" />
                                    <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                           A New Password
                          </label>
                          <div className="input-group">
                            <input
                              type={showPasswordEmail ? "text" : "password"}
                              className="form-control"
                              placeholder="A New Password"
                              id="password"
                              value={passwordEmail}
                              onChange={(e) => setPasswordEmail(e.target.value)}
                              required
                            />
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={toggleShowPasswordEmail}
                            >
                              {showPasswordEmail ? <EyeSlash /> : <Eye />}
                            </button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label htmlFor="password" className="form-label">
                                <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="#f95959" />
                                    <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#f95959" />
                                    <path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="#f95959" />
                                    <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                Confirm new password
                          </label>
                          <div className="input-group">
                            <input
                              type={showPasswordEmailNew ? "text" : "password"}
                              className="form-control"
                              placeholder="Confirm new password"
                              id="password"
                              value={passwordEmailNew}
                              onChange={(e) => setPasswordEmailNew(e.target.value)}
                              required
                            />
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={toggleShowPasswordEmailNew}
                            >
                              {showPasswordEmailNew ? <EyeSlash /> : <Eye />}
                            </button>
                          </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="form-label">
                                
                                <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39542 13.1046 8.49999 12 8.49999C10.8954 8.49999 10 9.39542 10 10.5C10 11.6046 10.8954 12.5 12 12.5ZM12 12.5V15.5M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#f95959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Verification Code
                          </label>
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Please enter the confirmation code"
                              required
                            />
                            <button
                              type="button"
                              className="verification-btn"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                        <div className="form-check mt-4 custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            I have read and agree
                          </label>
                        </div>

                        <div className="text-center mt-4">
                          <button type="submit" className="registration-btn">
                            Reset
                          </button>
                        </div>
                        
                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
