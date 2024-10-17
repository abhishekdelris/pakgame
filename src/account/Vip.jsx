import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import "./Vip.css"; // Your custom styles

const Vip = () => {
  const currentExp = 4; // Current experience points
  const requiredExp = 50; // Total experience points required
  const progress = (currentExp / requiredExp) * 100; // Calculate progress percentage
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide

  const [activeTab, setActiveTab] = useState("history");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color px-0">
            <div className="vip-header-top">
              <div className="vip-header">
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
                    fill="#fff"
                  />
                </svg>
                <h5>VIP</h5>
                <h5></h5>
              </div>
              <div className="vip-profile">
                <img
                  src="https://pakgames.net/assets/png/1-a6662edb.png"
                  className="vip-prifile-image"
                  alt="VIP Profile"
                />
                <div>
                  <img
                    src="https://pakgames.net/assets/png/0-78e1ab02.png"
                    alt="VIP Badge"
                  />
                  <h6>MemberNNGK0TCY</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh">
            <div className="vip-content-top">
              <div className="vip-content-div">
                <div className="vip-content-inner">
                  <h6>{currentExp} EXP</h6>
                  <p>My experience</p>
                </div>
                <div className="vip-content-inner">
                  <p>
                    <span>30</span> Days
                  </p>
                  <p>Payout time</p>
                </div>
              </div>
              <div className="vip-content-level">
                VIP level rewards are settled at 2:00 am on the 1st of every
                month
              </div>
            </div>

            {/* Swiper slider for the vip-slider */}
            <Swiper
              spaceBetween={14}
              slidesPerView={1.2} // Show part of the neighboring slides
              centeredSlides={true} // Center the active slide
              loop={false} // Loop the slides
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)} // Update active slide index
              className="vip-swiper" // Add a class to customize the Swiper styles
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="vip-slider">
                  <div className="vip-slider-top-head">
                    <div className="vip-slider-top">
                      <img
                        src="https://pakgames.net/assets/png/bg1-7ff97a99.png"
                        className="vip-bg"
                        alt="Background"
                      />
                      <div>
                        <div className="vip-inner-items">
                          <h4>
                            <img
                              src="https://pakgames.net/assets/png/1-d951dc6d.png"
                              className="vip-win-img"
                              alt="VIP Level"
                            />
                            VIP1
                          </h4>
                          <h5>
                            <img
                              src="https://pakgames.net/assets/png/ununlocked-b5a4c7d0.png"
                              className="vip-open-img"
                              alt="Not open yet"
                            />
                            Not open yet
                          </h5>
                        </div>
                        <p>
                          Upgrading to VIP1 requires <br />
                          46 EXP
                        </p>
                        <label>Bet Rs100 = 1 EXP</label>
                      </div>
                      <div>
                        <img
                          src="https://pakgames.net/assets/png/1-1fca7935.png"
                          className="vip-item-img"
                          alt="VIP Item"
                        />
                      </div>
                      <div className="progress-bar-container">
                        <h6>VIP1</h6>
                        <div className="progress-bar-background">
                          <div
                            className="progress-bar-fill"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <p>
                          <span>
                            {currentExp}/{requiredExp}
                          </span>
                          <span>50 EXP can be leveled up</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="vip-slider">
                  <div className="vip-slider-top-head">
                    <div className="vip-slider-top">
                      <img
                        src="https://pakgames.net/assets/png/bg1-7ff97a99.png"
                        className="vip-bg"
                        alt="Background"
                      />
                      <div>
                        <div className="vip-inner-items">
                          <h4>
                            <img
                              src="https://pakgames.net/assets/png/1-d951dc6d.png"
                              className="vip-win-img"
                              alt="VIP Level"
                            />
                            VIP2
                          </h4>
                          <h5>
                            <img
                              src="https://pakgames.net/assets/png/ununlocked-b5a4c7d0.png"
                              className="vip-open-img"
                              alt="Not open yet"
                            />
                            Not open yet
                          </h5>
                        </div>
                        <p>
                          Upgrading to VIP1 requires <br />
                          46 EXP
                        </p>
                        <label>Bet Rs100 = 1 EXP</label>
                      </div>
                      <div>
                        <img
                          src="https://pakgames.net/assets/png/1-1fca7935.png"
                          className="vip-item-img"
                          alt="VIP Item"
                        />
                      </div>
                      <div className="progress-bar-container">
                        <h6>VIP2</h6>
                        <div className="progress-bar-background">
                          <div
                            className="progress-bar-fill"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <p>
                          <span>
                            {currentExp}/{requiredExp}
                          </span>
                          <span>50 EXP can be leveled up</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="vip-slider">
                  <div className="vip-slider-top-head">
                    <div className="vip-slider-top">
                      <img
                        src="https://pakgames.net/assets/png/bg1-7ff97a99.png"
                        className="vip-bg"
                        alt="Background"
                      />
                      <div>
                        <div className="vip-inner-items">
                          <h4>
                            <img
                              src="https://pakgames.net/assets/png/1-d951dc6d.png"
                              className="vip-win-img"
                              alt="VIP Level"
                            />
                            VIP3
                          </h4>
                          <h5>
                            <img
                              src="https://pakgames.net/assets/png/ununlocked-b5a4c7d0.png"
                              className="vip-open-img"
                              alt="Not open yet"
                            />
                            Not open yet
                          </h5>
                        </div>
                        <p>
                          Upgrading to VIP1 requires <br />
                          46 EXP
                        </p>
                        <label>Bet Rs100 = 1 EXP</label>
                      </div>
                      <div>
                        <img
                          src="https://pakgames.net/assets/png/1-1fca7935.png"
                          className="vip-item-img"
                          alt="VIP Item"
                        />
                      </div>
                      <div className="progress-bar-container">
                        <h6>VIP3</h6>
                        <div className="progress-bar-background">
                          <div
                            className="progress-bar-fill"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <p>
                          <span>
                            {currentExp}/{requiredExp}
                          </span>
                          <span>50 EXP can be leveled up</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Render content based on active slide */}
            <div className="vip-swiper-content">
              {activeSlide === 0 && (
                <div className="vip1">
                  <div className="vip-card">
                    <div className="vip-card-head">
                      <h4>
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20L4.6797 10.8496C4.34718 10.434 4.18092 10.2262 4.13625 9.9757C4.09159 9.72524 4.17575 9.47276 4.34407 8.96778L5.0883 6.73509C5.52832 5.41505 5.74832 4.75503 6.2721 4.37752C6.79587 4 7.49159 4 8.88304 4H15.117C16.5084 4 17.2041 4 17.7279 4.37752C18.2517 4.75503 18.4717 5.41505 18.9117 6.73509L19.6559 8.96778C19.8243 9.47276 19.9084 9.72524 19.8637 9.9757C19.8191 10.2262 19.6528 10.434 19.3203 10.8496L12 20ZM12 20L15.5 9M12 20L8.5 9M19.5 10L15.5 9M15.5 9L14 5M15.5 9H8.5M10 5L8.5 9M8.5 9L4.5 10" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        VIP1 Benefits level</h4>
                    </div>
                    <div className="vip-card-body">
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                        <img src="https://pakgames.net/assets/png/1-fd9896f4.png" className="vip-gift-img" alt="" />
                        <div>
                          <h5>Level up rewards</h5>
                          <p>Each account can only receive 1 time</p>
                        </div>
                        </div>
                        <div>
                          <span>
                            <img src="https://pakgames.net/assets/png/gold-4a60a059.png" alt="" />
                            60
                          </span>
                          <label htmlFor="">
                              <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">2
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM4.14635 5.14648C4.8939 4.39893 6.10591 4.39893 6.85346 5.14648L7.49991 5.79292L8.14635 5.14648C8.8939 4.39893 10.1059 4.39893 10.8535 5.14648C11.601 5.89402 11.601 7.10603 10.8535 7.85358L7.49991 11.2071L4.14635 7.85358C3.39881 7.10604 3.39881 5.89402 4.14635 5.14648Z" fill="#000000"/>
                              </svg>
                              5
                          </label>
                        </div>
                      </div>
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                          <img src="https://pakgames.net/assets/png/2-0a41a908.png" className="vip-gift-img" alt="" />
                          <div>
                            <h5>Monthly reward</h5>
                            <p>Each account can only receive 1 time per month</p>
                          </div>
                        </div>
                        <div>
                          <span>
                            <img src="https://pakgames.net/assets/png/gold-4a60a059.png" alt="" />
                            50
                          </span>
                          <label htmlFor="">
                              <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">2
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM4.14635 5.14648C4.8939 4.39893 6.10591 4.39893 6.85346 5.14648L7.49991 5.79292L8.14635 5.14648C8.8939 4.39893 10.1059 4.39893 10.8535 5.14648C11.601 5.89402 11.601 7.10603 10.8535 7.85358L7.49991 11.2071L4.14635 7.85358C3.39881 7.10604 3.39881 5.89402 4.14635 5.14648Z" fill="#000000"/>
                              </svg>
                              1
                          </label>
                        </div>
                      </div>
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                        <img src="https://pakgames.net/assets/png/4-e53b4da2.png" className="vip-gift-img" alt="" />
                        <div>
                          <h5>Safe</h5>
                          <p>Increase the extra income of the safe</p>
                        </div>
                        </div>
                        <div>
                          <label htmlFor="">
                              <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-safe">
                                <path d="M1 1.5A1.5 1.5 0 0 1 2.5 0h12A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V13H.5a.5.5 0 0 1 0-1H1V8.5H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1V1.5zM2.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-12z"/>
                                <path d="M13.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zM4.828 4.464a.5.5 0 0 1 .708 0l1.09 1.09a3.003 3.003 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3.002 3.002 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3.003 3.003 0 0 1 0-3.476l-1.09-1.09a.5.5 0 0 1 0-.708zM6.95 6.586a2 2 0 1 0 2.828 2.828A2 2 0 0 0 6.95 6.586z"/>
                              </svg>
                              0.2%
                          </label>
                        </div>
                      </div>
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                        <img src="https://pakgames.net/assets/png/5-5e6a64b1.png" className="vip-gift-img" alt="" />
                        <div>
                          <h5>Rebate rate</h5>
                          <p>Increase income of rebate</p>
                        </div>
                        </div>
                        <div>
                          <label htmlFor="">
                              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z" fill="#1C274C"/>
                              <path opacity="0.5" d="M4 12V18C4 20.2091 7.58172 22 12 22C16.4183 22 20 20.2091 20 18V12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12Z" fill="#1C274C"/>
                              <path opacity="0.7" d="M4 6V12C4 14.2091 7.58172 16 12 16C16.4183 16 20 14.2091 20 12V6C20 8.20914 16.4183 10 12 10C7.58172 10 4 8.20914 4 6Z" fill="#1C274C"/>
                              </svg>
                              0.3%
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeSlide === 1 && (
                <div className="vip2">
                  <div className="vip-card">
                    <div className="vip-card-head">
                      <h4>
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20L4.6797 10.8496C4.34718 10.434 4.18092 10.2262 4.13625 9.9757C4.09159 9.72524 4.17575 9.47276 4.34407 8.96778L5.0883 6.73509C5.52832 5.41505 5.74832 4.75503 6.2721 4.37752C6.79587 4 7.49159 4 8.88304 4H15.117C16.5084 4 17.2041 4 17.7279 4.37752C18.2517 4.75503 18.4717 5.41505 18.9117 6.73509L19.6559 8.96778C19.8243 9.47276 19.9084 9.72524 19.8637 9.9757C19.8191 10.2262 19.6528 10.434 19.3203 10.8496L12 20ZM12 20L15.5 9M12 20L8.5 9M19.5 10L15.5 9M15.5 9L14 5M15.5 9H8.5M10 5L8.5 9M8.5 9L4.5 10" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        VIP2 Benefits level</h4>
                    </div>
                    <div className="vip-card-body">
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                        <img src="https://pakgames.net/assets/png/1-fd9896f4.png" className="vip-gift-img" alt="" />
                        <div>
                          <h5>Level up rewards</h5>
                          <p>Each account can only receive 1 time</p>
                        </div>
                        </div>
                        <div>
                          <span>
                            <img src="https://pakgames.net/assets/png/gold-4a60a059.png" alt="" />
                            200
                          </span>
                          <label htmlFor="">
                              <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">2
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM4.14635 5.14648C4.8939 4.39893 6.10591 4.39893 6.85346 5.14648L7.49991 5.79292L8.14635 5.14648C8.8939 4.39893 10.1059 4.39893 10.8535 5.14648C11.601 5.89402 11.601 7.10603 10.8535 7.85358L7.49991 11.2071L4.14635 7.85358C3.39881 7.10604 3.39881 5.89402 4.14635 5.14648Z" fill="#000000"/>
                              </svg>
                              15
                          </label>
                        </div>
                      </div>
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                          <img src="https://pakgames.net/assets/png/2-0a41a908.png" className="vip-gift-img" alt="" />
                          <div>
                            <h5>Monthly reward</h5>
                            <p>Each account can only receive 1 time per month</p>
                          </div>
                        </div>
                        <div>
                          <span>
                            <img src="https://pakgames.net/assets/png/gold-4a60a059.png" alt="" />
                            150
                          </span>
                          <label htmlFor="">
                              <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">2
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM4.14635 5.14648C4.8939 4.39893 6.10591 4.39893 6.85346 5.14648L7.49991 5.79292L8.14635 5.14648C8.8939 4.39893 10.1059 4.39893 10.8535 5.14648C11.601 5.89402 11.601 7.10603 10.8535 7.85358L7.49991 11.2071L4.14635 7.85358C3.39881 7.10604 3.39881 5.89402 4.14635 5.14648Z" fill="#000000"/>
                              </svg>
                              5
                          </label>
                        </div>
                      </div>
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                        <img src="https://pakgames.net/assets/png/4-e53b4da2.png" className="vip-gift-img" alt="" />
                        <div>
                          <h5>Safe</h5>
                          <p>Increase the extra income of the safe</p>
                        </div>
                        </div>
                        <div>
                          <label htmlFor="">
                              <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-safe">
                                <path d="M1 1.5A1.5 1.5 0 0 1 2.5 0h12A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V13H.5a.5.5 0 0 1 0-1H1V8.5H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1V1.5zM2.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-12z"/>
                                <path d="M13.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zM4.828 4.464a.5.5 0 0 1 .708 0l1.09 1.09a3.003 3.003 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3.002 3.002 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3.003 3.003 0 0 1 0-3.476l-1.09-1.09a.5.5 0 0 1 0-.708zM6.95 6.586a2 2 0 1 0 2.828 2.828A2 2 0 0 0 6.95 6.586z"/>
                              </svg>
                              0.2%
                          </label>
                        </div>
                      </div>
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                        <img src="https://pakgames.net/assets/png/5-5e6a64b1.png" className="vip-gift-img" alt="" />
                        <div>
                          <h5>Rebate rate</h5>
                          <p>Increase income of rebate</p>
                        </div>
                        </div>
                        <div>
                          <label htmlFor="">
                              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z" fill="#1C274C"/>
                              <path opacity="0.5" d="M4 12V18C4 20.2091 7.58172 22 12 22C16.4183 22 20 20.2091 20 18V12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12Z" fill="#1C274C"/>
                              <path opacity="0.7" d="M4 6V12C4 14.2091 7.58172 16 12 16C16.4183 16 20 14.2091 20 12V6C20 8.20914 16.4183 10 12 10C7.58172 10 4 8.20914 4 6Z" fill="#1C274C"/>
                              </svg>
                              0.35%
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeSlide === 2 && (
                <div className="vip3">
                   <div className="vip-card">
                    <div className="vip-card-head">
                      <h4>
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20L4.6797 10.8496C4.34718 10.434 4.18092 10.2262 4.13625 9.9757C4.09159 9.72524 4.17575 9.47276 4.34407 8.96778L5.0883 6.73509C5.52832 5.41505 5.74832 4.75503 6.2721 4.37752C6.79587 4 7.49159 4 8.88304 4H15.117C16.5084 4 17.2041 4 17.7279 4.37752C18.2517 4.75503 18.4717 5.41505 18.9117 6.73509L19.6559 8.96778C19.8243 9.47276 19.9084 9.72524 19.8637 9.9757C19.8191 10.2262 19.6528 10.434 19.3203 10.8496L12 20ZM12 20L15.5 9M12 20L8.5 9M19.5 10L15.5 9M15.5 9L14 5M15.5 9H8.5M10 5L8.5 9M8.5 9L4.5 10" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        VIP3 Benefits level</h4>
                    </div>
                    <div className="vip-card-body">
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                        <img src="https://pakgames.net/assets/png/1-fd9896f4.png" className="vip-gift-img" alt="" />
                        <div>
                          <h5>Level up rewards</h5>
                          <p>Each account can only receive 1 time</p>
                        </div>
                        </div>
                        <div>
                          <span>
                            <img src="https://pakgames.net/assets/png/gold-4a60a059.png" alt="" />
                            700
                          </span>
                          <label htmlFor="">
                              <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">2
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM4.14635 5.14648C4.8939 4.39893 6.10591 4.39893 6.85346 5.14648L7.49991 5.79292L8.14635 5.14648C8.8939 4.39893 10.1059 4.39893 10.8535 5.14648C11.601 5.89402 11.601 7.10603 10.8535 7.85358L7.49991 11.2071L4.14635 7.85358C3.39881 7.10604 3.39881 5.89402 4.14635 5.14648Z" fill="#000000"/>
                              </svg>
                              50
                          </label>
                        </div>
                      </div>
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                          <img src="https://pakgames.net/assets/png/2-0a41a908.png" className="vip-gift-img" alt="" />
                          <div>
                            <h5>Monthly reward</h5>
                            <p>Each account can only receive 1 time per month</p>
                          </div>
                        </div>
                        <div>
                          <span>
                            <img src="https://pakgames.net/assets/png/gold-4a60a059.png" alt="" />
                            350
                          </span>
                          <label htmlFor="">
                              <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">2
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM4.14635 5.14648C4.8939 4.39893 6.10591 4.39893 6.85346 5.14648L7.49991 5.79292L8.14635 5.14648C8.8939 4.39893 10.1059 4.39893 10.8535 5.14648C11.601 5.89402 11.601 7.10603 10.8535 7.85358L7.49991 11.2071L4.14635 7.85358C3.39881 7.10604 3.39881 5.89402 4.14635 5.14648Z" fill="#000000"/>
                              </svg>
                              25
                          </label>
                        </div>
                      </div>
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                        <img src="https://pakgames.net/assets/png/4-e53b4da2.png" className="vip-gift-img" alt="" />
                        <div>
                          <h5>Safe</h5>
                          <p>Increase the extra income of the safe</p>
                        </div>
                        </div>
                        <div>
                          <label htmlFor="">
                              <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-safe">
                                <path d="M1 1.5A1.5 1.5 0 0 1 2.5 0h12A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V13H.5a.5.5 0 0 1 0-1H1V8.5H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1V1.5zM2.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-12z"/>
                                <path d="M13.5 6a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zM4.828 4.464a.5.5 0 0 1 .708 0l1.09 1.09a3.003 3.003 0 0 1 3.476 0l1.09-1.09a.5.5 0 1 1 .707.708l-1.09 1.09c.74 1.037.74 2.44 0 3.476l1.09 1.09a.5.5 0 1 1-.707.708l-1.09-1.09a3.002 3.002 0 0 1-3.476 0l-1.09 1.09a.5.5 0 1 1-.708-.708l1.09-1.09a3.003 3.003 0 0 1 0-3.476l-1.09-1.09a.5.5 0 0 1 0-.708zM6.95 6.586a2 2 0 1 0 2.828 2.828A2 2 0 0 0 6.95 6.586z"/>
                              </svg>
                              0.25%
                          </label>
                        </div>
                      </div>
                      <div className="vip-card-content">
                        <div className="vip-card-inner">
                        <img src="https://pakgames.net/assets/png/5-5e6a64b1.png" className="vip-gift-img" alt="" />
                        <div>
                          <h5>Rebate rate</h5>
                          <p>Increase income of rebate</p>
                        </div>
                        </div>
                        <div>
                          <label htmlFor="">
                              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z" fill="#1C274C"/>
                              <path opacity="0.5" d="M4 12V18C4 20.2091 7.58172 22 12 22C16.4183 22 20 20.2091 20 18V12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12Z" fill="#1C274C"/>
                              <path opacity="0.7" d="M4 6V12C4 14.2091 7.58172 16 12 16C16.4183 16 20 14.2091 20 12V6C20 8.20914 16.4183 10 12 10C7.58172 10 4 8.20914 4 6Z" fill="#1C274C"/>
                              </svg>
                              0.35%
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            <div className="vip-tabs-pills">
             {/* Tabs Pills */}
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "history" ? "active" : ""}`}
                    onClick={() => setActiveTab("history")}
                  >
                    History
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "rules" ? "active" : ""}`}
                    onClick={() => setActiveTab("rules")}
                  >
                    Rules
                  </button>
                </li>
              </ul>

              {/* Tabs Content */}
              <div className="tab-content">
                {activeTab === "history" && (
                  <div className="tab-pane fade show active">
                    <h5>Experience Bonus</h5>
                    <h6>Betting EXP</h6>
                    <p>2024-09-27 00:00:02</p>
                    <button>View All</button>
                  </div>
                )}
                {activeTab === "rules" && (
                  <div className="tab-pane fade show active">
                    <h4>VIP privileges</h4>
                    <p>VIP rule description</p>
                    <div className="vip-tabs-card">
                      <div className="vip-tabs-card-head">
                      Upgrade standard
                      </div>
                      <div className="vip-tabs-card-body">
                        <p>The IP member's experience points (valid bet amount) that meet the requirements of the corresponding rank will be promoted to the corresponding VIP level, the member's VIP data statistics period starts from 00:00:00 days VIP system launched.VIP level calculation is refreshed every 10 minutes! The corresponding experience level is calculated according to valid odds 100:1 !</p>
                      </div>
                    </div>

                    <div className="vip-tabs-card">
                      <div className="vip-tabs-card-head">
                      Upgrade order
                      </div>
                      <div className="vip-tabs-card-body">
                        <p>The VIP level that meets the corresponding requirements can be promoted by one level every day, but the VIP level cannot be promoted by leapfrogging.</p>
                      </div>
                    </div>

                    <div className="vip-tabs-card">
                      <div className="vip-tabs-card-head">
                      Level maintenance
                      </div>
                      <div className="vip-tabs-card-body">
                        <p>VIP members need to complete the maintenance requirements of the corresponding level within 30 days after the "VIP level change"; if the promotion is completed during this period, the maintenance requirements will be calculated according to the current level.</p>
                      </div>
                    </div>

                    <div className="vip-tabs-card">
                      <div className="vip-tabs-card-head">
                      Downgrade standard
                      </div>
                      <div className="vip-tabs-card-body">
                        <p>If a VIP member fails to complete the corresponding level maintenance requirements within 30 days, the system will automatically deduct the experience points corresponding to the level. If the experience points are insufficient, the level will be downgraded, and the corresponding discounts will be adjusted to the downgraded level accordingly.</p>
                      </div>
                    </div>

                    <div className="vip-tabs-card">
                      <div className="vip-tabs-card-head">
                      Upgrade Bonus
                      </div>
                      <div className="vip-tabs-card-body">
                        <p>The upgrade benefits can be claimed on the VIP page after the member reaches the VIP membership level, and each VIP member can only get the upgrade reward of each level once.</p>
                      </div>
                    </div>

                    <div className="vip-tabs-card">
                      <div className="vip-tabs-card-head">
                      Monthly reward
                      </div>
                      <div className="vip-tabs-card-body">
                        <p>VIP members can earn the highest level of VIP rewards once a month.Can only be received once a month. Prizes cannot be accumulated. And any unclaimed rewards will be refreshed on the next settlement day. When receiving the highest level of monthly rewards this month Monthly Rewards earned in this month will be deducted e.g. when VIP1 earns 500 and upgrades to VIP2 to receive monthly rewards 500 will be deducted.</p>
                      </div>
                    </div>

                    <div className="vip-tabs-card">
                      <div className="vip-tabs-card-head">
                      Real-time rebate
                      </div>
                      <div className="vip-tabs-card-body">
                        <p>The higher the VIP level, the higher the return rate, all the games are calculated in real time and can be self-rewarded!</p>
                      </div>
                    </div>

                    <div className="vip-tabs-card">
                      <div className="vip-tabs-card-head">
                      Safe
                      </div>
                      <div className="vip-tabs-card-body">
                        <p>VIP members who have reached the corresponding level will get additional benefits on safe deposit based on the member's VIP level.</p>
                      </div>
                    </div>


                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vip;
