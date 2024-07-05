import React from "react";
import logo from '../assets/images/logo.png'
import { Link,Outlet } from "react-router-dom";

const Header = () => {
    return (

        <>
            <div className="w-full p-7 bg-blue-950 text-white flex">
                <div className="flex-row">
                   <Link to="/"><img src={logo} className="w-36" /></Link>
                </div>

                <div className="flex-row ms-40">
                    <ul className="nav-links" style={{display:"flex"}}>
                        <li className="">
                            <Link to="/About">About Us</Link>
                        </li>
                        <li className="ps-4">
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li className="ps-4">
                            <Link to="/Gallery">Gallery</Link>
                        </li>
                        <li className="ps-4">
                            <Link to="/Store">Store Locator</Link>
                        </li>
                        <li className="ps-4">
                            <Link to="/Careers">Careers</Link>
                        </li>
                        <li className="ps-4">
                            <Link to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-row ms-40">
                    <Link to="#" className="btn btn-warning">BE A FRANCHISE</Link>
                </div>
            </div>
        </>
    )
}

export default Header