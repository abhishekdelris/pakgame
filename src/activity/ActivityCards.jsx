// import React from 'react'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OneBanner from '../assets/image/activity-image/bannerclick.png'
import Superbonus from '../assets/image/activity-image/superbonus.png'
import Winning from '../assets/image/activity-image/winningbanner.png'
import Aviator from '../assets/image/activity-image/Aviatar.png'
import Lucy10 from '../assets/image/activity-image/Lucy10.png'
import Youtubevideo from '../assets/image/activity-image/youtubevideo.png'
import MySterious from '../assets/image/activity-image/MySterious.png'


const ActivityCards = () => {
    const baseURLAPI = import.meta.env.VITE_BASE_URL_API;

    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(baseURLAPI + 'users/get_activity_banners')
            .then(response => response.json())
            .then(data => {
                setBanners(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching banners:', error));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="activity-card-bottom">
                        <Link to={'/firstrecharge'}>
                            <img src={OneBanner} alt />
                            <h4>NEW MEMBER 1ST RECHARGE BONUS</h4>
                        </Link>
                    </div>
                   
                </div>
                {banners.data.map(banner => (
                    // <div className="item" key={banner.id}>
                    //     <img src={banner.image} alt={banner.altText} />
                    // </div>
                    <div className="col-12">
                        <div className="activity-card-bottom">
                        <Link to={`/activitydetail/${banner.id}`}>
                            <img src={banner.front_image} alt="BANNER" />
                            <h4>{banner.title}</h4>
                        </Link>
                    </div>
                    </div>
                ))}
                {/* <div className="col-12">
                    <div className="activity-card-bottom">
                        <img src={rectangle1} alt />
                        <h4>NEW MEMBER 1ST RECHARGE BONUS</h4>
                    </div>
                </div>
                <div className="col-12">
                    <div className="activity-card-bottom">
                        <img src={rectangle2} alt />
                        <h4>Recharge and Get Daily-Check in Bonus</h4>
                    </div>
                </div>
                <div className="col-12">
                    <div className="activity-card-bottom">
                        <img src={rectangle3} alt />
                        <h4>Invitation Bonus</h4>
                    </div>
                </div>
                <div className="col-12">
                    <div className="activity-card-bottom">
                        <img src={rectangle4} alt />
                        <h4>Winning Streak Bonus</h4>
                    </div>
                </div>
                <div className="col-12">
                    <div className="activity-card-bottom">
                        <img src={rectangle5} alt />
                        <h4>Aviator High Betting Award</h4>
                    </div>
                </div>
                <div className="col-12">
                    <div className="activity-card-bottom">
                        <img src={rectangle6} alt />
                        <h4>Youtube Creative Video </h4>
                    </div>
                </div>
                <div className="col-12">
                    <div className="activity-card-bottom">
                        <img src={rectangle7} alt />
                        <h4>Lucky “10” Days of Interest</h4>
                    </div>
                </div>
                <div className="col-12">
                    <div className="activity-card-bottom">
                        <img src={rectangle8} alt />
                        <h4>Mysterious Gift</h4>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default ActivityCards
