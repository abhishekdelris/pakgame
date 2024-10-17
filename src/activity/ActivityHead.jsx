import React from 'react'
import whiteLogo from '../assets/image/pak-logo-white.png'

const ActivityHead = () => {
  return (
    <>
        <div className="row activity-top">
            <div className="col-12">
                <div className="text-center">
                <img src={whiteLogo} alt />
                </div>
                <h3>Activity</h3>
                <p>Please remember to follow the event page <br />
                We will launch user feedback activities from time to time </p>
            </div>
        </div>
    </>
  )
}

export default ActivityHead
