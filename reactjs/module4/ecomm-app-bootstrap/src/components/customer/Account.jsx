import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container,Row } from "react-bootstrap";
function Account()
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
<h5 className="text-center bg-dark text-white mt-2 p-2">Create Your Account</h5>

<ul className="sidebar-links">
<li><a href="">Customers support</a></li>
<li><a href="">24x7 support</a></li>
<li><a href=""><img src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526" alt="signup" className="img-fluid" /></a></li>
</ul>

</div>

<div className="col-md-7 ms-5 shadow p-4 mt-4">
<h1>Register Form</h1>
<hr className="border border-1 w-25 border-dark" />


<>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
     Address
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={3}
      defaultValue={""}
    />
  </div>


  <div className="mb-3">
 
    <input
      type="submit"
      className="btn btn-dark text-white"
      id="exampleFormControlInput1" value="SignUp"
      
    />
  </div>

</>



</div>
</Row>

</Container>
{/* footer */}
<Footer />
</>
)
}

export default Account