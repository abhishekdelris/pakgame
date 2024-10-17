import React, { useState } from "react";
import Cookies from 'js-cookie';
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/image/pak-logo-white.png";

const Login = () => {
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const [activeTab, setActiveTab] = useState("phone");
  const [phone, setPhone] = useState('');
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState(""); 
  const [passwordEmail, setPasswordEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordEmail, setShowPasswordEmail] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [countryCode, setCountryCode] = useState('92');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const validatePhoneNumber = (number) => {
    if (number.startsWith("0")) {
      number = number.slice(1); // Remove the first character
    }
    const phonePattern = /^\d{10}$/; // Regex for 10 digits only
    return phonePattern.test(number);
  };
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    setPhone(input);
    if (!validatePhoneNumber(input)) {
      setPhoneError("Phone number must be 10 digits and contain only numbers.");
    } else {
      setPhoneError(""); // Clear the error if valid
     
    }
  };

  let phoneNum;
  if (phone.startsWith("0")) {
    phoneNum = phone.slice(1); // Remove the first character
  } else {
    phoneNum = phone;
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPasswordEmail = () => {
    setShowPasswordEmail(!showPasswordEmail);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Phone:', phoneNum, 'Password:', password, 'Remember Me:', rememberMe);
    e.preventDefault();
    const fullPhoneNumber = `${countryCode}${phoneNum}`;

    const registrationData = {
      phone: fullPhoneNumber,
      password: password,
      countryCode: countryCode
    };

    fetch(`${baseURLAPI}users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registrationData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        if (!data.error) {
          const userId = data.data.id;
          const username = data.data.username;
          const mobile = data.data.mobile;

          // // Store the user_id in session storage
          // sessionStorage.setItem('user_id', userId);
          // sessionStorage.setItem('username', username);
          // sessionStorage.setItem('mobile', mobile);

           // Set cookies for user data
        Cookies.set('user_id', userId, { expires: 7 }); // Expires in 7 days
        Cookies.set('username', username, { expires: 7 });
        Cookies.set('mobile', mobile, { expires: 7 });


          alert("Login successful!");
          navigate('/');
          triggerModal();
        } else {
          alert("Login failed: " + data.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("An error occurred during registration.");
      });
  };

  const triggerModal = () => {
    const modalShown = Cookies.get('modal_shown');

    if (!modalShown) {
      // Show modal after 5 seconds
      const timer = setTimeout(() => {
        setShowModal(true);
        // Set the modal_shown cookie to true so it's shown only once
        Cookies.set('modal_shown', 'true', { expires: 1 });
      }, 5000); // 5000 ms = 5 seconds

      // Cleanup timer if component unmounts
      return () => clearTimeout(timer);
    }
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
  const isEmailNumberValid = () => {
    // Basic check for non-empty phone number; you might want to improve this
    return mail.trim().length > 0;
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
                <Link to={'/'}>
                  <img src={logo} alt="" className="img-fluid login-logo" />
                </Link>
              </div>
              <div className="col-12">
                <div className="login-head">
                  <h5>Log in</h5>
                  <p>
                    Please log in with your phone number or email <br />
                    If you forget your password, please contact customer service
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
                        className={`nav-link ${activeTab === "phone" ? "active" : ""
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
                        Login
                      </a>
                    </li>
                    {/* <li className="nav-item">
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
                        Email Login
                      </a>
                    </li> */}
                  </ul>

                  {/* Tab Content */}
                  <div className="tab-content mt-3">
                    <div
                      className={`tab-pane fade ${activeTab === "phone" ? "show active" : ""
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
                              className={`form-control ${phoneError ? "is-invalid" : ""}`}
                              placeholder="Please enter the phone number"
                              id="phone"
                              value={phone}
                              onChange={handlePhoneChange}
                              // onChange={(e) => setPhone(e.target.value)}
                              required
                            />
                            {phoneError && <div className="invalid-feedback">{phoneError}</div>} {/* Error message */}
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
                            Password
                          </label>
                          <div className="input-group">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="form-control"
                              placeholder="Password"
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
                            Remember Me
                          </label>
                        </div>

                        <div className="text-center mt-4">
                          <button
                            type="submit"
                            className="login-btn"
                            disabled={!isPhoneNumberValid()}
                          >
                            Log In
                          </button>
                          <Link to={'/register'}>
                            <button type="submit" className="registration-btn">
                              Register
                            </button>
                          </Link>
                        </div>

                      </form>
                    </div>
                    <div
                      className={`tab-pane fade ${activeTab === "email" ? "show active" : ""
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
                              style={{ fill: "#f95959" }}
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
                              id="mai;"
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
                            Password
                          </label>
                          <div className="input-group">
                            <input
                              type={showPasswordEmail ? "text" : "password"}
                              className="form-control"
                              placeholder="Password"
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
                              {showPassword ? <EyeSlash /> : <Eye />}
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
                            Remember Me
                          </label>
                        </div>

                        <div className="text-center mt-4">
                          <button
                            type="submit"
                            className="login-btn"
                            disabled={!isEmailNumberValid()}
                          >
                            Log In
                          </button>
                          <button type="submit" className="registration-btn">
                            Register
                          </button>
                        </div>


                      </form>
                    </div>
                    <div className="mt-4">
                      <div className="forgot-pass">
                        <Link to={'/forgot'}>

                          <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="#f95959" />
                            <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#f95959" />
                            <path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="#f95959" />
                            <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>

                          <p>Forgot password</p>
                        </Link>
                        <Link to={'/#'}>
                          <svg
                            width="26px"
                            height="26px"
                            viewBox="0 0 24 24"
                            id="Layer_1"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ fill: "#f95959" }}
                          >
                            <defs>
                              <style
                                dangerouslySetInnerHTML={{
                                  __html:
                                    ".cls-1{fill:none;stroke:#f95959;stroke-miterlimit:10;stroke-width:1.91px;}",
                                }}
                              />
                            </defs>
                            <rect
                              className="cls-1"
                              x="6.27"
                              y="5.32"
                              width="11.45"
                              height="15.27"
                              rx="5.73"
                            />
                            <path
                              className="cls-1"
                              d="M17.73,9.14h1.91A2.86,2.86,0,0,1,22.5,12v1.91a2.86,2.86,0,0,1-2.86,2.86H17.73a0,0,0,0,1,0,0V9.14A0,0,0,0,1,17.73,9.14Z"

                            />
                            <path
                              className="cls-1"
                              d="M1.5,9.14H3.41A2.86,2.86,0,0,1,6.27,12v1.91a2.86,2.86,0,0,1-2.86,2.86H1.5a0,0,0,0,1,0,0V9.14A0,0,0,0,1,1.5,9.14Z"
                              transform="translate(7.77 25.91) rotate(180)"

                            />
                            <path
                              className="cls-1"
                              d="M4.36,9.14h0A7.64,7.64,0,0,1,12,1.5h0a7.64,7.64,0,0,1,7.64,7.64h0"

                            />
                            <path
                              className="cls-1"
                              d="M19.64,16.77v1a4.78,4.78,0,0,1-4.78,4.77"

                            />
                          </svg>
                          <p>Customer Service</p>
                        </Link>
                      </div>
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

export default Login;
