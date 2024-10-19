import React, { useState } from 'react';
import Cookies from 'js-cookie'; 
import { Link, useNavigate } from 'react-router-dom';

const EWalletPayment2 = () => {
  const userId = Cookies.get('user_id');
  const navigate = useNavigate();
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  // State for form inputs
  const [formData, setFormData] = useState({
    user_id: '',
    IBAN: '',
    bank_name: '',
    beneficiary_name: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true);
    setResponseMessage('');

    const formdata = new FormData();
    formdata.append("user_id", userId);
    formdata.append("IBAN", formData.IBAN);
    formdata.append("bank_name", formData.bank_name);
    formdata.append("beneficiary_name", formData.beneficiary_name);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    try {
      const response = await fetch(`${baseURLAPI}users/add_bank`, requestOptions);
      const result = await response.text();
      console.log(result);
      setResponseMessage('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      setResponseMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

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
              <h5>E-Wallet Payment Method</h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto agency-bg-color h-100vh">
            <div className="ewallet-card">
              <div className="ewallet-card-inner">
                <div>
                  <img src="https://pakgames.net/assets/png/4-d37103ef.png" alt="" />
                  <h5>E-Wallet</h5>
                </div>
              </div>

              {/* Form for user input */}
              <form onSubmit={handleSubmit}>
                <div className="col-12 mb-2">
                  <label htmlFor="bank_name">Choose type</label>
                  <select
                    name="bank_name"
                    id="bank_name"
                    className="form-control"
                    value={formData.bank_name}
                    onChange={handleInputChange}
                  >
                    <option value="">Please choose</option>
                    <option value="Axis">Axis</option>
                    <option value="HDFC">HDFC</option>
                    <option value="SBI">SBI</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div className="col-12 mb-2">
                  <label htmlFor="beneficiary_name">Full name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Name"
                    name="beneficiary_name"
                    value={formData.beneficiary_name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12 mb-2">
                  <label htmlFor="IBAN">Account</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Please Enter Account"
                    name="IBAN"
                    value={formData.IBAN}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12 mb-2">
                  <button
                    type="submit"
                    className="ewallet-save-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Save'}
                  </button>
                </div>
              </form>

              {responseMessage && <p>{responseMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EWalletPayment2;
