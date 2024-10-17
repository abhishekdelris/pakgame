import React from 'react'
import './UserFeedback.css'
const UserFeedback = () => {
  return (
    <>
     <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh">
            <div className="feedback-top">
                <form action="">
                    <textarea name="" rows="10" placeholder="Welcome to feedback, please give feedback-please describe the problem in detail when providing feedback, preferably attach a screenshot of the problem you encountered, we will immediately process your feedback!" id=""></textarea>
                    <p>Send helpful feedback</p>
                    <p>Chance to win Mystery Rewards</p>
                    <img src="https://pakgames.net/assets/png/feedbackImg-b7a3bd03.png" className='img-fluid' alt="" />
                    <button>Submit</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserFeedback