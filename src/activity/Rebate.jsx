import React, { useState, useRef } from "react";
import { Tab, Nav } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Rebate.css"; // Import your custom CSS file

const Rebate = () => {
  const [key, setKey] = useState("all"); // Initial active tab
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index

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
    const newIndex = ["all", "lottery", "casino", "rummy", "slots"].indexOf(newKey); // Get index of the clicked tab

    // Slide direction logic
    if (newIndex > currentIndex) {
      sliderRef.current.slickNext(); // Move right (next)
    } else if (newIndex < currentIndex) {
      sliderRef.current.slickPrev(); // Move left (previous)
    }

    // Update key after sliding
    setKey(newKey);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh pt-3">
            <div className="rebate-top">
                <Tab.Container activeKey={key}>
                    {/* Nav Pills wrapped in Slick Slider */}
                    <Slider {...settings} ref={sliderRef}>
                    <Nav.Item>
                        <Nav.Link eventKey="all" className={key === "all" ? "active" : ""} onClick={() => handleTabChange("all")}>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z" />
                                <path opacity="0.4" d="M7.24 13.4302H5.34C3.15 13.4302 2 14.5802 2 16.7602V18.6602C2 20.8502 3.15 22.0002 5.33 22.0002H7.23C9.41 22.0002 10.56 20.8502 10.56 18.6702V16.7702C10.57 14.5802 9.42 13.4302 7.24 13.4302Z" />
                                <path d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z" />
                                <path d="M17.7099 21.9999C20.0792 21.9999 21.9999 20.0792 21.9999 17.7099C21.9999 15.3406 20.0792 13.4199 17.7099 13.4199C15.3406 13.4199 13.4199 15.3406 13.4199 17.7099C13.4199 20.0792 15.3406 21.9999 17.7099 21.9999Z" />
                            </svg>
                        All
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="lottery" className={key === "lottery" ? "active" : ""} onClick={() => handleTabChange("lottery")}>
                            <svg width="30px" height="30px" viewBox="0 0 800 800" enable-background="new 0 0 800 800" id="GUIDE" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                <path d="M746.972,253.414c-18.967-44.844-46.117-85.114-80.694-119.692C631.7,99.145,591.43,71.996,546.585,53.028   C500.146,33.386,450.828,23.427,400,23.427s-100.146,9.959-146.585,29.601C208.57,71.996,168.3,99.145,133.723,133.722   C99.146,168.3,71.996,208.57,53.028,253.414C33.386,299.853,23.427,349.171,23.427,400c0,50.828,9.959,100.146,29.602,146.586   c18.967,44.844,46.117,85.114,80.694,119.691c34.577,34.578,74.848,61.727,119.692,80.695   c46.438,19.641,95.757,29.601,146.585,29.601s100.146-9.96,146.585-29.601c44.845-18.969,85.115-46.117,119.692-80.695   c34.577-34.577,61.728-74.848,80.694-119.691c19.643-46.439,29.602-95.758,29.602-146.586   C776.573,349.171,766.614,299.853,746.972,253.414z M651.542,623.36c-50.643-57.158-79.406-129.281-83.955-203.36h168.375   C731.38,497.793,700.26,568.557,651.542,623.36z M735.962,380H567.491c2.309-40.658,11.974-81.202,29.405-119.505   c4.575-10.053,0.134-21.913-9.919-26.488c-10.055-4.577-21.914-0.134-26.488,9.919c-19.678,43.238-30.865,89.27-33.307,136.073H420   V64.038C589.69,74.033,725.967,210.309,735.962,380z M380,64.038V380H272.766c-0.794-14.665-2.431-29.35-4.944-43.995   c-12.069-70.34-43.414-134.825-91.018-187.693C231.585,99.678,302.285,68.615,380,64.038z M148.459,176.639   c50.667,57.18,79.433,129.291,83.974,203.361H64.038C68.62,302.207,99.74,231.442,148.459,176.639z M420,735.963V481.238   c0-11.046-8.954-20-20-20s-20,8.954-20,20v254.725C210.31,725.967,74.033,589.691,64.038,420h168.485   c-2.326,40.843-12.075,81.574-29.665,120.043c-4.593,10.045-0.173,21.912,9.872,26.506c2.696,1.232,5.522,1.815,8.305,1.815   c7.586,0,14.84-4.339,18.201-11.688c19.85-43.41,31.127-89.65,33.578-136.676h254.423c0.799,14.773,2.453,29.566,4.997,44.316   c12.11,70.213,43.436,134.588,90.963,187.371C568.415,700.322,497.715,731.385,420,735.963z"/>
                                <path d="M202.372,584.846c-9.109-6.246-21.558-3.925-27.805,5.186c-1.177,1.717-2.372,3.426-3.585,5.127   c-6.416,8.99-4.328,21.48,4.663,27.896c3.522,2.514,7.58,3.721,11.6,3.721c6.244,0,12.396-2.915,16.298-8.385   c1.358-1.902,2.697-3.816,4.016-5.74C213.805,603.54,211.483,591.092,202.372,584.846z"/>
                                <path d="M597.304,215.68c3.452,2.358,7.379,3.489,11.266,3.489c6.384,0,12.658-3.05,16.531-8.718   c1.175-1.719,2.366-3.429,3.576-5.131c6.397-9.004,4.285-21.49-4.719-27.888c-9.005-6.398-21.49-4.285-27.889,4.719   c-1.351,1.901-2.683,3.813-3.994,5.732C585.843,197.003,588.185,209.448,597.304,215.68z"/>
                                </g>
                            </svg>
                        Lottery
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="casino" className={key === "casino" ? "active" : ""} onClick={() => handleTabChange("casino")}>
                            <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                                
                                <title>tv-television</title>
                                <desc>Created with Sketch Beta.</desc>
                                <defs>
                                </defs>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                                        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-360.000000, -515.000000)" >
                                            <path d="M390,543 C390,544.104 389.104,545 388,545 L364,545 C362.896,545 362,544.104 362,543 L362,527 C362,525.896 362.896,525 364,525 L388,525 C389.104,525 390,525.896 390,527 L390,543 L390,543 Z M388,523 L378.746,523 L387.518,516.965 C387.981,516.646 388.113,515.988 387.813,515.496 C387.514,515.004 386.895,514.863 386.431,515.182 C386.431,515.182 376.821,521.817 376.009,522.307 L365.569,515.182 C365.106,514.863 364.486,515.004 364.187,515.496 C363.887,515.988 364.019,516.646 364.482,516.965 L373.254,523 L364,523 C361.791,523 360,524.791 360,527 L360,543 C360,545.209 361.791,547 364,547 L388,547 C390.209,547 392,545.209 392,543 L392,527 C392,524.791 390.209,523 388,523 L388,523 Z M387,538 L383,538 C382.447,538 382,538.447 382,539 C382,539.553 382.447,540 383,540 L387,540 C387.553,540 388,539.553 388,539 C388,538.447 387.553,538 387,538 L387,538 Z M378,540 C378,540.553 377.553,541 377,541 L367,541 C366.447,541 366,540.553 366,540 L366,530 C366,529.448 366.447,529 367,529 L377,529 C377.553,529 378,529.448 378,530 L378,540 L378,540 Z M378,527 L366,527 C364.896,527 364,527.896 364,529 L364,541 C364,542.104 364.896,543 366,543 L378,543 C379.104,543 380,542.104 380,541 L380,529 C380,527.896 379.104,527 378,527 L378,527 Z M387,541 L383,541 C382.447,541 382,541.447 382,542 C382,542.553 382.447,543 383,543 L387,543 C387.553,543 388,542.553 388,542 C388,541.447 387.553,541 387,541 L387,541 Z M384,529 L386,529 L386,531 L384,531 L384,529 Z M385,527 C383.343,527 382,528.343 382,530 C382,531.657 383.343,533 385,533 C386.657,533 388,531.657 388,530 C388,528.343 386.657,527 385,527 L385,527 Z" id="tv-television" sketch:type="MSShapeGroup">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        Casino
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="rummy" className={key === "rummy" ? "active" : ""} onClick={() => handleTabChange("rummy")}>
                            <svg  width="30px" height="30px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.466,1.967,14.78.221a5.011,5.011,0,0,0-6.224,3.24L8.368,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5h6a4.975,4.975,0,0,0,3.92-1.934,5.029,5.029,0,0,0,.689.052,4.976,4.976,0,0,0,4.775-3.563L23.8,8.156A5.021,5.021,0,0,0,20.466,1.967ZM11,22H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6h6a3,3,0,0,1,3,3V19A3,3,0,0,1,11,22ZM21.887,7.563l-3.412,10.4a2.992,2.992,0,0,1-2.6,2.134A4.992,4.992,0,0,0,16,19V9a5.006,5.006,0,0,0-5-5h-.507a3,3,0,0,1,3.7-1.867l5.686,1.746A3.006,3.006,0,0,1,21.887,7.563ZM12,13c0,1.45-1.544,3.391-2.714,4.378a1.991,1.991,0,0,1-2.572,0C5.544,16.391,4,14.45,4,13a2,2,0,0,1,4,0,2,2,0,0,1,4,0Z"/>
                            </svg>
                        Rummy
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="slots" className={key === "slots" ? "active" : ""} onClick={() => handleTabChange("slots")}>
                            <svg width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet">
                                <path d="M58.384 8H5.614C3.619 8 2 10.011 2 12.493v39.012C2 53.987 3.619 56 5.614 56h52.77C60.381 56 62 53.987 62 51.505V12.493C62 10.011 60.381 8 58.384 8M21.646 52.584h-1.134c-.346-2.755-3.79-5.034-7.802-5.032c-4.005-.002-6.753 2.276-5.885 5.032H5.691a68.68 68.68 0 0 1 0-41.17h.785a70.641 70.641 0 0 0-1.203 4.468h15.059c.154-1.499.33-2.99.526-4.468h.787c-1.657 13.378-1.657 27.791.001 41.17m18.331 0h-1.132c.262-2.755-2.839-5.034-6.845-5.032c-4.008-.002-7.106 2.276-6.845 5.032h-1.133c-1.276-13.379-1.276-27.792 0-41.17h.787c-.128 1.478-.24 2.969-.339 4.468h15.059c-.099-1.499-.213-2.99-.339-4.468h.786c1.276 13.378 1.276 27.791.001 41.17m18.332 0h-1.134c.868-2.755-1.882-5.034-5.887-5.032c-4.01-.002-7.458 2.276-7.8 5.032h-1.134c1.657-13.379 1.657-27.792 0-41.17h.786c.197 1.478.373 2.969.525 4.468h15.061a69.99 69.99 0 0 0-1.205-4.468h.787a68.672 68.672 0 0 1 .001 41.17" ></path>
                                <path d="M56.234 26.942a7.428 7.428 0 0 1-.234.159c-.334-.238-.923-.632-2.077-1.028a6.71 6.71 0 0 0-2.183-.352c-1.478 0-2.828.434-3.736.819a.92.92 0 0 0-.678-.299h-1.354c-.518 0-.938.433-.938.969v5.543c0 .536.42.968.938.968h1.354a.942.942 0 0 0 .898-.692c.1-.345.397-1.391 2.504-1.391l.105.001c-2.779 2.909-3.319 6.395-3.344 6.566a.979.979 0 0 0 .217.776a.927.927 0 0 0 .71.336h6.634c.519 0 .938-.433.938-.969c0-6.042 3.45-9.594 3.727-9.868a.983.983 0 0 0 .322-.73c0-.535-.418-.969-.936-.969h-2.35a.936.936 0 0 0-.517.161M55.051 38.35h-6.634s.659-4.518 4.609-7.357c0 0-1.071-.322-2.298-.322c-1.364 0-2.921.398-3.402 2.084h-1.354v-5.543h1.354v.74s2.047-1.262 4.414-1.262c.617 0 1.257.086 1.887.303c1.807.623 1.986 1.17 2.336 1.17c.163 0 .364-.121.789-.411h2.346c0-.001-4.047 3.837-4.047 10.598" ></path>
                                <path d="M38.564 26.782h-2.35a.928.928 0 0 0-.518.16a7.428 7.428 0 0 1-.234.159c-.334-.238-.923-.632-2.077-1.028a6.71 6.71 0 0 0-2.183-.352c-1.478 0-2.828.434-3.736.819a.92.92 0 0 0-.678-.299h-1.354c-.518 0-.938.433-.938.969v5.543c0 .536.42.968.938.968h1.354a.942.942 0 0 0 .898-.692c.1-.345.397-1.391 2.504-1.391l.105.001c-2.779 2.909-3.319 6.395-3.345 6.566a.983.983 0 0 0 .218.776a.927.927 0 0 0 .71.336h6.634c.519 0 .938-.433.938-.969c0-6.042 3.45-9.594 3.727-9.868a.983.983 0 0 0 .322-.73c.001-.534-.417-.968-.935-.968m-4.05 11.568H27.88s.659-4.518 4.609-7.357c0 0-1.071-.322-2.298-.322c-1.364 0-2.921.398-3.402 2.084h-1.354v-5.543h1.354v.74s2.047-1.262 4.414-1.262c.617 0 1.257.086 1.887.303c1.807.623 1.986 1.17 2.336 1.17c.163 0 .364-.121.789-.411h2.346c0-.001-4.047 3.837-4.047 10.598" ></path>
                                <path d="M18.027 26.782h-2.35a.928.928 0 0 0-.518.16c-.046.033-.144.099-.234.159c-.334-.238-.923-.632-2.077-1.028a6.713 6.713 0 0 0-2.185-.352c-1.476 0-2.828.434-3.734.819a.92.92 0 0 0-.678-.299H4.898c-.518 0-.938.433-.938.969v5.543c0 .536.42.968.938.968h1.354a.942.942 0 0 0 .898-.692c.098-.345.397-1.391 2.504-1.391l.105.001c-2.779 2.909-3.319 6.395-3.345 6.566a.983.983 0 0 0 .218.776a.927.927 0 0 0 .71.336h6.634c.517 0 .938-.433.938-.969c0-6.042 3.45-9.594 3.727-9.868a.983.983 0 0 0 .322-.73c0-.534-.418-.968-.936-.968m-4.05 11.568H7.343s.659-4.518 4.609-7.357c0 0-1.071-.322-2.298-.322c-1.364 0-2.921.398-3.402 2.084H4.898v-5.543h1.354v.74s2.047-1.262 4.412-1.262c.619 0 1.259.086 1.889.303c1.807.623 1.986 1.17 2.336 1.17c.163 0 .364-.121.789-.411h2.346c-.001-.001-4.047 3.837-4.047 10.598" ></path>
                            </svg>
                        Slots
                        </Nav.Link>
                    </Nav.Item>
                    </Slider>

                    {/* Tab Content */}
                    <Tab.Content>
                    <Tab.Pane eventKey="all">
                        <div className="rebate-inner">
                            <div className="rebate-content">
                                <p>All-Total betting rebate</p>
                                <label htmlFor=""> 
                                    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L4.35009 13.3929C2.24773 11.8912 1 9.46667 1 6.88306V3L8 0L15 3V6.88306C15 9.46667 13.7523 11.8912 11.6499 13.3929L8 16ZM12.2071 5.70711L10.7929 4.29289L7 8.08579L5.20711 6.29289L3.79289 7.70711L7 10.9142L12.2071 5.70711Z" />
                                    </svg>
                                    Real-time count
                                </label>
                                <h6>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10H10" stroke="#f95959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M21.9977 12.5C21.9977 12.4226 22 11.9673 21.9977 11.9346C21.9623 11.4338 21.5328 11.035 20.9935 11.0021C20.9583 11 20.9167 11 20.8333 11H18.2308C16.4465 11 15 12.3431 15 14C15 15.6569 16.4465 17 18.2308 17H20.8333C20.9167 17 20.9583 17 20.9935 16.9979C21.5328 16.965 21.9623 16.5662 21.9977 16.0654C22 16.0327 22 15.5774 22 15.5" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                        <circle cx="18" cy="14" r="1" fill="#f95959"/>
                                        <path d="M10 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.6366 20.0203 20.8873 18.8723 20.965 17M20.965 11C20.8873 9.1277 20.6366 7.97975 19.8284 7.17157C18.6569 6 16.7712 6 13 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C3.82475 21.4816 4.69989 21.7706 6 21.8985" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M6 6L9.73549 3.52313C10.7874 2.82562 12.2126 2.82562 13.2645 3.52313L17 6" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                    0.68
                                </h6>
                                <div class="rebate-txt">Upgrade VIP level to increase rebate rate</div>
                                <div className="rebate-item-top">
                                    <div className="rebate-item">
                                        <span>Today rebate</span>
                                        <h4>0</h4>
                                    </div>
                                    <div className="rebate-item">
                                        <span>Total rebate</span>
                                        <h4>0</h4>
                                    </div>
                                </div>
                                <h3>Automatic code washing at 01:00:00 every morning</h3>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="lottery">
                        <div className="rebate-inner">
                            <div className="rebate-content">
                                <p>All-Total betting rebate</p>
                                <label htmlFor=""> 
                                    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L4.35009 13.3929C2.24773 11.8912 1 9.46667 1 6.88306V3L8 0L15 3V6.88306C15 9.46667 13.7523 11.8912 11.6499 13.3929L8 16ZM12.2071 5.70711L10.7929 4.29289L7 8.08579L5.20711 6.29289L3.79289 7.70711L7 10.9142L12.2071 5.70711Z" />
                                    </svg>
                                    Real-time count
                                </label>
                                <h6>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10H10" stroke="#f95959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M21.9977 12.5C21.9977 12.4226 22 11.9673 21.9977 11.9346C21.9623 11.4338 21.5328 11.035 20.9935 11.0021C20.9583 11 20.9167 11 20.8333 11H18.2308C16.4465 11 15 12.3431 15 14C15 15.6569 16.4465 17 18.2308 17H20.8333C20.9167 17 20.9583 17 20.9935 16.9979C21.5328 16.965 21.9623 16.5662 21.9977 16.0654C22 16.0327 22 15.5774 22 15.5" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                        <circle cx="18" cy="14" r="1" fill="#f95959"/>
                                        <path d="M10 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.6366 20.0203 20.8873 18.8723 20.965 17M20.965 11C20.8873 9.1277 20.6366 7.97975 19.8284 7.17157C18.6569 6 16.7712 6 13 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C3.82475 21.4816 4.69989 21.7706 6 21.8985" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M6 6L9.73549 3.52313C10.7874 2.82562 12.2126 2.82562 13.2645 3.52313L17 6" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                    0.68
                                </h6>
                                <div class="rebate-txt">Upgrade VIP level to increase rebate rate</div>
                                <div className="rebate-item-top">
                                    <div className="rebate-item">
                                        <span>Today rebate</span>
                                        <h4>0</h4>
                                    </div>
                                    <div className="rebate-item">
                                        <span>Total rebate</span>
                                        <h4>0</h4>
                                    </div>
                                </div>
                                <h3>Automatic code washing at 01:00:00 every morning</h3>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="casino">
                        <div className="rebate-inner">
                            <div className="rebate-content">
                                <p>All-Total betting rebate</p>
                                <label htmlFor=""> 
                                    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L4.35009 13.3929C2.24773 11.8912 1 9.46667 1 6.88306V3L8 0L15 3V6.88306C15 9.46667 13.7523 11.8912 11.6499 13.3929L8 16ZM12.2071 5.70711L10.7929 4.29289L7 8.08579L5.20711 6.29289L3.79289 7.70711L7 10.9142L12.2071 5.70711Z" />
                                    </svg>
                                    Real-time count
                                </label>
                                <h6>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10H10" stroke="#f95959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M21.9977 12.5C21.9977 12.4226 22 11.9673 21.9977 11.9346C21.9623 11.4338 21.5328 11.035 20.9935 11.0021C20.9583 11 20.9167 11 20.8333 11H18.2308C16.4465 11 15 12.3431 15 14C15 15.6569 16.4465 17 18.2308 17H20.8333C20.9167 17 20.9583 17 20.9935 16.9979C21.5328 16.965 21.9623 16.5662 21.9977 16.0654C22 16.0327 22 15.5774 22 15.5" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                        <circle cx="18" cy="14" r="1" fill="#f95959"/>
                                        <path d="M10 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.6366 20.0203 20.8873 18.8723 20.965 17M20.965 11C20.8873 9.1277 20.6366 7.97975 19.8284 7.17157C18.6569 6 16.7712 6 13 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C3.82475 21.4816 4.69989 21.7706 6 21.8985" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M6 6L9.73549 3.52313C10.7874 2.82562 12.2126 2.82562 13.2645 3.52313L17 6" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                    0.68
                                </h6>
                                <div class="rebate-txt">Upgrade VIP level to increase rebate rate</div>
                                <div className="rebate-item-top">
                                    <div className="rebate-item">
                                        <span>Today rebate</span>
                                        <h4>0</h4>
                                    </div>
                                    <div className="rebate-item">
                                        <span>Total rebate</span>
                                        <h4>0</h4>
                                    </div>
                                </div>
                                <h3>Automatic code washing at 01:00:00 every morning</h3>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="rummy">
                        <div className="rebate-inner">
                            <div className="rebate-content">
                                <p>All-Total betting rebate</p>
                                <label htmlFor=""> 
                                    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L4.35009 13.3929C2.24773 11.8912 1 9.46667 1 6.88306V3L8 0L15 3V6.88306C15 9.46667 13.7523 11.8912 11.6499 13.3929L8 16ZM12.2071 5.70711L10.7929 4.29289L7 8.08579L5.20711 6.29289L3.79289 7.70711L7 10.9142L12.2071 5.70711Z" />
                                    </svg>
                                    Real-time count
                                </label>
                                <h6>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10H10" stroke="#f95959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M21.9977 12.5C21.9977 12.4226 22 11.9673 21.9977 11.9346C21.9623 11.4338 21.5328 11.035 20.9935 11.0021C20.9583 11 20.9167 11 20.8333 11H18.2308C16.4465 11 15 12.3431 15 14C15 15.6569 16.4465 17 18.2308 17H20.8333C20.9167 17 20.9583 17 20.9935 16.9979C21.5328 16.965 21.9623 16.5662 21.9977 16.0654C22 16.0327 22 15.5774 22 15.5" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                        <circle cx="18" cy="14" r="1" fill="#f95959"/>
                                        <path d="M10 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.6366 20.0203 20.8873 18.8723 20.965 17M20.965 11C20.8873 9.1277 20.6366 7.97975 19.8284 7.17157C18.6569 6 16.7712 6 13 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C3.82475 21.4816 4.69989 21.7706 6 21.8985" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M6 6L9.73549 3.52313C10.7874 2.82562 12.2126 2.82562 13.2645 3.52313L17 6" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                    0.68
                                </h6>
                                <div class="rebate-txt">Upgrade VIP level to increase rebate rate</div>
                                <div className="rebate-item-top">
                                    <div className="rebate-item">
                                        <span>Today rebate</span>
                                        <h4>0</h4>
                                    </div>
                                    <div className="rebate-item">
                                        <span>Total rebate</span>
                                        <h4>0</h4>
                                    </div>
                                </div>
                                <h3>Automatic code washing at 01:00:00 every morning</h3>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="slots">
                        <div className="rebate-inner">
                            <div className="rebate-content">
                                <p>All-Total betting rebate</p>
                                <label htmlFor=""> 
                                    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L4.35009 13.3929C2.24773 11.8912 1 9.46667 1 6.88306V3L8 0L15 3V6.88306C15 9.46667 13.7523 11.8912 11.6499 13.3929L8 16ZM12.2071 5.70711L10.7929 4.29289L7 8.08579L5.20711 6.29289L3.79289 7.70711L7 10.9142L12.2071 5.70711Z" />
                                    </svg>
                                    Real-time count
                                </label>
                                <h6>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10H10" stroke="#f95959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M21.9977 12.5C21.9977 12.4226 22 11.9673 21.9977 11.9346C21.9623 11.4338 21.5328 11.035 20.9935 11.0021C20.9583 11 20.9167 11 20.8333 11H18.2308C16.4465 11 15 12.3431 15 14C15 15.6569 16.4465 17 18.2308 17H20.8333C20.9167 17 20.9583 17 20.9935 16.9979C21.5328 16.965 21.9623 16.5662 21.9977 16.0654C22 16.0327 22 15.5774 22 15.5" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                        <circle cx="18" cy="14" r="1" fill="#f95959"/>
                                        <path d="M10 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.6366 20.0203 20.8873 18.8723 20.965 17M20.965 11C20.8873 9.1277 20.6366 7.97975 19.8284 7.17157C18.6569 6 16.7712 6 13 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C3.82475 21.4816 4.69989 21.7706 6 21.8985" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M6 6L9.73549 3.52313C10.7874 2.82562 12.2126 2.82562 13.2645 3.52313L17 6" stroke="#f95959" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                    0.68
                                </h6>
                                <div class="rebate-txt">Upgrade VIP level to increase rebate rate</div>
                                <div className="rebate-item-top">
                                    <div className="rebate-item">
                                        <span>Today rebate</span>
                                        <h4>0</h4>
                                    </div>
                                    <div className="rebate-item">
                                        <span>Total rebate</span>
                                        <h4>0</h4>
                                    </div>
                                </div>
                                <h3>Automatic code washing at 01:00:00 every morning</h3>
                            </div>
                        </div>
                    </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <div className="rebate-history">
                    <h4>Rebate history</h4>
                    <button>All history</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Rebate;
