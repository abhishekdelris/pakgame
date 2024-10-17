import React from 'react'
import gifts1 from '../assets/image/activity-image/Gifts-1.png'
import gifts2 from '../assets/image/activity-image/Gifts-2.png'
import { Link } from 'react-router-dom'

const ActivityCardFirst = () => {
  return (
    <>
       <div className="row justify-content-between">
            <div className="col-6">
                <Link to={'/redeemGift'}>
                    <div className="activity-gift-card">
                    <img src={gifts1} alt />
                    <h3>Gifts</h3>
                    <p>Enter redemption code to
                        recieve gift rewards</p>
                    </div>
                </Link>
            </div>
            <div className="col-6">
                <Link to={'/dailySignIn'}>
                <div className="activity-gift-card">
                <img src={gifts2} alt />
                <h3>Attendance bonus</h3>
                <p>The more concecutive days
                    you sign in, the higher the
                    reward will be </p>
                </div>
                </Link>
            </div>
        </div>

    </>
  )
}

export default ActivityCardFirst
