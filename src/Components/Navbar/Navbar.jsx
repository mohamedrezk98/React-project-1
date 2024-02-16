import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        
        return (<>
            <nav className="navbar navbar-expand-lg  py-4  ">
                <div className="container">
                    <NavLink className="navbar-brand fs-2 fw-bold text-white" to="/home">START FRAMEWORK</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto fw-bold ">
                        <li className="nav-item px-2">
                                <NavLink className="nav-link " aria-current="/home" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link " aria-current="/about" to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item px-2 ">
                                <NavLink className="nav-link" to="/portfolio">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                            </li>
                           
                        </ul>
                     
                    </div>
                </div>
            </nav>

        </>

        )
    }
}
