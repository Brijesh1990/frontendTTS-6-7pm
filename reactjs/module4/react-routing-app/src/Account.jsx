import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Account()
{
    return (
        <>

         <Container className="p-5 mt-5">
            <h3>Create your account</h3>
            <p>Please click on links to create account <Link to=''>Create your account here</Link></p>
           
         </Container>
         

        </>
    )
}
export default Account