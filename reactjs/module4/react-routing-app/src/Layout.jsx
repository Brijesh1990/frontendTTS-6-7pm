import React from "react";
import { Nav,NavbarBrand } from "react-bootstrap";
import { Link,Outlet } from "react-router-dom";
function Layout()
{
    return (
        <>
          <Nav className="nav navbar p-4 bg-dark">
          <NavbarBrand className="text-white ms-5">Flipkart App</NavbarBrand>
          {/* navbar */}
          <ul className="nav-link">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About</Link></li>
            <li><Link to='/our-services'>Our services</Link></li>
            <li><Link to='/our-gallery'>Gallery</Link></li>
            <li><Link to='/account'>Account</Link></li>
            <li><Link to='/cart'>Cart(0)</Link></li>
          </ul>
          </Nav>

          <Outlet />

        </>
    )
}
export default Layout