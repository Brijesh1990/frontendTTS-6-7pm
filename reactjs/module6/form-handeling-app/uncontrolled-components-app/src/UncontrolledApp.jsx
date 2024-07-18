import React,{useRef} from "react";
import { Container } from "react-bootstrap";
function App()
{
    // stored all name in variables
    const name=useRef("");
    const email=useRef("");
    const mobile=useRef("");
    const address=useRef("");

    // create a function for take data form forms
    const handelFormData=(e)=>{
        e.preventDefault();
        var ins={
            name:name.current.value,
            email:email.current.value,
            mobile:mobile.current.value,
            address:address.current.value
        }
        console.log('Form data submited successfully',ins);
    }
    return(
        <>
            <Container className="mt-5 p-5 shadow w-50 mx-auto">
                <form onSubmit={handelFormData}>
                <h3>Uncontrolled components Form Handeling</h3>

                <div className="form-group mt-3">
                    <input type="text" ref={name} placeholder="Name *" className="form-control" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" ref={email} placeholder="Email *" className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <input type="text" ref={mobile} placeholder="Mobile *" className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <textarea ref={address} placeholder="Address *" className="form-control"></textarea>
                </div>

                
                <div className="form-group mt-3">
                    <input type="submit" value="Register"  className="btn btn-dark text-white" />
                </div>

                </form>
            </Container>
        </>
    )
}

export default App