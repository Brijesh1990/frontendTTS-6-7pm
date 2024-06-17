import React from "react";
import { Link } from "react-router-dom";
import {Nav,NavbarBrand} from 'react-bootstrap'
function Navbar()
{
return (
<>
<Nav className="nav navbar navbar-expand-md bg-dark p-3">
<NavbarBrand className="text-white ms-5">Flipkart App</NavbarBrand> 
<ul className="nav-links">
<li><Link to="/">Home</Link></li>
<li><Link to="/about-us">About</Link></li>
<li><Link to="/shop-now">Shop Now</Link></li>
<li><Link to="/pricing">Pricing</Link></li>
<li><Link to="/blogs">Blogs</Link></li>
<li><Link to="/contact">Contact us</Link></li>


</ul>
</Nav>

</>
)
}
export default Navbar