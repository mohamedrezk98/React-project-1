import React from 'react'
import Footer from '../Footer/Footer'

export default function Contact() {
  return (
    <div>
      <div className="container my-5  py-5 ">
        <div className="row">
          <div className="portfolio text-center ">
            <h1 className='fw-bold  '>CONATCT SECTION</h1>
            <div className="lines d-flex justify-content-center  align-items-center pt-3 ">
              <div className="l-left me-3  ">  </div>
              <i className="fa-solid fa-star "></i>
              <div className="r-left ms-3  ">  </div>

            </div>
          </div>
          <div className="col-md-12 mt-5 d-flex align-items-center  justify-content-center">
            <div className="mob w-50 mt-5 ">
            
              <input type="text" placeholder='userName' className='form-control mb-3' />
              <input type="number" placeholder='userAge' className='form-control mb-3' />
              <input type="email" placeholder='userEmail' className='form-control mb-3' />
              <input type="password" placeholder='userPassword' className='form-control mb-3' />
              <button className='btn btn-success'>send message</button>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
