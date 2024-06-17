import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container,Row } from "react-bootstrap";
function About()
{
return(
<>
{/* header */}
<Header />
{/* navbar */}
<Navbar />
{/* about us content */}

<Container className="p-5 mt-5">
<Row>
<div className="col-md-4 shadow">
<h5 className="text-center bg-dark text-white mt-2 p-2">About Us</h5>

<ul className="sidebar-links">
<li><a href="">Chairman Messages</a></li>
<li><a href="">Our Locations</a></li>
<li><a href="">Contact us</a></li>
<li><a href="">24x7 support</a></li>

</ul>

</div>

<div className="col-md-7 ms-5 shadow p-4 mt-4">
<h1>About us</h1>
<hr className="border border-1 w-25 border-dark" />
<p>What is an About Us page?

An About Us page isn’t just where you share the story of your brand. It’s also where you tell your customer what you do for them and how you work to meet their needs in that area.

It isn’t so much “Here’s what we’re about,” but more like “Here’s who we are, why we started, and what we can do for you.”

This page can go by many other names, by the way: 

“Our Mission”
“Our Story”
“About [brand name]” 
Or simply “About”
</p>
</div>
</Row>

</Container>



{/* footer */}
<Footer />
</>
)
}

export default About