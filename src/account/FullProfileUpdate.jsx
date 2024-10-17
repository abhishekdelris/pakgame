import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './FullProfileUpdate.css'

const FullProfileUpdate = () => {
  const baseURLAPI = import.meta.env.VITE_BASE_URL_API;
    const navigate = useNavigate();
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
      user_id: '',
      name: '',
      middle_name: '',
      sir_name: '',
      gender: '',
      dob: '',
      alternate_phone: ''
    });
  
    // const userId = sessionStorage.getItem('user_id');
    const userId = Cookies.get('user_id');
   formData.user_id = userId;
    useEffect(() => {
    // Retrieve the user_id from session storage
    // const userId = sessionStorage.getItem('user_id');
    const userId = Cookies.get('user_id');

    if (userId) {
        fetch(`${baseURLAPI}users/get_profile?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // return false;
            setProfile(data);
            setLoading(false);
        })
        .catch(error => console.error('Error fetching profile:', error));
    } else {
        console.error('Please Login First.');
        navigate('/login');
        setLoading(false);
    }
    }, []);

    if (loading) {
    return <div>Loading...</div>;
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await fetch('https://delristech-projects.in/pak_game/index.php/api/users/update_Full_Profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
        console.log(result); // Handle success (e.g., show a success message)
        alert(`User Profile ${result}`);
      } catch (error) {
        console.error('Error updating profile:', error); // Handle error
      }
    };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto agency-bg-color">
            <form action="">
                <div className="row">
                    <div className="col-md-12 mb-3 mt-3">
                         <label htmlFor="">First Name</label>
                        <input type="text" placeholder="Enter Your First Name" className="form-control"  value={formData.name} 

         />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="">Middle Name</label>
                        <input type="text" placeholder="Enter Your Middle  Name" className="form-control"  value={formData.middle_name} 
         />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder="Enter Your Last  Name" className="form-control"  value={formData.sir_name} 
     />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="">Gender</label>
                        <select 
        name="gender" 
        value={formData.gender} 
        
       
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
                        <div className="form-control">
                            <input type="radio" name="Gender" value="Male"    /> Male
                            <input type="radio" name="Gender" className="ms-3" value="Female" /> Female
                            <input type="radio" name="Gender" className="ms-3" value="Other" />Other
                        </div>
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="">D.O.B.</label>
                        <input type="date" name="" className="form-control"  value={formData.dob} 
       
         />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="">ALternate Phone Number</label>
                        <input type="number" name="" placeholder="Enter Your ALternate Phone Number" className="form-control"  value={formData.alternate_phone} 
        
      />
                    </div>
                    {/* <div className="col-md-12 mb-3">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" placeholder="Enter Your Email" className="form-control" id="" />
                    </div> */}
                    <div className="col-md-12 mb-3">
                        <button className="btn btn-profile">Update</button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullProfileUpdate;
