import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import accountUser from '../assets/image/account-user.png';
import userTag from '../assets/image/user-tag.png';
import rsImg from '../assets/image/rs-img.png';
import userIcon1 from '../assets/image/user-icon/user-icon-1.png';
import userIcon2 from '../assets/image/user-icon/user-icon-2.png';
import userIcon3 from '../assets/image/user-icon/user-icon-3.png';
import userIcon4 from '../assets/image/user-icon/user-icon-4.png';

const AccountHead = () => {
    const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const userId = Cookies.get('user_id');

    useEffect(() => {
        if (userId) {
            fetch(`${baseURLAPI}users/get_profile?user_id=${userId}`)
                .then(response => response.json())
                .then(data => {
                    setProfile(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching profile:', error);
                    setLoading(false);
                });
        } else {
            console.error('Please Login First.');
            navigate('/login');
            setLoading(false);
        }
    }, [userId, baseURLAPI, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!profile || !profile.data) {
        return <div>Error loading profile data.</div>;
    }

    const handleSendReferral = () => {
        const myHeaders = new Headers();
        myHeaders.append('Cookie', `ci_session=${Cookies.get('ci_session')}`);

        const formData = new FormData();
        formData.append('user_id', userId);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow',
        };

        fetch(`${baseURLAPI}users/send_referral_link`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result && result.referralLink) {   
                    window.location.href =  'http://localhost:5173/register?referral=WJPKEX';
                } else {
                    console.error('No referral URL found in the response.');
                }
            })
            .catch(error => console.error('Error:', error));
    };
    // result.referralLink ||
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="row account-user-top">
            <div className="account-user-heading">
                <img src={`https://delristech-projects.in/pak_game/${profile.data.profile_image}`} className="user-profile" alt="Profile" />
                <div>
                    <h6>
                        {profile.data.username} <img src={userTag} alt="icon" />
                    </h6>
                    <div className="uid">
                        <p>UID | {profile.data.referal_code}</p>
                        <button onClick={handleSendReferral}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={17} height={15}>
                                <path d="M19 22H5c-1.654 0-3-1.346-3-3V8h2v11c0 .552.449 1 1 1h14c.552 0 1-.448 1-1v-2h2v2C22 20.654 20.654 22 19 22zM16.707 11.707L15.293 10.293 18.586 7 15.293 3.707 16.707 2.293 21.414 7z" />
                                <path d="M8,18H6v-1c0-6.065,4.935-11,11-11h3v2h-3c-4.963,0-9,4.037-9,9V18z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="account-user-card">
                    <p>Total balance</p>
                    <h5>
                        Rs {profile.data.total_amount} <img src={rsImg} alt="Reload" onClick={handleReload} />
                    </h5>
                    <div className="account-user-card-icon">
                        <div>
                            <Link to="/wallet">
                                <img src={userIcon1} alt="Wallet" />
                                <p>Wallet</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/deposit">
                                <img src={userIcon2} alt="Deposit" />
                                <p>Deposit</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/withdraw">
                                <img src={userIcon3} alt="Withdraw" />
                                <p>Withdraw</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/vip">
                                <img src={userIcon4} alt="VIP" />
                                <p>VIP</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountHead;
