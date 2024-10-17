import React from "react";
import './DailySignIn.css'

const DailySignIn = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color px-0">
            <div className="redeem-gift-header">
              <img
                src="https://pakgames.net/assets/png/headerBg-c5504bca.png"
                className="img-fluid"
                alt=""
              />
              <div className="redeem-gift-header-content">
                <h5>Attendance bonus</h5>
                <p>Get rewards based on consecutive <br /> login days</p>
                <label htmlFor="">Attended consecutively <br /> <span>0</span> Day </label>
                <p>Accumulated</p>
                <h4>Rs0.00</h4>
                <div className="redeem-gift-header-button">
                  <button>Game Rules</button>
                  <button>Attendance history</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh pt-3">
            <div className="redeem-gift-top">
              <div className="redeem-gift-card">
                <h6>Rs15.00</h6>
                <img src="https://pakgames.net/assets/png/coin-294b6998.png" alt="" />
                <p>1 Day</p>
              </div>
              <div className="redeem-gift-card">
                <h6>Rs15.00</h6>
                <img src="https://pakgames.net/assets/png/coin-294b6998.png" alt="" />
                <p>1 Day</p>
              </div>
              <div className="redeem-gift-card">
                <h6>Rs15.00</h6>
                <img src="https://pakgames.net/assets/png/coin-294b6998.png" alt="" />
                <p>1 Day</p>
              </div>
              <div className="redeem-gift-card">
                <h6>Rs15.00</h6>
                <img src="https://pakgames.net/assets/png/coin-294b6998.png" alt="" />
                <p>1 Day</p>
              </div>
              <div className="redeem-gift-card">
                <h6>Rs15.00</h6>
                <img src="https://pakgames.net/assets/png/coin-294b6998.png" alt="" />
                <p>1 Day</p>
              </div>
              <div className="redeem-gift-card">
                <h6>Rs15.00</h6>
                <img src="https://pakgames.net/assets/png/coin-294b6998.png" alt="" />
                <p>1 Day</p>
              </div>
            </div>
            <div className="redeem-gift-bottom">
                <img src="https://pakgames.net/assets/png/day7Bg-ada1d750.png" alt="" />
                <div className="redeem-gift-bottom-inner">
                  <h6>Rs120.00</h6>
                  <p>7 Day</p>
                </div>
            </div>
            <div className="redeem-gift-button">
              <button>Attendance</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailySignIn;
