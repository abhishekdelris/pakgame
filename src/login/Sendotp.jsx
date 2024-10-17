import React, { useState } from "react";

const Sendotp = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleSendOtp = async () => {
    // Generate OTP and send it to the user's mobile number
    const otp = generateOtp(); // implement OTP generation logic here
    sendOtpToUser(otp, phone); // implement OTP sending logic here
    setOtpSent(true);
  };

  const handleVerifyOtp = async () => {
    // Verify OTP with the one stored in the backend
    const isValid = await verifyOtp(otp);
    if (isValid) {
      setOtpVerified(true);
      // Authenticate user and redirect to next step
    } else {
      alert('Invalid OTP');
    }
  };


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh">
            <div>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <button onClick={handleSendOtp}>Send OTP</button>
              {otpSent && (
                <div>
                  <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
                  <button onClick={handleVerifyOtp}>Verify OTP</button>
                </div>
              )}
              {otpVerified && (
                <div>
                  <p>OTP verified successfully!</p>
                  {/* Redirect to next step */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sendotp