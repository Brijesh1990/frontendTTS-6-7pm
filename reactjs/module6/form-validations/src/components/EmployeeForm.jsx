import React,{useState} from "react";
import Swal from "sweetalert2";
import { Container,Row } from "react-bootstrap";
function Employee()
{
    // useState using to destructuring of data
    const[data,setData]=useState({
        name:"",
        email:"",
        mobile:"",
        address:""
    });

    // detsructuring of data for form validations
    const[errors,setErrors]=useState({});
    // create a function for validations 
    const validate=()=>{
        const errors={};
        // pass messages for name
        if(!data.name)
        {
            errors.name="Please Enter your Name";
        }
        if(!data.email)
        {
            errors.email="Please Enter your Email";
        }
        if(!data.mobile)
        {
            errors.mobile="Please Enter your Mobile";
        }
        if(!data.address)
        {
            errors.address="Please Enter your Address";
        }

        return errors;
            
                
    }

    // form handeler function 
    const formHandeler=(e)=>{
        e.preventDefault();
        const{name,value}=e.target;
        setData({
            ...data,[name]:value
        }) 
        // e.target.reset();
    }

    // create a function for submit data
    const handelSubmitData=(e)=>{
        e.preventDefault();
        // when form submited blank data pass validations
        const errors=validate();
        if(Object.keys(errors).length==0)
        {    
        console.log('Form successfully submited',data);
        // swal messages pass here
        Swal.fire({
            title: "Wow",
            text: "Form Successfully submited",
            icon: "success"
          });

        }
        else 
        {
            setErrors(errors);
        }

        // window.location.reload();
     

    }
    return(
        <>

        <Container className="p-5 w-75 mx-auto mt-5">
            <Row>
                <div className="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmK3hf9kn0o4wSBzq7j2FvUpPgzZOjL58O7A&s" className="img-fluid" />
                </div>
                <div className="col-md-8">
                 <h2>Form Handeling</h2>
                    <form method="post" onSubmit={handelSubmitData}>
                        <div className="form-group mt-2">
                            <input type='text' name="name" value={data.name} placeholder="Name" onChange={formHandeler} className="form-control" />
                            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                        </div>
                        
                        <div className="form-group mt-2">
                            <input type='text' name="email" value={data.email} placeholder="Email" onChange={formHandeler} className="form-control" />
                            
                            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                        </div>
                        
                        <div className="form-group mt-2">
                            <input type='text' name="mobile" value={data.mobile} placeholder="Mobile" onChange={formHandeler} className="form-control" />
                            
                            {errors.mobile && <p style={{color:"red"}}>{errors.mobile}</p>}
                        </div>


                        <div className="form-group mt-2">
                            <textarea name="address" placeholder="address" onChange={formHandeler} className="form-control">{data.address}</textarea>
                            
                            {errors.address && <p style={{color:"red"}}>{errors.address}</p>}
                        </div>

                        
                        <div className="form-group mt-2">
                            <input type='submit' name="addemployee" value="AddEmployee" className="btn btn-md btn-dark text-white" placeholder="Name" />
                            <input type='reset' name="reset" value="Reset" className="btn btn-md btn-dark ms-3 text-white" placeholder="" />
                        </div>
                    </form>
                </div>
            </Row>
        </Container>



        </>
    )
}
export default Employee