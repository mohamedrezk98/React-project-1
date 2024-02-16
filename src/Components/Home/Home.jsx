import React from 'react'
import Footer from '../Footer/Footer'
export default function Home() {
  return (
    <div>

      <div className="home">
        <div className="container d-flex justify-content-center align-items-center py-4">
          <div className="row text-center">
            <div className="col-md-12">
              <div className="picture text-center  ">
                <img src="image/avataaars.svg" width='250' alt="" />
              </div>
              <div className="content pt-3 text-white">
                <h1>START FRAMEWORK</h1>
                <div className="lines d-flex justify-content-center  align-items-center pt-3 ">
                  <div className="l-left me-3 bg-white  ">  </div>
                  <i className="fa-solid fa-star text-white"></i>
                  <div className="r-left ms-3 bg-white  ">  </div>

                </div>
                <div className='jobs pt-3'>Graphic Artist - Web Designer - Illustrator</div>



              </div>
            </div>

          </div>
        </div>
        </div>
      <Footer />
    </div>

  )
}
