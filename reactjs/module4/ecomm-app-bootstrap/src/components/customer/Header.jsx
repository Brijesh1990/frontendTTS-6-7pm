import React from "react";
import { Link } from "react-router-dom";
import {Container,Row,Button} from 'react-bootstrap'
function Header()
{
return (
<>
<Container className="p-4">
<Row>
<div className="col-md-3">
<strong><span className="bi bi-telephone"></span>Call us :(+91)-9998003879</strong>
</div>
<div className="col-md-5">
<div className="input-group">
<input type="text" placeholder="search anything here...." className="form-control" />
<Button className="btn btn-sm btn-dark bg-dark text-white"><span className="bi bi-search"></span></Button>
</div>
</div>
<div className="col-md-3 ms-5 position-relative p-0 m-0 d-flex">
<div className="">
<Link to='/create-account'><Button className="btn btn-md btn-dark bg-dark text-white">Account<span className="bi bi-person"></span></Button></Link>
</div>
<div>
<span className="bi bi-facebook fs-3 ms-5"></span>
<span className="bi bi-twitter fs-3 ms-1"></span>
<span className="bi bi-youtube fs-3 ms-1" ></span>
<span className="bi bi-instagram fs-3 ms-1" ></span>
</div>
</div>
</Row>
</Container>

</>
)
}
export default Header