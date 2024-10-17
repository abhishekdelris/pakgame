import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const CategoriesList = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const baseURLAPI = import.meta.env.VITE_BASE_URL_API;


    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
  
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
  
    useEffect(() => {
      fetch(baseURLAPI+ 'users/get_allcategory')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // return false;
            setCategories(data);
          setLoading(false);
        })
        .catch(error => console.error('Error fetching banners:', error));
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    // console.log(categories);
    // return false;
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color">
                <div className="game-listing-heading">
                    <h4><b> Categories Listing</b></h4>
                </div>
                <div className="container">
                    <div className="row">
                    {categories.data.map(category => (
                        <div className="col-4 px-1">
                            <div className="game-listing">
                                <img src={category.image} alt="" className='img-fluid' />
                            </div>
                                <h6>{category.title}</h6>
                        </div>
                    ))}
                       
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CategoriesList