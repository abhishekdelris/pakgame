import React from 'react';
import './PaymentStatus.css'; // Import the CSS file

const PaymentStatus = ({ isSuccess }) => {
  return (
    <div className="container">
      {isSuccess ? (
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="message-box _success">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <h2>Your payment was successful</h2>
              <p>
                Thank you for your payment. We will <br />
                be in contact with more details shortly
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="message-box _success _failed">
              <i className="fa fa-times-circle" aria-hidden="true"></i>
              <h2>Your payment failed</h2>
              <p>Try again later</p>
            </div>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default PaymentStatus;
