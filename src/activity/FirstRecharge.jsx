
import React from 'react';
import './FirstRecharge.css';

const FirstRecharge = () => {
  const rules = [
    "Exclusive for the first recharge of the account. There is only one chance. The more you recharge, the more rewards you will receive. The highest reward is Rs0.00.",
    "Activities cannot be participated in repeatedly;",
    "Rewards can only be claimed manually on IOS, Android, H5, and PC;",
    "The bonus (excluding the principal) given in this event requires 1 times the coding turnover (i.e. valid bets) before it can be withdrawn, and the coding does not limit the platform;",
    "This event is limited to normal human operations by the account owner. It is prohibited to rent, use plug-ins, robots, gamble with different accounts, brush each other, arbitrage, interfaces, protocols, exploit loopholes, group control or other technical means to participate, otherwise it will be canceled or Rewards will be deducted, frozen, or even blacklisted;",
    "In order to avoid differences in text understanding, the platform reserves the right of final interpretation of this event."
  ];

  return (
    <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh">
            <div className="activity-rules">
                <div className="activity-header">Activity Rules</div>
                <ul className="rules-list">
                    {rules.map((rule, index) => (
                    <li key={index} className="rule-item">
                        <span className="bullet">•</span>
                        <span className="rule-text">{rule}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    </div>
  );
};

export default FirstRecharge;