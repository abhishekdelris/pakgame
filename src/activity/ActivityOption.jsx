import React from 'react'
import award from '../assets/image/Activity-Award.png'
import rebate from '../assets/image/Betting-rebate.png'
import jackpot from '../assets/image/Super-Jackpot.png'
import { Link } from 'react-router-dom'

const ActivityOption = () => {
  return (
    <>
        <div className="row">
            <div className="col-12">
                <div className="activity-card">
                    <div>
                        <Link to={'/dailytasks'}>
                            <img src={award} alt />
                            <p>Activity <br />
                            Award</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/rebate'}>
                            <img src={rebate} alt />
                            <p>Betting <br />
                            rebate </p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/SuperJackpot'}>
                        <img src={jackpot} alt />
                        <p>Super <br />
                        Jackpot</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
 
    </>
  )
}

export default ActivityOption
