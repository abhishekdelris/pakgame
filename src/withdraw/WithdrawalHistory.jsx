import React, { useState, useRef, useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WithdrawalHistory.css"; // Import your custom CSS file
import Cookies from 'js-cookie';
import depositeIcon from '../assets/image/deposite/deposite-icon-3.png';
import noData from '../assets/image/deposite/no-data.png';

const WithdrawalHistory = () => {
  const [key, setKey] = useState("all"); // Initial active tab
  const sliderRef = useRef(null);
  const [profile, setProfile] = useState([]);
  const [deposit, setDeposit] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false, // Disable arrows
    draggable: false, // Disable manual dragging
    swipe: false, // Disable swipe
    beforeChange: (current, next) => {
      setCurrentIndex(next); // Update current index before change
    },
  };

  const handleTabChange = (newKey) => {
    const newIndex = [
      "all",
      "Local_Bank",
      "Bank_Card_QRCode",
      "Easypaisa",
      "Jazz_Cash",
      "USDT",
      "TRX",
      "Bank_Card",
    ].indexOf(newKey); // Get index of the clicked tab

    // Slide direction logic
    if (newIndex > currentIndex) {
      sliderRef.current.slickNext(); // Move right (next)
    } else if (newIndex < currentIndex) {
      sliderRef.current.slickPrev(); // Move left (previous)
    }

    // Update key after sliding
    setKey(newKey);
  };

  useEffect(() => {
    // Retrieve the user_id from cookies
    const userId = Cookies.get('user_id');

    if (userId) {
      const formdata = new FormData();
      formdata.append("user_id", userId);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      fetch(`${baseURLAPI}users/WithdrawalHistory`, requestOptions)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
          console.log(data);
          setDeposit(data.transactions || []); // Set the transactions in state
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching Deposit History:', error);
          setLoading(false);
        });
    } else {
      console.error('Please Login First.');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh pt-3">
          <div className="deposit-history-top">
            <Tab.Container activeKey={key}>
              {/* Nav Pills wrapped in Slick Slider */}

              {/* Tab Content */}
              {
                deposit.length > 0 ? (
                  <Tab.Content>
                    <Tab.Pane eventKey="all">
                      {deposit.map((data) => (
                        <div className="deposit-history-card" key={data.id}> {/* Make sure to add a unique key */}
                          <div className="deposit-history-head">
                            <button className="btn btn-success">Withdrawal</button>
                            <p className={`m-0 ${data.status === '1' ? "text-success" : "text-danger"}`}>
                              {data.status === '1' ? "Successfully" : "Pending"}
                            </p>
                          </div>
                          <div className="deposit-history-body">
                            <div className="deposit-history-item">
                              <label htmlFor="">Balance</label>
                              <label className="text-warning" htmlFor="">
                                Rs{data.amount}
                              </label>
                            </div>
                            <div className="deposit-history-item">
                              <label htmlFor="">Type</label>
                              <label htmlFor="">OPPay-Easypaisa</label>
                            </div>
                            <div className="deposit-history-item">
                              <label htmlFor="">Time</label>
                              <label htmlFor="">{data.created_at}</label>
                            </div>
                            <div className="deposit-history-item">
                              <label htmlFor="">Order number</label>
                              <label htmlFor="">{data.transaction_id}</label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Tab.Pane>
                  </Tab.Content>
                ) : (
                  <div className="row">
                    <div className="col-12">
                      <div className="deposit-history-card">
                        <h5>
                          <img src={depositeIcon} alt="Withdrawal history" />
                          Withdrawal history
                        </h5>
                        <div className="text-center">
                          <img src={noData} className="img-fluid" alt="No data" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalHistory;
