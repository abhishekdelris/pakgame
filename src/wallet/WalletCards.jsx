import React from "react";
import wallet1 from '../assets/image/wallet-icon/wallet-1.png'
import wallet2 from '../assets/image/wallet-icon/wallet-2.png'
import wallet3 from '../assets/image/wallet-icon/wallet-3.png'
import wallet4 from '../assets/image/wallet-icon/wallet-4.png'
import wallet5 from '../assets/image/wallet-icon/wallet-5.png'
import wallet6 from '../assets/image/wallet-icon/wallet-6.png'
import wallet7 from '../assets/image/wallet-icon/wallet-7.png'
import wallet8 from '../assets/image/wallet-icon/wallet-8.png'
import wallet9 from '../assets/image/wallet-icon/wallet-9.png'
import wallet10 from '../assets/image/wallet-icon/wallet-10.png'
import wallet11 from '../assets/image/wallet-icon/wallet-11.png'
import wallet12 from '../assets/image/wallet-icon/wallet-12.png'

const WalletCards = () => {
  return (
    <>
      <div className="row px-2 mx-auto mt-2">
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet1} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>Lottery</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet2} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>TB_Chess</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet3} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>Wicket9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet4} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>MG</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet5} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>JDB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet6} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>SaBa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet7} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>TB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet8} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>EVO_Video</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet9} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>JILI</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet10} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>Card365</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet11} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>PP</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 px-1">
          <div className="wallet-card">
            <img src={wallet12} alt />
            <div className="wallet-card-content">
              <div>
                <h5>0.00</h5>
                <p>PG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletCards;
