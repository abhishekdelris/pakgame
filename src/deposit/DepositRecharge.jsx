import React from "react";
import depositeIcon from '../assets/image/deposite/deposite-icon-2.png'

const DepositRecharge = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="recharge-card py-2">
            <h5>
              <img src={depositeIcon} alt />
              Recharge instructions
            </h5>
            <ul>
              <li>
                If the transfer time is up, please fill out the deposit form
                again
              </li>
              <li>
                The transfer amount must match the order you created, otherwise
                the money cannot be credited successfully.{" "}
              </li>
              <li>
                {" "}
                If you transfer the wrong amount , our company will not be
                responsible for lost amount!
              </li>
              <li>
                Note: do not cancel deposit order after the money has been
                transferred
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositRecharge;
