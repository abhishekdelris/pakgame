import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color px-0">
            <div className="customer-head">
                <img src="https://pakgames.net/assets/png/aboutBg-0e9d0afa.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 mx-auto bg-color h-100vh pt-3">
                <Link to={'/aboutDetail'}>
                    <div className="customer-inner mb-3">
                        <div>
                            <img src="/src/assets/image/agency-icon-1.png" alt="" />
                            <p>Confidentiality Agreement</p>
                        </div>
                        
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.61623 2.045C6.38189 2.27941 6.25024 2.59729 6.25024 2.92875C6.25024 3.2602 6.38189 3.57809 6.61623 3.8125L12.8037 10L6.61623 16.1875C6.38853 16.4233 6.26254 16.739 6.26538 17.0668C6.26823 17.3945 6.39969 17.708 6.63145 17.9398C6.86321 18.1715 7.17673 18.303 7.50448 18.3058C7.83222 18.3087 8.14797 18.1827 8.38373 17.955L15.455 10.8837C15.6893 10.6493 15.821 10.3315 15.821 10C15.821 9.66854 15.6893 9.35066 15.455 9.11625L8.38373 2.045C8.14932 1.81066 7.83143 1.67902 7.49998 1.67902C7.16852 1.67902 6.85064 1.81066 6.61623 2.045Z" />
                            </svg>

                    </div>
                </Link>
                <Link to={'/aboutDetail2'}>
                    <div className="customer-inner">
                        <div>
                            <img src="/src/assets/image/agency-icon-4.png" alt="" />
                            <p>Risk Disclosure Agreement</p>
                        </div>
                        
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.61623 2.045C6.38189 2.27941 6.25024 2.59729 6.25024 2.92875C6.25024 3.2602 6.38189 3.57809 6.61623 3.8125L12.8037 10L6.61623 16.1875C6.38853 16.4233 6.26254 16.739 6.26538 17.0668C6.26823 17.3945 6.39969 17.708 6.63145 17.9398C6.86321 18.1715 7.17673 18.303 7.50448 18.3058C7.83222 18.3087 8.14797 18.1827 8.38373 17.955L15.455 10.8837C15.6893 10.6493 15.821 10.3315 15.821 10C15.821 9.66854 15.6893 9.35066 15.455 9.11625L8.38373 2.045C8.14932 1.81066 7.83143 1.67902 7.49998 1.67902C7.16852 1.67902 6.85064 1.81066 6.61623 2.045Z" />
                            </svg>
 
                    </div>
                </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
