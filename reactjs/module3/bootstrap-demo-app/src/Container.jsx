import React from "react";
import { Container,Row,Button } from "react-bootstrap";
function ContainerApp()
{
    return (
        <>
        <Container className="p-5 bg-dark text-white mt-5">
        <h1>Get in touch with google Map</h1>

        </Container>

        <Container fluid  className="p-5 bg-dark text-white mt-5">
        <h1>Get in touch with google Map</h1>

        <Row>
            <div className="col-md-4 bg-info p-3">
                <Button className="btn btn-lg btn-danger">Register <span className="bi bi-person"></span></Button>
            </div>
            <div className="col-md-8 bg-white shadow p-3"></div>
        </Row>

        </Container>
            
        </>
    )
}

export default ContainerApp