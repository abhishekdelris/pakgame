import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import './UpdateProfile.css';

const UpdateProfile = () => {
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Password management state
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(true); // Assuming OTP is verified

  useEffect(() => {
    // const userId = sessionStorage.getItem('user_id');
    const userId = Cookies.get('user_id');
    if (userId) {
      // Fetch Profile Data
      fetch(`${baseURLAPI}users/get_profile?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
          setProfile(data.data);
          setLoading(false);
        })
        .catch(error => console.error('Error fetching profile:', error));

      // Fetch Avatar Data
      fetch(`${baseURLAPI}Users/avtar`)
        .then(response => response.json())
        .then(data => setAvatars(data.data))
        .catch(error => console.error('Error fetching avatars:', error));
    } else {
      console.error('Please Login First.');
      navigate('/login');
      setLoading(false);
    }
  }, [baseURLAPI, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleAvatar = async () => {
    // const userId = sessionStorage.getItem('user_id');
    const userId = Cookies.get('user_id');
    console.log("user id", userId);
    console.log("image Url", selectedAvatar?.image);
    
    const formdata = new FormData();
    formdata.append("user_id", userId);
    formdata.append("profile_image", selectedAvatar?.image);

    console.log("handleAvatar",formdata);
    

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    
    try {
      const response = await fetch(`${baseURLAPI}Users/update_avtar`, requestOptions);
      const result = await response.json();
      console.log("update avatar",result);
        alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Profile update failed!");
    }
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
      <div className='account-user-top'>
        <div className="container1">
          <div className="profile-header1">
            <img
              src={selectedAvatar?.image || profile.profile_image}
              className="user-profile1"
              alt="Profile Avatar"
            />
            <h6>{profile.username}</h6>
            <p>UID: {profile.uid}</p>
          </div>

          <div className="account-user-card1">
            <p>Select Your Avatar</p>
            <Slider {...settings}>
              {avatars.map((avatar) => (
                <div key={avatar.id} onClick={() => handleAvatarSelect(avatar)}>
                  <img
                    src={`https://delristech-projects.in/pak_game/${avatar.image}`}
                    alt={`Avatar ${avatar.id}`}
                    className={`avatar-img1 ${selectedAvatar?.id === avatar.id ? 'selected' : ''}`}
                  />
                </div>
              ))} 
            </Slider>
            <button className="btn btn-primary mt-3" onClick={handleAvatar}>Update Profile</button>
          </div>
          </div>
          </div>

          <form onSubmit={handleChangePassword} className='p-2'>
            <div className="form-group">
              <label>Old Password</label>
            <div className="input-group">
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
              <label>New Password</label>
              <div className="input-group">
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
              <label>Confirm Password</label>
              <div className="input-group">
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
            <button type="submit" className="btn btn-primary m-2">
              Change Password
            </button>
          </form>
        
     
    </div>
  );
};

export default UpdateProfile;
