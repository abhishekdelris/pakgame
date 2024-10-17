import React from "react";

const WithdrawableBalance = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="Withdrawable-card">
            <div className="recharge-card">
              <ul>
                <li>Need to bet Rs0.00 to be able to withdraw</li>
                <li>Withdraw time 00:00 23:59 </li>
                <li> Inday Remaining Withdrawl Time3</li>
                <li>Withdrawal amount range Rs500.00-Rs1,000,000.00 </li>
                <li>
                  Please confirm your beneficial amount information before
                  withdrawing. If your information is incorrect , our company
                  will not be liable for the amount of loss
                </li>
                <li>
                  If your beneficial information is incorrect , please contact
                  customer services{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawableBalance;
