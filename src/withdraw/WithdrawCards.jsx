import React, { useState } from "react";
import withdraw1 from '../assets/image/deposite/Withdraw-1.png';
import withdraw2 from '../assets/image/deposite/Withdraw-2.png';
import addIcon from '../assets/image/deposite/add-icon.png';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'; 

const WithdrawCards = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amount, setAmount] = useState(''); // Input amount state
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
  
  // Function to handle selecting a withdrawal method
  const selectMethod = (method) => {
    setSelectedMethod(method);
  };

  // Function to handle withdrawal API call
  const handleWithdraw = () => {
    const userId = Cookies.get('user_id');

    const formdata = new FormData();
    formdata.append("user_id", userId);
    formdata.append("amount", amount); // Amount from input field

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch(`${baseURLAPI}users/requestWithdrawal`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="deposite-card-inner">
            <ul className="withdraw-methods">
              <li
                className={`withdraw-method ${selectedMethod === 'ewallet' ? 'active' : ''}`}
                onClick={() => selectMethod('ewallet')}
              >
                <img src={withdraw1} alt="E-Wallet" />
                <p>E-Wallet</p>
              </li>
              <li
                className={`withdraw-method ${selectedMethod === 'usdt' ? 'active' : ''}`}
                onClick={() => selectMethod('usdt')}
              >
                <img src={withdraw2} alt="USDT" />
                <p>USDT</p>
              </li>
            </ul>
            <Link to="/addbank">
              <div className="deposite-card-add">
                <img src={addIcon} alt="Add" />
                <p>Add</p>
              </div>
            </Link>
          </div>

          <div className="deposit-amount-input">
            <label htmlFor="amountInput">Rs</label>
            <input
              type="number"
              placeholder="Please enter the amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)} // Update amount state
              id="amountInput"
            />
          </div>
          <div className="Withdrawable-div">
            <div>
              <h5>Withdrawable balance Rs0.00</h5>
              <p>Withdrawal amount received</p>
            </div>
            <button className="all-btn">All</button>
          </div>
          <div className="text-center">
            <button className="deposit-btn" onClick={handleWithdraw}>Withdraw</button> {/* Trigger API call */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawCards;
