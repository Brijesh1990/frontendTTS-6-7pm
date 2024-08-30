import React,{useRef,useState} from 'react';
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

export default function Contact() {
//email sending after submit contact us form on admin eamil id
const SERVICEID="service_s8kmt95";
const TEMPLATEID="template_70d9wlp";
const PUBLICKEY="pTcb6q47xuRiZaSQm"; 
// create each variables using useRef to stored data
const name=useRef("");
const email=useRef("");
const phone=useRef("");
const message=useRef("");
const Navigate=useNavigate("");
// create a formHandeler function to call events after submit form 
const addFormData=(e)=>{
e.preventDefault();
var insert={
name:name.current.value,
email:email.current.value,
phone:phone.current.value,
message:message.current.value
}

// call api to stored data inside of db.json axios.post(`apiurl`).then()
// email send methods
emailjs.sendForm(SERVICEID,TEMPLATEID,e.target,PUBLICKEY);
axios.post(`http://localhost:4000/contacts`,insert).then(()=>{
// pass a added flash messages
// setFlash(true);
Swal.fire({
title: "Wow?",
text: "Thanks for contact with us one of our admin will contact with you soon",
icon: "success"
});

Navigate('/contact-with-us');

});

e.target.reset();

}
return (
<div>
<Navbar />
<section className="page-section" id="contact">
<div className="container p-5 mt-5">

<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

<div className="divider-custom">
<div className="divider-custom-line"></div>
<div className="divider-custom-icon"><i className="fas fa-star"></i></div>
<div className="divider-custom-line"></div>
</div>

<div className="row justify-content-center">
<div className="col-lg-8 col-xl-7">

<form id="contactForm" onSubmit={addFormData}>
<div className="form-floating mb-3">
<input className="form-control" id="name" type="text" ref={name} name="name" placeholder="Enter your name..." data-sb-validations="required" />
<label for="name">Full name</label>
<div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
</div>

<div className="form-floating mb-3">
<input className="form-control" id="email" type="email"  ref={email} name="email" placeholder="name@example.com" data-sb-validations="required,email" />
<label for="email">Email address</label>
<div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
<div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
</div>

<div className="form-floating mb-3">
<input className="form-control" id="phone" type="tel"  ref={phone} name="phone" placeholder="(123) 456-7890" data-sb-validations="required" />
<label for="phone">Phone number</label>
<div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
</div>

<div className="form-floating mb-3">
<textarea className="form-control" id="message"  ref={message} type="text" name="message" placeholder="Enter your message here..."   style={{height: "10rem"}} data-sb-validations="required"></textarea>
<label for="message">Message</label>
<div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
</div>

<div className="d-none" id="submitSuccessMessage">
<div className="text-center mb-3">
<div className="fw-bolder">Form submission successful!</div>
To activate this form, sign up at
<br />
<Link to="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</Link>
</div>
</div>
<div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
<input type="submit" className="btn btn-primary btn-xl" id="submitButton" value="Send" />
</form>
</div>
</div>
</div>
</section>

<Footer />

</div>
)
}
