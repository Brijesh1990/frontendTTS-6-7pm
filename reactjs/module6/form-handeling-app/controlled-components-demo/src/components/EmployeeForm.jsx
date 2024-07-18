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
    });

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
        console.log('Form successfully submited',data);
        // swal messages pass here
        Swal.fire({
            title: "Wow",
            text: "Form Successfully submited",
            icon: "success"
          });

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
                    <form onSubmit={handelSubmitData}>
                        <div className="form-group mt-2">
                            <input type='text' name="name" value={data.name} placeholder="Name" onChange={formHandeler} className="form-control" />
                        </div>
                        
                        <div className="form-group mt-2">
                            <input type='text' name="email" value={data.email} placeholder="Email" onChange={formHandeler} className="form-control" />
                        </div>
                        
                        <div className="form-group mt-2">
                            <input type='text' name="mobile" value={data.mobile} placeholder="Mobile" onChange={formHandeler} className="form-control" />
                        </div>

                        
                        <div className="form-group mt-2">
                            <input type='submit' name="addemployee" value="AddEmployee" className="btn btn-md btn-dark text-white" placeholder="Name" />
                        </div>
                    </form>
                </div>
            </Row>
        </Container>



        </>
    )
}
export default Employee