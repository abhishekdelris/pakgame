import React from "react";
import "./EWalletPayment1.css";
import { Link } from "react-router-dom";

const EWalletPayment1 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto agency-bg-color px-0">
            <div className="ewallet-head">
              <svg
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ cursor: "pointer" }}
              >
                <path
                  d="M13.6634 18.3412C13.8999 18.109 14.0345 17.7924 14.0377 17.461C14.0408 17.1295 13.9121 16.8104 13.68 16.5738L7.55115 10.3282L13.7967 4.19934C14.0266 3.96575 14.1556 3.6512 14.1558 3.32344C14.1561 2.99568 14.0276 2.68094 13.798 2.447C13.5685 2.21307 13.2562 2.07866 12.9285 2.07272C12.6008 2.06678 12.2839 2.18979 12.046 2.41526L4.90835 9.41951C4.67182 9.6517 4.53718 9.96833 4.53405 10.2998C4.53093 10.6312 4.65957 10.9503 4.89169 11.1869L11.8959 18.3245C12.1281 18.5611 12.4448 18.6957 12.7762 18.6988C13.1076 18.702 13.4268 18.5733 13.6634 18.3412Z"
                  fill="black"
                  style={{ fill: "#000" }}
                />
              </svg>
              <h5>E-WalletPayment method</h5>
              <h5></h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto agency-bg-color h-100vh ">
            <div className="ewallet-card">
              <div className="ewallet-card-inner">
                <div>
                  <img
                    src="https://pakgames.net/assets/png/4-d37103ef.png"
                    alt=""
                  />
                  <h5>EASYPAISA</h5>
                </div>
                <svg
                  data-v-8da75fee=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    data-v-8da75fee=""
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M60 30C60 46.5686 46.5686 60 30 60C13.4314 60 0 46.5686 0 30C0 13.4314 13.4314 0 30 0C46.5686 0 60 13.4314 60 30ZM14.4 34.2149L19.3014 29.0266C20.9353 30.363 24.2029 33.2714 27.4705 37.2807C27.5276 37.3507 27.7006 36.9707 28.0345 36.2374C29.4965 33.0269 34.0423 23.0442 45.4425 14.4053C45.5467 14.3263 45.5229 15.1444 45.4865 16.397C45.4534 17.5342 45.41 19.0295 45.4425 20.5367C45.5024 23.3195 45.9093 26.1966 45.9093 26.1966C45.9093 26.1966 39.374 27.8474 28.1707 46.0063C28.1442 46.0494 27.8296 45.6959 27.2806 45.0789C25.2645 42.8134 20.0868 36.9951 14.4 34.2149Z"
                    fill="var(--main-color)"
                  ></path>
                </svg>
              </div>
              <p>NOOR NAWAZ KHAN</p>
              <p>034****101</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container ewallet-footer">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto px-0">
            <Link to={'/eWalletPayment2'}>
             <button className="ewallet-add-btn">Add payment method</button>
             </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EWalletPayment1; 
