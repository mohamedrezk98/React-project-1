import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer ">
          <div className="container text-center py-5   text-white ">
            <div className="row py-5">
              <div className="col-md-4">
                <div className="locate">
                  <h2>LOCATION</h2>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>

              </div>
              <div className="col-md-4">
                <div className="locate ">
                  <h2>AROUND THE WEB</h2>
                  <div className="icons pt-2">
                    <i className="fa-brands fa-facebook mx-1 icon"></i>
                    <i className="fa-brands fa-twitter mx-1 icon"></i>
                    <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                    <i className="fa-solid fa-globe mx-1 icon"></i>
                  </div>
                </div>

              </div>
              <div className="col-md-4">
                <div className="cards">
                    <h3 >ABOUT FREELANCER</h3>
                    <p > Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>

              </div>




            </div>
           
          </div>
         
        </div>
        <div className="copy py-2">
              <div className=" text-white text-center pt-2">
                <p>Copyright © Your Website 2021</p>
              </div>
            </div>


      </>
    )
  }
}
