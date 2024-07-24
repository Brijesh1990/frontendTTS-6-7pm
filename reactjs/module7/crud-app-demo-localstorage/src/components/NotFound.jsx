import React from "react";
import { Container,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const NotFound=()=>{
    return (
    <>

    <Container className="w-75 mx-auto p-5 mt-5 shadow">
    <h3>Page is Not Found 404 Errors</h3>
    <hr className="w-50 border border-1 border-dark" />
    <Link to='/'><Button>Redirect on Home</Button></Link> 
    </Container>

    </>
    )
}

export default NotFound