import React from "react";
import { Nav,NavbarBrand} from "react-bootstrap";
function Header()
{
    return (
        <>
        {/* navbar start here */}
        <Nav className="nav navbar navbar-expand-md bg-dark p-2">
        <NavbarBrand className="navbar-brand text-white ms-5">My App</NavbarBrand>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Account</a></li>
        </ul>
        </Nav>  
        </>
    )
}
export default Header