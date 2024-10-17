import React from "react";
import './SafeBox.css'

const SafeBox = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh pt-3">
            <div className="safe-label">
                Interest rate 0.10%
            </div>
            <div className="safe-head">
                <img src="https://pakgames.net/assets/png/TotalAssetsBg-81d648d4.png" className="safe-head-bg-img" alt="" />
                <div className="safe-head-content">
                    <div className="safe-head-item">
                        <svg height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                            viewBox="0 0 512 512"  xml:space="preserve">
                        <g>
                            <path class="st0" d="M190.782,85.558c0.007-8.653,3.466-16.327,9.126-22.027c5.692-5.652,13.366-9.11,22.026-9.118h68.131
                                c8.66,0.008,16.334,3.466,22.026,9.118c5.66,5.7,9.11,13.374,9.126,22.027v25.184h33.947V85.558
                                c-0.008-35.961-29.14-65.084-65.1-65.1h-68.131c-35.96,0.016-65.092,29.139-65.1,65.1v25.184h33.948V85.558z"/>
                            <path class="st0" d="M120.283,290.614c-11.582,0-20.977,9.394-20.977,20.984c0,11.566,9.394,20.96,20.977,20.96
                                c11.573,0,20.96-9.394,20.96-20.96C141.243,300.009,131.848,290.614,120.283,290.614z"/>
                            <path class="st0" d="M471.579,130.455H40.421C18.094,130.455,0,148.549,0,170.876v280.245c0,22.326,18.094,40.421,40.421,40.421
                                h431.158c22.327,0,40.421-18.095,40.421-40.421V170.876C512,148.549,493.906,130.455,471.579,130.455z M439.859,325.603
                                l-9.086,12.584c-1.642,2.274-4.279,3.616-7.082,3.616H266.516c-12.616,40.934-50.731,70.673-95.794,70.673
                                c-55.357,0-100.23-44.881-100.23-100.223c0-55.373,44.874-100.23,100.23-100.23c39.695,0,73.989,23.068,90.22,56.526h31.429
                                c1.934,0,3.829,0.655,5.36,1.848l26.163,20.258c3.126,2.399,7.484,2.432,10.626,0.047l10.374-7.863
                                c3.118-2.36,7.437-2.368,10.555,0l15.718,11.921h0.016l15.726-11.937c3.111-2.352,7.421-2.352,10.548,0l40.586,30.695
                                C441.833,316.374,442.638,321.75,439.859,325.603z"/>
                        </g>
                        </svg>
                        <label htmlFor="">
                            <svg width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="secure" class="icon glyph">
                                <path d="M19.42,3.83,12.24,2h0A.67.67,0,0,0,12,2a.67.67,0,0,0-.2,0h0L4.58,3.83A2,2,0,0,0,3.07,5.92l.42,5.51a12,12,0,0,0,7.24,10.11l.88.38h0a.91.91,0,0,0,.7,0h0l.88-.38a12,12,0,0,0,7.24-10.11l.42-5.51A2,2,0,0,0,19.42,3.83ZM15.71,9.71l-4,4a1,1,0,0,1-1.42,0l-2-2a1,1,0,0,1,1.42-1.42L11,11.59l3.29-3.3a1,1,0,0,1,1.42,1.42Z" fill="#fff"></path>
                            </svg>
                            Financial security
                        </label>
                    </div>
                    <h4>Rs0.00</h4>
                    <h6>24-hour estimated revenue <span>Rs0.00</span></h6>
                </div>
            </div>
            <div className="safe-content">
                <div className="safe-content-item">
                    <div className="safe-content-item-inner">
                        <h6>Rs0.00</h6>
                        <span>Generated revenue</span>
                        <label htmlFor="">My interest rate 0.1%</label>
                    </div>
                    <div className="safe-content-item-inner">
                        <h6>Rs0.00</h6>
                        <span>Accumulated revenue</span>
                    </div>
                </div>
                <div className="safe-content-button">
                    <button className="transfer-out-btn">Transfer Out</button>
                    <button className="transfer-in-btn">Transfer In</button>
                </div>
                <div className="safe-span">
                    <svg data-v-002ff529="" width="16" height="16" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="StrongBox__container-errorTip">
                        <path d="M15 27.5C18.4517 27.5 21.5768 26.1009 23.8388 23.8388C26.1009 21.5768 27.5 18.4517 27.5 15C27.5 11.5482 26.1009 8.42325 23.8388 6.16116C21.5768 3.89911 18.4517 2.5 15 2.5C11.5482 2.5 8.42325 3.89911 6.16116 6.16116C3.89911 8.42325 2.5 11.5482 2.5 15C2.5 18.4517 3.89911 21.5768 6.16116 23.8388C8.42325 26.1009 11.5482 27.5 15 27.5Z" stroke="#FE6868" stroke-linejoin="round"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 23.125C15.8629 23.125 16.5625 22.4254 16.5625 21.5625C16.5625 20.6996 15.8629 20 15 20C14.1371 20 13.4375 20.6996 13.4375 21.5625C13.4375 22.4254 14.1371 23.125 15 23.125Z" fill="#FF7172"></path>
                        <path d="M15 7.5V17.5" stroke="#FE6868" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span> Funds are safe and secure, and can be transferred at any time</span>
                </div>
            </div>
            <div className="safe-content-bottom">
                <div className="safe-content-bottom-item">
                    <h6>
                        <img src="src/assets/image/wallet-icon/wallet-icon-4.png" alt="" />
                         Historical records
                    </h6>
                    <button>All history</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; 

export default SafeBox;
