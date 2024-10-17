import React, { useState } from "react";
import localBank from '../assets/image/deposite/Local-bank.png';
import label from '../assets/image/deposite/label.png';
import easypasia from '../assets/image/deposite/Easypasia.png';
import jazzCash from '../assets/image/deposite/Jazz-Cash.png';
import bankCard from '../assets/image/deposite/Bank-Card.png';
import usdt from '../assets/image/deposite/USDT.png';
import trx from '../assets/image/deposite/TRX.png';
import './deposit.css'; // Make sure to import your CSS file

const DepositCards = () => {
  const [selectedPayment, setSelectedPayment] = useState(null); // State to track the selected payment method

  const paymentMethods = [
    { id: 1, name: "Local bank", img: localBank },
    { id: 2, name: "Easypasia", img: easypasia },
    { id: 3, name: "Jazz Cash", img: jazzCash },
    { id: 4, name: "Bank Card", img: bankCard },
    { id: 5, name: "USDT", img: usdt },
    { id: 6, name: "TRX", img: trx },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <div className="deposite-card-inner">
          <ul>
            {paymentMethods.map((method) => (
              <li 
                key={method.id} 
                onClick={() => setSelectedPayment(method.id)} 
                className={selectedPayment === method.id ? "selected-method" : ""}
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
  );
};

export default DepositCards;
