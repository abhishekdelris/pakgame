import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './AvatarSelection.css';

const AvatarSelection = () => {
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

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

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAvatarSelect = async (avatar) => {
    setSelectedAvatar(avatar);
    console.log("selected avatar",selectedAvatar);
    
    await handleAvatar();
  };

  const handleAvatar = async () => {
    // const userId = sessionStorage.getItem('user_id');
    const userId = Cookies.get('user_id');
    console.log("user id", userId);
    console.log("image Url", selectedAvatar.image);

    const formdata = new FormData();
    formdata.append("user_id", userId);
    formdata.append("profile_image", selectedAvatar.image);

    console.log("handleAvatar", formdata);


    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    try {
      const response = await fetch(`${baseURLAPI}Users/update_avtar`, requestOptions);
      const result = await response.json();
      console.log("update avatar", result);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Profile update failed!");
    }
  };

  // const handleAvatarSelect = (index) => {
  //   setSelectedAvatar(index);
  // };

  return (
    <div className='container'>
      <div className="col-lg-4 col-md-6 col-12 mx-auto agency-bg-color">

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
          <div className='col-8'><h4 className="text-center text-white">Change Avatar</h4></div>

        </div>
        <div className="avatar-grid">
          {avatars.map((avatar, index) => (
            <div
              key={avatar.id}
              className={`avatar-item ${selectedAvatar === index ? 'selected' : ''}`}
              onClick={() => handleAvatarSelect(avatar)}
            >
              <img
                src={`https://delristech-projects.in/pak_game/${avatar.image}`}
                alt={`Avatar ${avatar.id}`}
                className={`avatar-img1 ${selectedAvatar?.id === avatar.id ? 'selected' : ''}`}
              />
              {selectedAvatar === index && (
                <div className="checkmark">
                  <i className="fas fa-check-circle"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>



  );
};

export default AvatarSelection;
