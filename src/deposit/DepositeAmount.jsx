import React, { useState } from "react";
import depositIcon from '../assets/image/deposite/deposite-icon-1.png';
import crosIcon from '../assets/image/deposite/cros-icon.png';
import './deposit.css';

const DepositeAmount = () => {
  const [amount, setAmount] = useState(""); // State to store selected amount
  const [selectedAmount, setSelectedAmount] = useState(null); // State to track selected amount for background change

  // Function to handle amount selection
  const handleAmountClick = (amount) => {
    setAmount(amount); // Set the selected amount in the input box
    setSelectedAmount(amount); // Track which amount is selected
  };

  // Function to clear the input
  const clearAmount = () => {
    setAmount("");
    setSelectedAmount(null); // Clear the selection
  };

  return (
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
            <button className="deposit-btn">Deposit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositeAmount;
