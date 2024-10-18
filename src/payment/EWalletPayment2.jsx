import React from 'react'

const EWalletPayment2 = () => {
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
                  <h5>E-Wallet</h5>
                </div>
               
              </div>
              <form action="">
                <div className="col-12 mb-2">
                    <label htmlFor="">Choose type</label>
                    <select name="" id="" className='form-control'>
                        <option value="">Please choose</option>
                    </select>
                </div>
                <div className="col-12 mb-2">
                    <label htmlFor="">Full name</label>
                    <input type="text" className='form-control' placeholder='Please Enter Name' name="" id="" />
                </div>
                <div className="col-12 mb-2">
                    <label htmlFor="">Account</label>
                    <input type="number" className='form-control' placeholder='Please Enter Account' name="" id="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container ewallet-footer">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto px-0">
            <button className="ewallet-save-btn">Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EWalletPayment2
