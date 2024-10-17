import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import logo from "../assets/image/pak-logo-white.png";

const Register = () => {
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const [activeTab, setActiveTab] = useState("phone");
  const [phone, setPhone] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [countryCode, setCountryCode] = useState('92');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [timer, setTimer] = useState(0);
  const [inviteCodeError, setInviteCodeError] = useState("");
  const [inviteCodeValid, setInviteCodeValid] = useState(false);

  const location = useLocation(); // To access URL parameters
  // const history = useHistory(); // For redirecting after successful registration

  // Extract referral code from URL query parameters when the component loads
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const referral = queryParams.get("referral"); // Get the 'referral' parameter from the URL
    if (referral) {
      setInviteCode(referral);
    }
  }, [location.search]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validatePhoneNumber = (number) => {
    if (number.startsWith("0")) {
      number = number.slice(1); // Remove the first character
    }
    const phonePattern = /^\d{10}$/; // Regex for 10 digits only
    return phonePattern.test(number);
  };

  let phoneNum;
  if (phone.startsWith("0")) {
    phoneNum = phone.slice(1); // Remove the first character
  } else {
    phoneNum = phone;
  }
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    setPhone(input);
    if (!validatePhoneNumber(input)) {
      setPhoneError("Phone number must be 10 digits and contain only numbers.");
    } else {
      setPhoneError(""); // Clear the error if valid
    }
  };

  const startTimer = (duration) => {
    setTimer(duration);
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
        }
        return prevTimer - 1;
      });
    }, 1000);
  };
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

  // Function to check invite code
  const handleCheckInviteCode = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=qtktgahk0hocbo7ehc4db16u7lun5kj9");

    const formdata = new FormData();
    formdata.append("invite_code", inviteCode);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };

    try {
      const response = await fetch(`${baseURLAPI}Users/check_invite_code`, requestOptions);
      const result = await response.json();  // Parse the response as JSON
      console.log("invite code res", result);

      if (result.message === "Valid Invite Code !") {
        setInviteCodeValid(true);  // Invite code is valid
        setInviteCodeError("");  // Clear any previous error
      } else {
        setInviteCodeValid(false);  // Invite code is invalid
        setInviteCodeError("Invalid invite code, please try again.");
      }
    } catch (error) {
      console.error("Error checking invite code:", error);
      setInviteCodeError("An error occurred. Please try again later.");
    }
  };


  const handleRegistration = (e) => {
    e.preventDefault();

    if (!isOtpVerified) {
      alert("Please verify OTP before registering.");
      return;
    }

    // Make sure passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Prepare headers
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ci_session=ibb96pue2kcr781jklu1aj81hjgh1i2f");  // Ensure this session cookie is valid or dynamically fetched.

    // Prepare the registration data
    const registrationData = {
      phone: `${countryCode}${phoneNum}`,
      invite_code: inviteCode,
      password: password,
      confirm_password: confirmPassword,
      email: email,
      countryCode: countryCode,
      "username": `${countryCode}${phoneNum}`,
      profile_image: "upload/avtar/man.png"
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(registrationData),
      redirect: "follow"
    };

    // Perform the registration request
    fetch(`${baseURLAPI}users/register_user`, requestOptions)
      .then((response) =>   response.text()) // Handle response as text first
      .then((result) => {
        try {
          const parsedResult = JSON.parse(result); // Parse as JSON
          console.log("parsedResult",parsedResult);
          

          if (parsedResult.error === false) { // Assuming error is a boolean
            alert("Registration successful!");
            setEmailError("")

            navigate('/login');  // Redirect to login after successful registration
          } else if (parsedResult.error === true) {
            setEmailError("Email already registered!");
            console.log("email error", parsedResult.message);

          } else {
            setEmailError("");
            console.error("Unexpected error format:", parsedResult);
            alert(`${parsedResult.message}`);
          }
        } catch (error) {
          console.error("Response is not in JSON format:", error);
          alert("An error occurred while processing the registration.");
        }
      })
      .catch((error) => {
        console.error("Network error or other issue:", error);
        alert(`An error occurred during registration.${result}`);
      });

  };

  const countryCodes = [
    { code: '+92' }
  ];

  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
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
                  <h5>Register</h5>
                  <p>
                    Please register by phone number or email
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tabs-pills">
                  <ul className="nav nav-tabs">
                    <li className="nav-item w-75">
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
                                M19.708,22.08H7.733V4.98h11.975V22.08z"
                            />
                          </g>
                        </svg>
                        Phone Number
                      </a>
                    </li>
                    <li className="nav-item w-75">
                      <a
                        className={`nav-link ${activeTab === "email" ? "active" : ""
                          }`}
                        onClick={() => handleTabClick("email")}
                        href="#email"
                      >
                        <svg
                          height="26px"
                          width="26px"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 512 512"
                          xml:space="preserve"
                        >
                          <g>
                            <path
                              d="M256,294.1L464.9,160.1L47.1,160.1L256,294.1z M256,328.9c-5.2,0-10.4-1.4-15-4.1L32,184.7V384
                                c0,17.7,14.3,32,32,32h384c17.7,0,32-14.3,32-32V184.7L271,324.8C266.4,327.5,261.2,328.9,256,328.9z"
                            />
                          </g>
                        </svg>
                        Email Address
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${activeTab === "phone" ? "show active" : ""
                      }`}
                    id="phone"
                  >
                    <form onSubmit={handleRegistration}>
                      <div className="form-group country-code">
                        <label>Phone Number</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <select
                              className="form-control"
                              onChange={handleCountryChange}
                              value={countryCode}
                              disabled={!countryCode}  // Make sure countryCode is set first
                            >
                              {countryCodes.map((code) => (
                                <option key={code.code} value={code.code}>
                                  {code.code}
                                </option>
                              ))}
                            </select>
                          </div>
                          <input
                            type="text"
                            className={`form-control ${phoneError ? "is-invalid" : ""}`}
                            value={phone}
                            onChange={handlePhoneChange}
                            disabled={!countryCode}  // Only enable after countryCode is selected
                            required
                          />
                          {phoneError && <div className="invalid-feedback">{phoneError}</div>} {/* Error message */}
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary mt-2"
                          onClick={handleSendOtp}
                          disabled={!phone || phoneError || isSending || otpSent}  // Enable after phone is filled
                        >
                          {timer > 0 ? `Resend OTP in ${timer}s` : "Send OTP"}
                        </button>
                        {otpSent && timer === 0 && (
                          <button
                            type="button"
                            className="btn btn-secondary mt-2"
                            onClick={handleResendOtp}
                          >
                            Resend OTP
                          </button>
                        )}
                        {otpSent && (
                          <div className="form-group mt-3">
                            <label>Enter OTP</label>
                            <input
                              type="text"
                              className="form-control"
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                              required
                              disabled={!otpSent}  // OTP input is disabled until OTP is sent
                            />
                            <button
                              type="button"
                              className="btn btn-success mt-2"
                              onClick={handleOtpVerification}
                              disabled={!otp}  // OTP verification button is disabled until OTP is entered
                            >
                              Verify OTP
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Invite Code (Optional)</label>
                        <input
                          type="text"
                          className={`form-control ${inviteCodeError ? "is-invalid" : ""}`}  // Apply red border if error
                          value={inviteCode}
                          onChange={(e) => setInviteCode(e.target.value)}
                          disabled={!isOtpVerified}  // Enable invite code input only if OTP is verified
                        required/>
                        {inviteCodeError && <div className="invalid-feedback">{inviteCodeError}</div>} {/* Error message */}

                        {/* Button to validate invite code */}
                        <button
                          type="button"
                          className="btn btn-secondary mt-2"
                          onClick={handleCheckInviteCode}
                          disabled={!inviteCode || !isOtpVerified}  // Enable only if invite code is entered and OTP is verified
                        >
                          Validate Invite Code
                        </button>

                        {/* Success message */}
                        {inviteCodeValid && (
                          <div className="text-success mt-2">
                            Invite code is valid!
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <div className="input-group">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={!isOtpVerified}  // Disable password input until OTP is verified
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              onClick={toggleShowPassword}
                              style={{ cursor: "pointer" }}
                            >
                              {showPassword ? <EyeSlash /> : <Eye />}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <div className="input-group">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            disabled={!password}  // Disable confirm password until password is entered
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              onClick={toggleShowConfirmPassword}
                              style={{ cursor: "pointer" }}
                            >
                              {showConfirmPassword ? <EyeSlash /> : <Eye />}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          className={`form-control ${emailError ? "is-invalid" : ""}`}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={!confirmPassword}  // Disable email input until passwords are matched
                        />
                        {emailError && <div className="invalid-feedback">{emailError}</div>} {/* Error message */}
                      </div>
                      <div className="form-group">
                        <label>
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            disabled={!email}  // Disable 'Remember Me' checkbox until email is entered
                          />
                          &nbsp;Remember Me
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!email}  // Disable registration until all previous fields are completed
                      >
                        Register
                      </button>
                    </form>

                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === "email" ? "show active" : ""
                      }`}
                    id="email"
                  >
                    {/* Add email registration form here */}
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="text-center">
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className="login-link">
                      Login
                    </Link>
                  </p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
