import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ActivityHead from './ActivityHead'
import ActivityOption from './ActivityOption'
import ActivityCardFirst from './ActivityCardFirst'
import ActivityCards from './ActivityCards'
// import Footer from '../common/Footer'

const ActivityHome = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Retrieve the user_id from session storage
    // const userId = sessionStorage.getItem('user_id');
    const userId = Cookies.get('user_id');

    if (!userId) {
      console.error('Please Login First.');
      navigate('/login');
      setLoading(false);
    } 
    }, []);
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color">
                    <ActivityHead />
                    <ActivityOption />
                    <ActivityCardFirst />
                    <ActivityCards />
                    {/* <Footer /> */}
                </div>
            </div>
        </div>

    </>
  )
}

export default ActivityHome