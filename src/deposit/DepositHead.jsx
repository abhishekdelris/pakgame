import React, { useState, useEffect } from "react";
import {  Link, useNavigate } from "react-router-dom";
import depositIcon from '../assets/image/deposite-icon.png';
import cardIcon from '../assets/image/card-icon.png';
import Cookies from 'js-cookie';

const DepositHead = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  useEffect(() => {
    // Retrieve the user_id from session storage
    // const userId = sessionStorage.getItem('user_id');
    const userId = Cookies.get('user_id');

    if (userId) {
      fetch(`${baseURLAPI}users/get_profile?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
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

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="deposite-heading">
            <div>
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
                />
              </svg>
            </div>
            <div>
              <h5>Deposit</h5>
            </div>
            <div>
            <Link to={"/deposithistory"}>
              <h6 className="text-dark">Deposit history</h6>
              </Link>
            </div>
          </div>
          <div className="deposite-top-card">
            <h5>
              <img src={depositIcon} alt="Deposit Icon" /> Balance
            </h5>
            <h3>
              Rs {profile.length > 0  ? profile.data.total_amount : 0}
              <svg
                width={20}
                height={16}
                onClick={handleReload}
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.1651 2.75175C2.16394 2.98912 2.34847 3.1872 2.57518 3.19195C2.80189 3.1967 2.98833 3.00639 2.98949 2.76903C2.99538 1.56935 3.64986 0.922736 4.82871 0.947438L14.1152 1.14203C15.1457 1.16362 16.1856 1.76373 16.1793 3.05836L16.1512 8.77634L14.8021 7.32816C14.638 7.16073 14.3783 7.15958 14.2209 7.3246C14.0676 7.4897 14.0663 7.75296 14.218 7.92446L16.2683 10.1253C16.4282 10.297 16.6879 10.3025 16.8494 10.1375L18.9209 8.02301C19.0784 7.85366 19.0756 7.5817 18.9157 7.41436C18.7557 7.2513 18.5043 7.24603 18.3427 7.40235L16.9756 8.79361L17.0036 3.07996C17.0115 1.47029 15.8258 0.319002 14.1194 0.283245L4.83289 0.0886522C3.19653 0.0500743 2.17334 1.07306 2.1651 2.75175Z"
                  fill="white"
                />
                <path
                  d="M16.1252 12.3809C16.1198 13.4826 15.4421 14.6393 14.2013 14.6133L4.86408 14.4174C3.72216 14.3934 2.92615 13.6163 2.93149 12.5276L2.96389 5.91774L4.31318 7.36752C4.46897 7.54363 4.7328 7.55345 4.8944 7.38834C5.06011 7.22765 5.06557 6.95122 4.90562 6.77936C4.9015 6.77494 4.89743 6.77057 4.89743 6.77057L2.84683 4.56725C2.68688 4.39539 2.42717 4.38994 2.26557 4.55505L0.193791 6.6719C0.0363053 6.84144 0.0390676 7.1137 0.199037 7.28122C0.359027 7.44446 0.610506 7.44973 0.772064 7.29324L2.13531 5.89603L2.10291 12.5059C2.09931 14.0829 3.25624 15.2478 4.85984 15.2814L14.1971 15.4773C15.7306 15.5095 16.9411 14.1565 16.9498 12.3982C16.9509 12.1606 16.7664 11.9623 16.5396 11.9576C16.3129 11.9528 16.1264 12.1433 16.1252 12.3809Z"
                  fill="white"
                />
              </svg>
            </h3>
            {/* <div className="deposite-bottom-image">
              <img src={cardIcon} alt="Card Icon" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositHead;
