import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import depositIcon from '../assets/image/deposite/deposite-icon-1.png';
import crosIcon from '../assets/image/deposite/cros-icon.png';
import localBank from '../assets/image/deposite/Local-bank.png';
import label from '../assets/image/deposite/label.png';
import easypasia from '../assets/image/deposite/Easypasia.png';
import jazzCash from '../assets/image/deposite/Jazz-Cash.png';
import bankCard from '../assets/image/deposite/Bank-Card.png';
import usdt from '../assets/image/deposite/USDT.png';
import trx from '../assets/image/deposite/TRX.png';
import depositeIcon from '../assets/image/deposite/deposite-icon-2.png'
import './deposit.css'; // Make sure to import your CSS file
import './TransferModal.css';
import PaymentLoader from "./PaymentLoader";
import PaymentStatus from "./PaymentStatus";
import DepositRecharge from "./DepositRecharge";
import Cookies from 'js-cookie';

const DepositMain = () => {
  const [selectedPayment, setSelectedPayment] = useState(null); // State to track the selected payment method
  const [amount, setAmount] = useState(""); // State to store selected amount
  const [selectedAmount, setSelectedAmount] = useState(null); // State to track selected amount for background change
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNum, setPhoneNum] = useState('');
  const [cnicNumber, setCnicNumber] = useState('')
  const [loading, setLoading] = useState(true);
  const [phoneError, setPhoneError] = useState(""); 
  const [trancLoading, setTrancLoading] = useState(false)
  const [profile, setProfile] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsSubmitted(false); // Reset the submission state when modal closes
  };
  const [formData, setFormData] = useState({
    orderNumber: "",
    mobileNumber: "",
    cnic: "",
    appHash: "$2y$12$8/h5lhCCVcqDIekq2mONYe7UtwsxfIm8g4fX1CW4XRRzXKW7MhS52", // You can make this dynamic too if needed
    billingAddress: "",
    email: "",
    name: "",
    phoneNumber: "",
    zipCode: "",
    amount: ""
  });

  const [Data, setData] = useState({
    appHash: "$2y$12$BTY/XJqVi2f2M8iKf.wyY.DsJZlDFN8VatZ8q/X5KOF4RZINmUive", // You can make this dynamic too if needed
  });

  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve the user_id from session storage
    // const userId = sessionStorage.getItem('user_id');
    const userId = Cookies.get('user_id');

    if (userId) {
      fetch(`${baseURLAPI}users/get_profile?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
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


  // Generate random 5-digit order number
  const generateOrderNumber = () => {
    const randomPart = Math.floor(100000000 + Math.random() * 900000000); // Generate a 5-digit random number between 10000 and 99999
    console.log("random..", randomPart);

    return randomPart;
  };

  generateOrderNumber();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
 // Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent default form submission
  setTrancLoading(true);
  setIsModalOpen(true);

  // Validate input fields
  if (!phoneNum || !cnicNumber) {
    alert('Please fill in all fields.');
    setTrancLoading(false);
    return;
  }

  // Prepare headers
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5lc3Nhc29mdHNvbHV0aW9ucy5jb20vYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MjcyNjgyMzMsImV4cCI6MTcyOTg2MDIzMywibmJmIjoxNzI3MjY4MjMzLCJqdGkiOiJwckFQdWgzaXpRMlN2dUFYIiwic3ViIjoiNSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.x21blsmv1tkXKGvgQ_tFjbvwrSRicmvOrVFni939y7I");
if(selectedPayment === "Easypaisa") {

  

}
  // Prepare form data
  const formdata = new FormData();
  formdata.append("orderNumber", generateOrderNumber());
  formdata.append("mobileNumber", phoneNum);
  formdata.append("cnic", cnicNumber);
  if(selectedPayment === 'Easypasia'){
        formdata.append("appHash", Data.appHash);
  }else {
      formdata.append("appHash", formData.appHash);
  }
  formdata.append("billingAddress", formData.billingAddress);
  formdata.append("email", profile.data.email_id);
  formdata.append("name", formData.name);
  formdata.append("phoneNumber", profile.data.mobile);
  formdata.append("zipCode", formData.zipCode);
  formdata.append("amount", amount);

  // Define the API endpoint based on selected payment method
  const endpoint = selectedPayment === 'Easypasia'
    ? `${baseURLAPI}users/EasyPaisa` : `${baseURLAPI}users/JazzCash`; // Adjust this line accordingly
 console.log("endpoint.........",endpoint);
 
  // Define request options
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    // Make the fetch request
    const response = await fetch(endpoint, requestOptions);
    setTrancLoading(true);

    // Check if the response is successful
    if (response.ok) {
      const result = await response.json();
      const resData = result.details;
      console.log("resData",resData);
      
      setTrancLoading(false); // Stop loading
      if (resData && resData.code === '400') {
        setTrancLoading(false)
        setIsSubmitted(true);
        setPaymentStatus('failed');
        // alert(`Error: ${resData.message}`);
      } else if (resData && resData.status === "error") {
        setTrancLoading(false)
        setIsSubmitted(true);
        setPaymentStatus('failed');
        // alert(`Error: ${resData.message}`);
      } else {
        setTrancLoading(false)
        setIsSubmitted(true);
        setPaymentStatus('success'); // Assuming the payment was successful
        // alert("Payment was successful.");
      }
    } else {
      // Handle errors based on the response
      const errorData = await response.json();
      setTrancLoading(false)
      setIsSubmitted(true);
      setPaymentStatus('failed');
      // alert(`Error: ${errorData.details.message || "An unexpected error occurred."}`);
    }
  } catch (er) {
    console.error("Network Error:", er);
    setTrancLoading(false)
    setIsSubmitted(true);
    setPaymentStatus('failed');
    alert("Network error occurred. Please try again.");
  } finally {
    setTrancLoading(false); // Ensure loading state is reset
    setOpen(false); // Close the modal after submission
  }
};

const validatePhoneNumber = (number) => {
  if (number.startsWith("0")) {
    number = number.slice(1); // Remove the first character
  }
  const phonePattern = /^\d{10}$/; // Regex for 10 digits only
  return phonePattern.test(number);
};
const handlePhoneChange = (e) => {
  const input = e.target.value;
  setPhone(input);
  if (!validatePhoneNumber(input)) {
    setPhoneError("Phone number must be 10 digits and contain only numbers.");
  } else {
    setPhoneError(""); // Clear the error if valid
   
  }
};

  const handleConfirm = () => {
    if (!phoneNum || !cnicNumber) {
      alert('Please fill in all fields.');
      return;
    }
    // Logic to handle the confirmation action
    setOpen(false); // Close modal after submission
  };

  // Function to handle amount selection
  const handleAmountClick = (amount) => {
    if (selectedPayment) {
      // console.log("selected Payment......",selectedPayment); 
      setAmount(amount); // Set the selected amount in the input box
      setSelectedAmount(amount); // Track which amount is selected
    } else {
      alert("please select payment method");
    }

  };

  // Function to clear the input
  const clearAmount = () => {
    setAmount("");
    setSelectedAmount(null); // Clear the selection
  };

  const paymentMethods = [
    { id: 1, name: "Local bank", img: localBank },
    { id: 2, name: "Easypasia", img: easypasia },
    { id: 3, name: "Jazz Cash", img: jazzCash },
    { id: 4, name: "Bank Card", img: bankCard },
    { id: 5, name: "USDT", img: usdt },
    { id: 6, name: "TRX", img: trx },
  ];

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="deposite-card-inner">
            <ul>
              {paymentMethods.map((method) => (
                <li
                  key={method.id}
                  onClick={() => {
                    if (method.name === "Easypasia" || method.name === "Jazz Cash") {
                      setSelectedPayment(method.name);
                    }
                  }}
                  className={selectedPayment === method.name ? "selected-method" : ""}
                >
                  <img src={method.img} alt={method.name} />
                  {method.name === "Local bank" && (
                    <img src={label} className="label-img" alt="Label" />
                  )}
                  <p>{method.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="deposit-amount">
            <div className="deposit-amount-heading">
              <img src={depositIcon} alt="Deposit Icon" />
              <h3>Deposit amount</h3>
            </div>
            <ul>
              <li
                onClick={() => handleAmountClick(500)}
                className={selectedAmount === 500 ? "selected-amount" : ""}
              >
                <span>Rs </span> 500
              </li>
              <li
                onClick={() => handleAmountClick(1000)}
                className={selectedAmount === 1000 ? "selected-amount" : ""}
              >
                <span>Rs </span> 1 K
              </li>
              <li
                onClick={() => handleAmountClick(5000)}
                className={selectedAmount === 5000 ? "selected-amount" : ""}
              >
                <span>Rs </span> 5 K
              </li>
              <li
                onClick={() => handleAmountClick(10000)}
                className={selectedAmount === 10000 ? "selected-amount" : ""}
              >
                <span>Rs </span> 10 K
              </li>
              <li
                onClick={() => handleAmountClick(20000)}
                className={selectedAmount === 20000 ? "selected-amount" : ""}
              >
                <span>Rs </span> 20 K
              </li>
              <li
                onClick={() => handleAmountClick(30000)}
                className={selectedAmount === 30000 ? "selected-amount" : ""}
              >
                <span>Rs </span> 30 K
              </li>
            </ul>
            <div className="deposit-amount-input">
              <label htmlFor="deposit-amount">Rs</label>
              <input
                type="number"
                placeholder="Please enter the amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} // Allow manual input
              />
              <img src={crosIcon} alt="Clear Icon" onClick={clearAmount} style={{ cursor: 'pointer' }} />
            </div>
            <div className="text-center">
              <button className={amount === "" ? "deposit-btn " : "open-modal-btn"} onClick={handleOpen}>Deposit</button>

            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Payment Deposit</h2>

            <div className="modal-body">
              <label>Mobile Number</label>
              <input
                type="text"
                placeholder="Required fields"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
              <label>CNIC Number</label>
              <input
                type="text"
                placeholder="Required fields"
                value={cnicNumber}
                onChange={(e) => setCnicNumber(e.target.value)}
              />
              <p className="modal-warning">
                Please enter the same name and bank card number as the transfer
                account!
              </p>
            </div>

            <div className="modal-footer">
              <button className="confirm-btn" onClick={handleSubmit} >
                {trancLoading ? 'Processing...' : 'Confirm'}
              </button>

              {trancLoading &&  <PaymentLoader open={isModalOpen} />} {/* Show loading while processing */}

              {/* Show PaymentStatus if form is submitted and modal is open */}
              {isSubmitted && paymentStatus && !trancLoading && (
                <PaymentStatus isSuccess={paymentStatus === 'success'} />
              )}

              <button className="cancel-btn" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <DepositRecharge />
    </>
  );
};

export default DepositMain;
