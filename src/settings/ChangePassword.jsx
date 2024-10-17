import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import './UpdateProfile.css';

const ChangePassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    // Password management state
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(true); // Assuming OTP is verified

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // const userId = sessionStorage.getItem('user_id');
        const userId = Cookies.get('user_id');
        const formdata = new FormData();
        formdata.append("user_id", userId);
        formdata.append("old_password", oldPassword);
        formdata.append("new_password", password);

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        try {
            const response = await fetch(`${baseURLAPI}Users/change_password`, requestOptions);
            const result = await response.json();
            if (result.error === "false") {
                alert("Password changed successfully!");
                navigate("/account");
            } else {
                alert(result.message || "Password change failed.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while changing password.");
        }
    };

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    return (
        <div className='col-lg-4 col-md-6 col-12 mx-auto agency-bg-color'>
            <div className='title-header row mx-0'>
                <div className='backPage col-2'><svg
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
                </svg></div>
                <div className='col-8'><h4 className="text-center text-white">Change Password</h4></div>

            </div>

            <form onSubmit={handleChangePassword} className='p-2 mt-4'>
                <div className="form-group">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" className="me-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="#f95959" />
                        <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#f95959" />
                        <path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="#f95959" />
                        <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <label>Old Password</label>
                    <div className="input-group mt-2">
                        <input
                            type="text"
                            className='form-control'  // Apply red border if error
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        <div className="input-group-append">
                            <span
                                className="input-group-text"
                                onClick={toggleShowPassword}
                                style={{ cursor: "pointer" }}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" className="me-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="#f95959" />
                        <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#f95959" />
                        <path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="#f95959" />
                        <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <label>New Password</label>
                    <div className="input-group mt-2">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={!isOtpVerified}
                        />
                        <div className="input-group-append">
                            <span
                                className="input-group-text"
                                onClick={toggleShowPassword}
                                style={{ cursor: "pointer" }}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" className="me-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16Z" fill="#f95959" />
                        <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill="#f95959" />
                        <path d="M17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="#f95959" />
                        <path d="M6 10V8C6 7.65929 6.0284 7.32521 6.08296 7M18 10V8C18 4.68629 15.3137 2 12 2C10.208 2 8.59942 2.78563 7.5 4.03126" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15" stroke="#f95959" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <label>Confirm Password</label>
                    <div className="input-group mt-2">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            disabled={!password}
                        />
                        <div className="input-group-append">
                            <span
                                className="input-group-text"
                                onClick={toggleShowConfirmPassword}
                                style={{ cursor: "pointer" }}
                            >
                                {showConfirmPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary m-2 mt-4">
                    Change Password
                </button>
            </form>
        </div>
    );
};

export default ChangePassword;
