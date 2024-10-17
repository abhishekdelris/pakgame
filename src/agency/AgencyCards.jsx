import React ,{useState,useEffect}from "react";
import agencyIcon1 from '../assets/image/agency-icon-1.png'
import agencyIcon2 from '../assets/image/agency-icon-2.png'
import agencyIcon3 from '../assets/image/agency-icon-3.png'
import agencyIcon4 from '../assets/image/agency-icon-4.png'
import agencyIcon5 from '../assets/image/agency-icon-5.png'
import agencyIcon6 from '../assets/image/agency-icon-6.png'
import agencyIcon7 from '../assets/image/agency-icon-7.png'
import { Link,useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const AgencyCards = () => {
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
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
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="agency-card">
            <div>
            
              <img src={agencyIcon1} alt />
              <p>Copy inivitation code</p>
             
            </div>
            <div>
              <p>{profile.data.referal_code}</p>
              <svg
                width={10}
                height={11}
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
        </div>
        <div className="col-12">
          <Link to={'/teamReport'}>
          <div className="agency-card">
            <div>
              <img src={agencyIcon2} alt />
              <p>Surbodinate data</p>
            </div>
            <div>
              <p />
              <svg
                width={10}
                height={11}
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
          </Link>
        </div>
        <div className="col-12">
          <Link to={'/myCommission'}>
          <div className="agency-card">
            <div>
              <img src={agencyIcon3} alt />
              <p>Commision details</p>
            </div>
            <div>
              <p />
              <svg
                width={10}
                height={11}
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
          </Link>
        </div>
        <div className="col-12">
          <Link to={'/promotionRule'}>
          <div className="agency-card">
            <div>
              <img src={agencyIcon4} alt />
              <p>Invitation rules</p>
            </div>
            <div>
              <p />
              <svg
                width={10}
                height={11}
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
          </Link>
        </div>
        <div className="col-12">
          <Link to={'/server'}>
            <div className="agency-card">
              <div>
                <img src={agencyIcon5} alt />
                <p>Agent line customer service</p>
              </div>
              <div>
                <p />
                <svg
                  width={10}
                  height={11}
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
          </Link>
        </div>
        <div className="col-12">
          <Link to={'/rebateRatio'}>
            <div className="agency-card">
              <div>
                <img src={agencyIcon6} alt />
                <p>Rebate ratio</p>
              </div>
              <div>
                <p />
                <svg
                  width={10}
                  height={11}
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
          </Link>
        </div>
        <div className="col-12">
          <div className="agency-card-bottom">
            <div className="agency-card-bottom-heading">
              <img src={agencyIcon7} alt />
              <h5>promotion data</h5>
            </div>
            <div className="agency-card-bottom-inner">
              <div className="w-50">
                <p>0</p>
                <h6>This week </h6>
              </div>
              <div className="w-50">
                <p>0</p>
                <h6>Total commission </h6>
              </div>
              <div className="w-50">
                <p>0</p>
                <h6>Direct surbodinate </h6>
              </div>
              <div className="w-50">
                <p>0</p>
                <h6>Total number of surbodinates in the team</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgencyCards;
