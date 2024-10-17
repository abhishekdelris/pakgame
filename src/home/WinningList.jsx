import React from 'react'
import taj1 from '../assets/image/taj-1.png'
import taj2 from '../assets/image/taj-2.png'
import taj3 from '../assets/image/taj-3.png'
import userWin1 from '../assets/image/user-win-1.png'
import userWin2 from '../assets/image/user-win-2.png'
import userWin3 from '../assets/image/user-win-3.png'
import userWin4 from '../assets/image/user-win-4.png'
import todayWin1 from '../assets/image/Today-win-1.png'
import todayWin2 from '../assets/image/Today-win-2.png'
import todayWin3 from '../assets/image/Today-win-3.png'


const WinningList = () => {
  return (
    <>
        {/* Winning List Start */}
        <div className="row">
            <div className="col-12">
            <div className="lottery-heading">
                <h3>Today’s earnings chart</h3>
            </div>
            </div>
        </div>
        <div className="row win-card-top">
            <div className="col-4 win-card">
            <div className="win-user">
                <img src={taj1} className="win-taj-image" alt />
                <img src={userWin1} className="win-user-image" alt />
                <img src={todayWin1} className="today-wing-label" alt />
            </div>
            <div className="win-content">
                <h5>Mem***JRT</h5>
                <h6>Rs1,706,922.48</h6>
            </div>
            </div>
            <div className="col-4 win-card win-card-center">
            <div className="win-user">
                <img src={taj2} className="win-taj-image" alt />
                <img src={userWin2} className="win-user-image" alt />
                <img src={todayWin2} className="today-wing-label" alt />
            </div>
            <div className="win-content">
                <h5>Mem***JRT</h5>
                <h6>Rs1,706,922.48</h6>
            </div>
            </div>
            <div className="col-4 win-card">
            <div className="win-user">
                <img src={taj3} className="win-taj-image" alt />
                <img src={userWin3} className="win-user-image" alt />
                <img src={todayWin3} className="today-wing-label" alt />
            </div>
            <div className="win-content">
                <h5>Mem***JRT</h5>
                <h6>Rs1,706,922.48</h6>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
            <div className="wining-list-top">
                <div>
                <h5>4</h5>
                <img src={userWin3} alt />
                <h4>Mem***DYB</h4>
                </div>
                <h3>Rs896,379.74</h3>
            </div>
            </div>
            <div className="col-12">
            <div className="wining-list-top">
                <div>
                <h5>5</h5>
                <img src={userWin4} alt />
                <h4>Mem***AQB</h4>
                </div>
                <h3>Rs865,144.00</h3>
            </div>
            </div>
        </div>
        {/* Winning List End */}

    </>
  )
}

export default WinningList
