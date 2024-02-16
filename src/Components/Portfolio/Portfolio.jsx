import React from 'react'
import Footer from '../Footer/Footer'

export default function Portfolio() {
  return (
    <div>
      <div className="container  py-3 mb-5">
        <div className="row g-5">
        <div className="portfolio text-center ">
              <h1 className='fw-bold  '>PORTFOLIO COMPONENT</h1>
              <div className="lines d-flex justify-content-center  align-items-center pt-3 ">
                <div className="l-left me-3  ">  </div>
                <i className="fa-solid fa-star "></i>
                <div className="r-left ms-3  ">  </div>

              </div>
            </div>
            <div className="col-md-4 ">
               <div className="big position-relative overflow-hidden  bg-black    rounded-3 ">
               <img src="image/poert1.png"  className='w-100 rounded-3'alt="" />
              <div className="layout h-100  w-100 d-flex  justify-content-center align-items-center ">
                
              <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
               </div>
            </div>
            <div className="col-md-4 ">
               <div className="big position-relative overflow-hidden   rounded-3 ">
               <img src="image/port2.png"  className='w-100 rounded-3'alt="" />
              <div className="layout h-100  w-100 d-flex  justify-content-center align-items-center ">
                
              <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
               </div>
            </div>
            <div className="col-md-4 ">
               <div className="big position-relative overflow-hidden   rounded-3 ">
               <img src="image/port3.png"  className='w-100 rounded-3'alt="" />
              <div className="layout h-100  w-100 d-flex  justify-content-center align-items-center ">
                
              <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
               </div>
            </div>
            <div className="col-md-4 ">
               <div className="big position-relative overflow-hidden   rounded-3 ">
               <img src="image/poert1.png"  className='w-100 rounded-3'alt="" />
              <div className="layout h-100  w-100 d-flex  justify-content-center align-items-center ">
                
              <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
               </div>
            </div>
            <div className="col-md-4 ">
               <div className="big position-relative overflow-hidden   rounded-3 ">
               <img src="image/port2.png"  className='w-100 rounded-3'alt="" />
              <div className="layout h-100  w-100 d-flex  justify-content-center align-items-center ">
                
              <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
               </div>
            </div>
            <div className="col-md-4 ">
               <div className="big position-relative overflow-hidden   rounded-3 ">
               <img src="image/port3.png"  className='w-100 rounded-3'alt="" />
              <div className="layout h-100  w-100 d-flex  justify-content-center align-items-center ">
                
              <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
               </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
