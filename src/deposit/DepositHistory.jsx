import React, { useState, useRef, useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DepositHistory.css"; // Import your custom CSS file
import Cookies from 'js-cookie';
import depositeIcon from '../assets/image/deposite/deposite-icon-3.png';
import noData from '../assets/image/deposite/no-data.png'

const DepositHistory = () => {
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
  const userId = Cookies.get('user_id');

  useEffect(() => {
    // Retrieve the user_id from session storage
    // const userId = sessionStorage.getItem('user_id');
    const userId = Cookies.get('user_id');

    if (userId) {
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "ci_session=qtktgahk0hocbo7ehc4db16u7lun5kj9");

      const formdata = new FormData();
      formdata.append("user_id", userId);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
      };

      try {
        const response = fetch(`${baseURLAPI}users/get_deposit_history`, requestOptions)
          .then(response => response.json())  // Parse the response as JSON
          .then(data => {
            console.log(data);
            // return false;
            setDeposit(data);
            setLoading(false);
          })
          .catch(error => console.error('Error fetching Deposit History:', error));
      } catch (error) {
        console.error("Error checking invite code:", error);
        setInviteCodeError("An error occurred. Please try again later.");
      }
    } else {
      console.error('Please Login First.');
      navigate('/login');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Function to check Deposite History
  const handleDeposite = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=qtktgahk0hocbo7ehc4db16u7lun5kj9");

    const formdata = new FormData();
    formdata.append("user_id", userId);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };

    try {
      const response = await fetch(`${baseURLAPI}users/get_deposit_history`, requestOptions)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
          console.log(data);
          // return false;
          setDeposit(data);
          setLoading(false);
        })
        .catch(error => console.error('Error fetching Deposit History:', error));
    } catch (error) {
      console.error("Error checking invite code:", error);
      setInviteCodeError("An error occurred. Please try again later.");
    }
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh pt-3">
          <div className="deposit-history-top">
            <Tab.Container activeKey={key}>
              {/* Nav Pills wrapped in Slick Slider */}
              <Slider {...settings} ref={sliderRef}>
                <Nav.Item>
                  <Nav.Link
                    eventKey="all"
                    className={key === "all" ? "active" : ""}
                    onClick={() => handleTabChange("all")}
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z"
                      />
                      <path
                        opacity="0.4"
                        d="M7.24 13.4302H5.34C3.15 13.4302 2 14.5802 2 16.7602V18.6602C2 20.8502 3.15 22.0002 5.33 22.0002H7.23C9.41 22.0002 10.56 20.8502 10.56 18.6702V16.7702C10.57 14.5802 9.42 13.4302 7.24 13.4302Z"
                      />
                      <path d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z" />
                      <path d="M17.7099 21.9999C20.0792 21.9999 21.9999 20.0792 21.9999 17.7099C21.9999 15.3406 20.0792 13.4199 17.7099 13.4199C15.3406 13.4199 13.4199 15.3406 13.4199 17.7099C13.4199 20.0792 15.3406 21.9999 17.7099 21.9999Z" />
                    </svg>
                    All
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Local_Bank"
                    className={key === "Local_Bank" ? "active" : ""}
                    onClick={() => handleTabChange("Local_Bank")}
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 21.0001H21M4 18.0001H20M6 18.0001V13.0001M10 18.0001V13.0001M14 18.0001V13.0001M18 18.0001V13.0001M12 7.00695L12.0074 7.00022M21 10.0001L14.126 3.88986C13.3737 3.2212 12.9976 2.88688 12.5732 2.75991C12.1992 2.64806 11.8008 2.64806 11.4268 2.75991C11.0024 2.88688 10.6263 3.2212 9.87404 3.88986L3 10.0001H21Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Local Bank
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Bank_Card_QRCode"
                    className={key === "Bank_Card_QRCode" ? "active" : ""}
                    onClick={() => handleTabChange("Bank_Card_QRCode")}
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <title>bank_card_fill</title>
                      <g
                        id="页面-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Business"
                          transform="translate(-48.000000, -48.000000)"
                          fill-rule="nonzero"
                        >
                          <g
                            id="bank_card_fill"
                            transform="translate(48.000000, 48.000000)"
                          >
                            <path
                              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                              id="MingCute"
                              fill-rule="nonzero"
                            ></path>
                            <path
                              d="M22,10 L22,17 C22,18.6569 20.6569,20 19,20 L5,20 C3.34315,20 2,18.6569 2,17 L2,10 L22,10 Z M18,14 L15,14 C14.4477,14 14,14.4477 14,15 C14,15.5523 14.4477,16 15,16 L18,16 C18.5523,16 19,15.5523 19,15 C19,14.4477 18.5523,14 18,14 Z M19,4 C20.6569,4 22,5.34315 22,7 L22,8 L2,8 L2,7 C2,5.34315 3.34315,4 5,4 L19,4 Z"
                              id="形状"
                              fill="#09244B"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    Bank Card QRCode
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Easypaisa"
                    className={key === "Easypaisa" ? "active" : ""}
                    onClick={() => handleTabChange("Easypaisa")}
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs></defs>
                      <path
                        class="a"
                        d="M24.6025,4.5c8.516,0,15.42,5.7166,15.42,12.7693S33.12,28.6141,24.6025,28.6141Q12.4689,28.3687,7.4111,20.972A1.6469,1.6469,0,0,1,7.1663,19.73Q10.0575,5.2982,24.6025,4.5Zm-.5751,7.9439q-7.3449.7437-8.9894,6.9928,2.2406,1.9754,8.9894,2.1927c4.5207-.0711,7.2591-1.389,7.3129-4.4525C31.0589,13.7933,27.7687,12.3159,24.0274,12.4439Z"
                      />
                      <path
                        class="a"
                        d="M6.396,24.71C8.9221,31.9571,15.8885,35.99,23.05,35.99c5.9392,0,9.8755-2.5707,11.94-6.4492L41.6456,33.71c-2.32,5.6749-9.1977,9.79-17.3225,9.79-10.0289,0-18.617-6.7591-17.93-18.5113C6.393,24.8952,6.394,24.8017,6.396,24.71Z"
                      />
                    </svg>
                    Easypaisa
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Jazz_Cash"
                    className={key === "Jazz_Cash" ? "active" : ""}
                    onClick={() => handleTabChange("Jazz_Cash")}
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6667 11C20.5513 10.7213 22 9.04574 22 7.02036C22 4.79998 20.2589 3 18.1111 3H5.88889C3.74112 3 2 4.79998 2 7.02036C2 9.04574 3.44873 10.7213 5.33333 11"
                        stroke="#1C274C"
                        stroke-width="1.5"
                      />
                      <path
                        d="M12 6V13M12 13L14 10.6667M12 13L10 10.6667"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 10C5 8.11438 5 7.17157 5.58579 6.58579C6.17157 6 7.11438 6 9 6H15C16.8856 6 17.8284 6 18.4142 6.58579C19 7.17157 19 8.11438 19 10V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V10Z"
                        stroke="#1C274C"
                        stroke-width="1.5"
                      />
                      <path
                        d="M5 17H19"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Jazz Cash
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="USDT"
                    className={key === "USDT" ? "active" : ""}
                    onClick={() => handleTabChange("USDT")}
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle cx="16" cy="16" r="16" fill="#26A17B" />

                        <path
                          fill="#FFF"
                          d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"
                        />
                      </g>
                    </svg>
                    USDT
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="TRX"
                    className={key === "TRX" ? "active" : ""}
                    onClick={() => handleTabChange("TRX")}
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none">
                        <circle fill="#EF0027" cx="16" cy="16" r="16" />

                        <path
                          d="M21.932 9.913L7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562zm-.232 1.17l2.208 2.099-6.038 1.093 3.83-3.192zm-5.142 2.973l-6.364-5.278 10.402 1.914-4.038 3.364zm-.453.934l-1.038 8.58L9.472 9.487l6.633 5.502zm.96.455l6.687-1.21-7.67 9.343.983-8.133z"
                          fill="#FFF"
                        />
                      </g>
                    </svg>
                    TRX
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="Bank_Card"
                    className={key === "Bank_Card" ? "active" : ""}
                    onClick={() => handleTabChange("Bank_Card")}
                  >
                    <svg
                      version="1.0"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="30px"
                      height="30px"
                      viewBox="0 0 64 64"
                      enable-background="new 0 0 64 64"
                      xml:space="preserve"
                    >
                      <g>
                        <g>
                          <rect
                            x="18"
                            y="25"
                            fill="#506C7F"
                            width="4"
                            height="29"
                          />
                          <rect
                            x="30"
                            y="25"
                            fill="#506C7F"
                            width="4"
                            height="29"
                          />
                          <rect
                            x="42"
                            y="25"
                            fill="#506C7F"
                            width="4"
                            height="29"
                          />
                        </g>
                        <g>
                          <rect
                            x="48"
                            y="25"
                            fill="#B4CCB9"
                            width="4"
                            height="29"
                          />
                          <rect
                            x="24"
                            y="25"
                            fill="#B4CCB9"
                            width="4"
                            height="29"
                          />
                          <rect
                            x="36"
                            y="25"
                            fill="#B4CCB9"
                            width="4"
                            height="29"
                          />
                          <rect
                            x="12"
                            y="25"
                            fill="#B4CCB9"
                            width="4"
                            height="29"
                          />
                        </g>
                        <g>
                          <path
                            fill="#F9EBB2"
                            d="M8,56c-1.104,0-2,0.896-2,2h52c0-1.104-0.895-2-2-2H8z"
                          />
                          <path
                            fill="#F9EBB2"
                            d="M60,60H4c-1.104,0-2,0.896-2,2h60C62,60.896,61.105,60,60,60z"
                          />
                        </g>
                        <path
                          fill="#F9EBB2"
                          d="M4,23h56c0.893,0,1.684-0.601,1.926-1.461c0.24-0.86-0.125-1.785-0.889-2.248l-28-17
		C32.725,2.1,32.365,2,32,2c-0.367,0-0.725,0.1-1.037,0.29L2.961,19.291c-0.764,0.463-1.129,1.388-0.888,2.247
		C2.315,22.399,3.107,23,4,23z"
                        />
                        <g>
                          <path
                            fill="#394240"
                            d="M60,58c0-2.209-1.791-4-4-4h-2V25h6c1.795,0,3.369-1.194,3.852-2.922c0.484-1.728-0.242-3.566-1.775-4.497
			l-28-17C33.439,0.193,32.719,0,32,0s-1.438,0.193-2.076,0.581l-28,17c-1.533,0.931-2.26,2.77-1.775,4.497
			C0.632,23.806,2.207,25,4,25h6v29H8c-2.209,0-4,1.791-4,4c-2.209,0-4,1.791-4,4v2h64v-2C64,59.791,62.209,58,60,58z M4,23
			c-0.893,0-1.685-0.601-1.926-1.462c-0.241-0.859,0.124-1.784,0.888-2.247l28-17.001C31.275,2.1,31.635,2,32,2
			c0.367,0,0.725,0.1,1.039,0.291l28,17c0.764,0.463,1.129,1.388,0.887,2.248C61.686,22.399,60.893,23,60,23H4z M52,25v29h-4V25H52z
			 M46,25v29h-4V25H46z M40,25v29h-4V25H40z M34,25v29h-4V25H34z M28,25v29h-4V25H28z M22,25v29h-4V25H22z M16,25v29h-4V25H16z
			 M8,56h48c1.105,0,2,0.896,2,2H6C6,56.896,6.896,56,8,56z M2,62c0-1.104,0.896-2,2-2h56c1.105,0,2,0.896,2,2H2z"
                          />
                          <path
                            fill="#394240"
                            d="M32,9c-2.762,0-5,2.238-5,5s2.238,5,5,5s5-2.238,5-5S34.762,9,32,9z M32,17c-1.656,0-3-1.343-3-3
			s1.344-3,3-3c1.658,0,3,1.343,3,3S33.658,17,32,17z"
                          />
                        </g>
                        <circle fill="#F76D57" cx="32" cy="14" r="3" />
                      </g>
                    </svg>
                    Bank Card
                  </Nav.Link>
                </Nav.Item>
              </Slider>


              {/* Tab Content */}
              {
                deposit.length > 0  ? <>
                <Tab.Content>
                <Tab.Pane eventKey="all">
                  {deposit.transactions.map((data) => (
                    <div className="deposit-history-card" key={data.id}> {/* Make sure to add a unique key */}
                      <div className="deposit-history-head">
                        <button className="btn btn-success">Deposit</button>
                        <p className={`m-0 ${data.status ? "text-success" : "text-danger"}`}>
                          {data.status ? "successfully" : "pending"}
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
                          <label htmlFor="">RC2024093016184331340301</label>
                        </div>
                      </div>
                    </div>
                  ))}

              
                </Tab.Pane>
               
              
                {/* <Tab.Pane eventKey="Easypaisa">
                  <div className="deposit-history-card">
                    <div className="deposit-history-head">
                      <button className="btn btn-success">Deposit</button>
                      <p className="m-0 text-danger">Failed</p>
                    </div>
                    <div className="deposit-history-body">
                      <div className="deposit-history-item">
                        <label htmlFor="">Balance</label>
                        <label className="text-warning" htmlFor="">
                          Rs500.00
                        </label>
                      </div>
                      <div className="deposit-history-item">
                        <label htmlFor="">Type</label>
                        <label htmlFor="">OPPay-Easypaisa</label>
                      </div>
                      <div className="deposit-history-item">
                        <label htmlFor="">Time</label>
                        <label htmlFor="">2024-09-30 16:18:43</label>
                      </div>
                      <div className="deposit-history-item">
                        <label htmlFor="">Order number</label>
                        <label htmlFor="">RC2024093016184331340301</label>
                      </div>
                    </div>
                  </div>
                </Tab.Pane> */}
                {/* <Tab.Pane eventKey="Jazz_Cash">
                  <div className="deposit-history-card">
                    <div className="deposit-history-head">
                      <button className="btn btn-success">Deposit</button>
                      <p className="m-0 text-danger">Failed</p>
                    </div>
                    <div className="deposit-history-body">
                      <div className="deposit-history-item">
                        <label htmlFor="">Balance</label>
                        <label className="text-warning" htmlFor="">
                          Rs500.00
                        </label>
                      </div>
                      <div className="deposit-history-item">
                        <label htmlFor="">Type</label>
                        <label htmlFor="">OPPay-Easypaisa</label>
                      </div>
                      <div className="deposit-history-item">
                        <label htmlFor="">Time</label>
                        <label htmlFor="">2024-09-30 16:18:43</label>
                      </div>
                      <div className="deposit-history-item">
                        <label htmlFor="">Order number</label>
                        <label htmlFor="">RC2024093016184331340301</label>
                      </div>
                    </div>
                  </div>
                </Tab.Pane> */}
              </Tab.Content>
                </> : <>
            <div className="row">
              <div className="col-12">
                <div className="deposit-history-card">
                  <h5>
                    <img src={depositeIcon} alt />
                    Withdrawal history
                  </h5>
                  <div className="text-center">
                    <img
                      src={noData}
                      className="img-fluid"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
         
                </>
              }
           
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositHistory;
