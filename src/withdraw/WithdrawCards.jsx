import React, { useState } from "react";
import withdraw1 from '../assets/image/deposite/Withdraw-1.png';
import withdraw2 from '../assets/image/deposite/Withdraw-2.png';
import addIcon from '../assets/image/deposite/add-icon.png';

const WithdrawCards = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [number, SetNumber] = useState('');

  // Function to handle selecting a withdrawal method
  const selectMethod = (method) => {
    setSelectedMethod(method);
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
            <div className="deposite-card-add">
              <img src={addIcon} alt="Add" />
              <p>Add</p>
            </div>
          </div>

          <div className="deposit-amount-input">
              <label htmlFor>Rs</label>
              <input type="number" placeholder="Please enter the amount " value={number}/>
            </div>
            <div className="Withdrawable-div">
              <div>
                <h5>Withdrawable balanceRs0.00</h5>
                <p>Withdrawal amount received </p>
              </div>
              <button className="all-btn">All</button>
            </div>
            <div className="text-center">
              <button className="deposit-btn">Withdraw</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawCards;
