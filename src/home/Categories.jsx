import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(baseURLAPI + 'users/get_category')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, [baseURLAPI]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleCategoryClick = (id) => {
        navigate(`/GameListing?catId=${id}`);
    };

    return (
        <>
            {/* Categories Start */}
            <div className="container">
                <div className="row">
                    {categories.data.slice(0, 3).map(category => (
                        <div
                            key={category.id}
                            className="col-4 category-card"
                            onClick={() => handleCategoryClick(category.id)}
                            style={{ cursor: 'pointer' }} // Adding a pointer cursor for better UX
                        >
                            <img src={category.image} alt={category.title} />
                            <h4>{category.title}</h4>
                        </div>
                    ))}
                </div>
                <div className="row category-card-middle-top">
                    {categories.data.slice(3, 6).map(category => (
                        <div
                            key={category.id}
                            className="col-4 category-card-middle"
                            onClick={() => handleCategoryClick(category.id)}
                            style={{ cursor: 'pointer' }} // Adding a pointer cursor for better UX
                        >
                            <img src={category.image} alt={category.title} />
                            <h4>{category.title}</h4>
                        </div>
                    ))}
                </div>
                <div className="row">
                    {categories.data.slice(6, 8).map(category => (
                        <div
                            key={category.id}
                            className="col-6 pe-0 category-bottom-middel"
                            onClick={() => handleCategoryClick(category.id)}
                            style={{ cursor: 'pointer' }} // Adding a pointer cursor for better UX
                        >
                            <div className="category-bottom">
                                <img src={category.image} alt={category.title} />
                                <h4>{category.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <a href="/CategoriesListing" className='view-all-btn'>View All</a>
                    </div>
                </div>
            </div>
            {/* Categories End */}
        </>
    );
};

export default Categories;
