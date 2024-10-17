import React from "react";
import './PromotionRule.css'

const PromotionRule = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto agency-bg-color h-100vh">
            <div className="promotion-rule-head">
                <h5>【Promotion partner】program</h5>
                <h6>This activity is valid for a long time</h6>
            </div>
            <div className="promotion-rule-content">
                <div className="promotion-rule-content-heading">
                    <h5>01</h5>
                    <p>There are 6 subordinate levels in inviting friends, if A invites B, then B is a level 1 subordinate of A. If B invites C, then C is a level 1 subordinate of B and also a level 2 subordinate of A. If C invites D, then D is a level 1 subordinate of C, at the same time a level 2 subordinate of B and also a level 3 subordinate of A.</p>
                </div>
            </div>
            <div className="promotion-rule-content">
                <div className="promotion-rule-content-heading">
                    <h5>02</h5>
                    <p>When inviting friends to register, you must send the invitation link provided or enter the invitation code manually so that your friends become your level 1 subordinates.</p>
                </div>
            </div>
            <div className="promotion-rule-content">
                <div className="promotion-rule-content-heading">
                    <h5>03</h5>
                    <p>The invitee registers via the inviter's invitation code and completes the deposit, shortly after that the commission will be received immediately</p>
                </div>
            </div>
            <div className="promotion-rule-content">
                <div className="promotion-rule-content-heading">
                    <h5>04</h5>
                    <p>The calculation of yesterday's commission starts every morning at 01:00. After the commission calculation is completed, the commission is rewarded to the wallet and can be viewed through the commission collection record.</p>
                </div>
            </div>
            <div className="promotion-rule-content">
                <div className="promotion-rule-content-heading">
                    <h5>05</h5>
                    <p>Commission rates vary depending on your agency level on that day<br />
                        Number of Teams: How many downline deposits you have to date. <br />
                        Team Deposits: The total number of deposits made by your downline in one day. <br />
                        Team Deposit: Your downline deposits within one day.</p>
                </div>
            </div>
            <div className="promotion-rule-content">
                <div className="promotion-rule-content-heading">
                    <table>
                        <thead>
                        <tr>
                            <th>Rebate level </th>
                            <th>Team Number</th>
                            <th>Team Betting </th>
                            <th>Team Deposit </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>L0</span> </td>
                                <td> 0</td>
                                <td> 0</td>
                                <td> 0</td>
                            </tr>
                            <tr>
                                <td><span>L0</span> </td>
                                <td> 0</td>
                                <td> 0</td>
                                <td> 0</td>
                            </tr>
                            <tr>
                                <td><span>L0</span> </td>
                                <td> 0</td>
                                <td> 0</td>
                                <td> 0</td>
                            </tr>
                            <tr>
                                <td><span>L0</span> </td>
                                <td> 0</td>
                                <td> 0</td>
                                <td> 0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="promotion-rule-content">
                <div className="promotion-rule-content-heading">
                    <h5>06</h5>
                    <p>The commission percentage depends on the membership level. The higher the membership level, the higher the bonus percentage. Different game types also have different payout percentages. </p>
                </div>
            </div>
            <div className="promotion-rule-content">
                <div className="promotion-rule-content-heading">
                    <h5>07</h5>
                    <p>TOP20 commission rankings will be randomly awarded with  a separate bonus</p>
                </div>
            </div>
            <div className="promotion-rule-content">
                <div className="promotion-rule-content-heading">
                    <h5>08</h5>
                    <p>The final interpretation of this activity belongs to Welcome to Pak Games</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionRule;
