import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './DailyTasks.css'
import Lucky from '../assets/image/activity-image/Lucy10.png'
import depositeIcon from '../assets/image/deposite/deposite-icon-3.png';
import noData from '../assets/image/deposite/no-data.png'

const DailyTasks = () => {
    const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
    const navigate = useNavigate();
    const [Award, setAward] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userId = Cookies.get('user_id');

        if (userId) {
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "ci_session=qtktgahk0hocbo7ehc4db16u7lun5kj9");

            const formdata = new FormData();
            formdata.append("user_id", userId);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
            };

            fetch(`${baseURLAPI}users/RewardAmount`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log("Awards", data.transactions);
                    setAward(data.transactions);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching Deposit History:', error);
                    setLoading(false);
                });
        } else {
            console.error('Please Login First.');
            navigate('/login');
            setLoading(false);
        }
    }, [baseURLAPI, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color px-0">
                        <div className="activity-detail-top">
                            <img src={Lucky} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh">
                        <div className="dailly-mission-top mb-3">
                            {Award && Award.length > 0 ? Award.map((data, index) => (
                                <div key={index}>
                                    <div className="dailly-mission-inner">
                                        <h6>Daily mission</h6>
                                        <p>{data.status ? "Finished" : "Unfinished"}</p>
                                    </div>
                                    <div className="dailly-mission-content">
                                        <p>
                                            <svg fill="#f92020" width="30px" height="30px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.32 8.17l-.06.2-.21.06-.21.07.21.06.21.06.06.21.06.21.07-.21.06-.21.2-.05c.1-.03.19-.06.18-.07-.01-.01-.09-.04-.17-.06-.09-.02-.17-.05-.18-.06-.01-.01-.05-.1-.08-.19-.03-.09-.06-.18-.07-.19-.01-.01-.04.07-.07.18zM1.48 7.22c-.07.24-.07.23-.04.24-.02 0-.11.03-.21.06l-.17.05.2.06c.11.04.21.08.22.1.01.02.04.11.07.21l.05.18.06-.19c.03-.11.07-.2.08-.21.01-.01.11-.04.21-.08l.17-.05-.19-.05c-.1-.03-.2-.06-.21-.08-.01-.01-.04-.1-.07-.21l-.06-.19-.05.18zM5.62 5.94c-.31.1-.67.4-.78.65l-.06.12H4.5l-.34 0c-.83.65-1.26 1.11-1.52 1.62-.21.42-.28.83-.2 1.25l.03.15h1.04l1.04 0 .03-.13c.05-.3.26-.78.56-1.21.16-.24.18-.29.22-.44.13-.61.49-1.31.97-1.92.13-.16.17-.21.14-.23-.07-.04-.38-.04-.47-.01zM12.43 4.92c-.07.08-.35.21-.52.25-.2.05-.7.05-.94 0l-.06-.03-.19.22c-.26.27-.43.47-.6.7l-.13.17.21.07c.23.07.5.13.66.14l.1.01-.02.37c-.7.53-1.31 1.08-1.49 1.35-.08.12-.18.6-.2.99-.02.27.01.84.03.92.01.03.26.03 1.38.03 1.29 0 1.36 0 1.35-.04-.07-.18-.15-.47-.18-.65-.05-.3-.03-.95.07-1.25.2-.84.67-1.61 1.43-2.37l.26-.24-.26-.29c-.14-.16-.26-.29-.26-.29 0 0-.02.02-.04.05z" />
                                            </svg>
                                            Slots Daily Rewards <span>0/3000</span>
                                        </p>
                                    </div>
                                    <div className="dailly-mission-border"></div>
                                    <div className="dailly-mission-content-bottom">
                                        <p>Award amount</p>
                                        <label>
                                            <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M224 295.68c-42.24 0-64-21.76-64-64s21.76-64 64-64h665.6s25.6 0 25.6 25.6v102.4h-691.2z" fill="#C89005" />
                                                <path d="M915.2 308.48h-691.2c-49.92 0-76.8-26.88-76.8-76.8s26.88-76.8 76.8-76.8h665.6c15.36 0 38.4 10.24 38.4 38.4v102.4c0 7.68-6.4 12.8-12.8 12.8z m-25.6-128h-665.6c-35.84 0-51.2 15.36-51.2 51.2s15.36 51.2 51.2 51.2h678.4v-89.6c0-10.24-7.68-12.8-12.8-12.8z" fill="#231C1C" />
                                                <path d="M907.52 494.08c2.56 14.08-6.4 26.88-20.48 30.72l-601.6 122.88c-14.08 2.56-26.88-6.4-30.72-20.48l-74.24-363.52c-2.56-14.08 6.4-26.88 20.48-30.72l601.6-122.88c14.08-2.56 26.88 6.4 30.72 20.48l74.24 363.52z" fill="#C11F29" />
                                            </svg>
                                            <span>{data.amount || '0'}</span>
                                        </label>
                                    </div>
                                </div>
                            )) : (
                                <div>No data available</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DailyTasks;
