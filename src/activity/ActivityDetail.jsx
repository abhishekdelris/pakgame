import React, {useState,useEffect} from 'react'
import './ActivityDetail.css'
import Subtitle from '../assets/image/activity-image/Subtitle.png';
import Superbonus from '../assets/image/activity-image/superbonus.png'
import { useParams } from 'react-router-dom';

const ActivityDetail = () => {
    const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
    const { id } = useParams();

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
    {banners.data.map(banner => (
        banner.id === id ? (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color px-0">
                    <div className="activity-detail-top">
                        <img src={banner.front_image} alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh">
                    <div className="activity-detail-content">
                        <h6 className='text-center'>{banner.title}</h6>
                        <img src={banner.detail_image} className='img-fluid' alt="" />
                        <p className='text-center'>{banner.description}</p>
                    </div>
                </div>
            </div>
        </div> ) : null
    ))}
    </>
  )
}

export default ActivityDetail
