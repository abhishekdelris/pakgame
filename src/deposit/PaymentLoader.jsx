import React from 'react';
import { Modal, Box } from '@mui/material'; // Material UI for the modal
import './PaymentLoader.css'; // Import CSS for the loader

const PaymentLoader = ({ open }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="payment-loader-modal"
      aria-describedby="A loader that shows the payment is in progress"
    >
      <Box className="payment-modal-box">
        <div className="payment-loader">
          <div className="payment-circle">
            <div className="payment-inner-circle"></div>
            <h1>$</h1>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PaymentLoader;
