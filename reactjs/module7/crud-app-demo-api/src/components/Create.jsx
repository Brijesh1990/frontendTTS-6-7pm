import React,{useRef, useState} from "react";
import { Container,Row,Button,Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// import FlashMessage from 'react-flash-message'

const Create=()=>{
    // destructuring for flash  data message
    const[flash,setFlash]=useState(false);
    const name=useRef("");
    const email=useRef("");
    const phone=useRef("");
    const address=useRef("");
    const pincode=useRef("");
    const Navigate=useNavigate();

    // create formHandeler function 
    const addFormData=(e)=>{
        e.preventDefault();
        var ins={
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value,
            address:address.current.value,
            pincode:pincode.current.value
            
        }

        // call your api here  http://localhost:4000/add-data
        axios.post(`http://localhost:4000/add-data`,ins).then(()=>{
            // pass a message for insert data
            Swal.fire({
                title: "Wow!",
                text: "Thanks for added Data!",
                icon: "success"
              });

              Navigate('/');

            // pass flash React message library
            //  setFlash(true);
          
        })

        e.target.reset();


    }


    return (
        <>
      <Container className="p-5 mt-5 w-75 mx-auto shadow">
      <Row>
        <div className="col-md-5">
        <img src="https://th.bing.com/th/id/OIP.zxvbAilXBmmuoU-15JmHIwHaFj?rs=1&pid=ImgDetMain" alt="create" className="img-fluid" />   
        </div>
     
        <div className="col-md-7">
        <h3>Add Data here</h3>
        <hr className="w-50 border border-1 border-dark" />
        
        {/* {flash ? <FlashMessage duration={2000}><strong><div className="alert alert-success">Your data successfully Added!</div></strong></FlashMessage> :''} */}
        <Form onSubmit={addFormData}>
  {/* alert flash message */}
  {/* {data && (<FlashMessage duration={4000}>
                <div className='alert alert-success'>
                    <strong>Wow! Your Data successfully Added!</strong>
                </div>
                </FlashMessage>
        
             )}
           */}
            <div className="form-group mt-3">
                <input type="text" ref={name} placeholder="Name *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
                <input type="text" ref={email} placeholder="Email *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
                <input type="text" ref={phone} placeholder="Phone *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
                <input type="text" ref={address} placeholder="Address *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
                <input type="text" ref={pincode} placeholder="PinCode *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
                <input type="submit" name="adddata" value="Add Data"  className="btn bg-dark text-white btn-md" />
            </div>
        </Form>
        </div>
      </Row>
       
      </Container>
          
        </>
    )
}

export default Create