import React from "react";
import { Container,Row } from "react-bootstrap";
import Navbar from './Navbar';
function Header()
{
    return (
        <>
        {/* header start here */}
        <Container fluid className="p-3 shadow">
            <Row>
                <div className="col-md-3">
                    <span className="bi bi-telephone ms-3">Call Us (+91)998003879</span>
                </div>
                <div className="col-md-6">
                    <div className="input-group">
                        <input type="text" name="search" placeholder="Search items here..." className="form-control" />
                        <button type="button" className="btn btn-sm btn-dark"><span className="bi bi-search"></span></button>
                    </div>
                </div>
                <div className="col-md-3">
                    <span className="bi bi-facebook fs-3"></span>
                    <span className="bi bi-twitter ms-2 fs-3"></span>
                    <span className="bi bi-instagram ms-2 fs-3"></span>
                    <span className="bi bi-whatsapp ms-2 fs-3"></span>
                </div>
            </Row>
        </Container>

        {/* navbar */}
        <Navbar />
        </>
    )
}
export default Header