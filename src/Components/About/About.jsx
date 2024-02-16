import React from 'react'
import Footer from '../Footer/Footer'

export default function About() {
  return (
    <div>
      <div className="home  d-flex justify-content-center  align-items-center ">
        <div className="container   text-white" >
          <div className="row " >
            <div className="aboutText text-center ">
              <h1 className='fw-bold '>ABOUT COMPONENT</h1>
              <div className="lines d-flex justify-content-center  align-items-center pt-3 ">
                <div className="l-left me-3 bg-white  ">  </div>
                <i className="fa-solid fa-star text-white"></i>
                <div className="r-left ms-3 bg-white  ">  </div>

              </div>
            </div>
            <div className="col-md-6 pt-3">
              <div className="about_left">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
            <div className="col-md-6 pt-3">
              <div className="about_right">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


  <Footer/>


    </div>
  )
}
