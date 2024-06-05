import React from "react";
import { Container,Row } from "react-bootstrap";
import product1 from './assets/images/product1.webp'
import product2 from './assets/images/product2.webp'
import product3 from './assets/images/product3.webp'
import product4 from './assets/images/product4.webp'

function Content()
{
return (
<>
<Container className="p-5 mt-5">
<Row>
<div className="col-md-4 shadow">
<h5 className="text-center bg-dark text-white mt-2 p-2">Select Category</h5>

<ul className="sidebar-links">
<li><a href="">Electronics</a></li>
<li><a href="">Shoes Items</a></li>
<li><a href="">Furnitures Items</a></li>
<li><a href="">Books selling</a></li>
<li><a href="">Mobiles</a></li>
<li><a href="">Offers Zone</a></li>
</ul>

<h5 className="text-center bg-dark text-white mt-2 p-2">Offers Zones</h5>
<div className="p-4 mt-4">
<p className="text-center"><img src={product2} className="img-fluid w-50" /></p>
<p className="fs-4 text-center">Mi plus</p>
<p className="fs-6 text-center"><del>Rs.15500</del>Rs.12500</p>
<p className="fs-4 text-center"><button type="button" className="btn btn-sm btn-dark text-white">Buy Now</button></p>

</div>


</ul>
</div>
<div className="col-md-8">
<h5 className="text-center bg-dark text-white mt-2 p-2">Hurry Up 50% sell Now</h5>
<Row>
<div className="col-md-5 ms-4 shadow p-4 mt-4">
<p className="text-center"><img src={product1} className="img-fluid w-50" /></p>
<p className="fs-4 text-center">Mi plus</p>
<p className="fs-6 text-center"><del>Rs.15500</del>Rs.12500</p>
<p className="fs-4 text-center"><button type="button" className="btn btn-sm btn-dark text-white">Buy Now</button></p>


</div>

<div className="col-md-5 ms-5 shadow p-4 mt-4">
<p className="text-center"><img src={product2} className="img-fluid w-50" /></p>
<p className="fs-4 text-center">Mi plus</p>
<p className="fs-6 text-center"><del>Rs.15500</del>Rs.12500</p>
<p className="fs-4 text-center"><button type="button" className="btn btn-sm btn-dark text-white">Buy Now</button></p>

</div>

<div className="col-md-5 ms-4 shadow p-4 mt-4">
<p className="text-center"><img src={product3} className="img-fluid w-50" /></p>
<p className="fs-4 text-center">Mi plus</p>
<p className="fs-6 text-center"><del>Rs.15500</del>Rs.12500</p>
<p className="fs-4 text-center"><button type="button" className="btn btn-sm btn-dark text-white">Buy Now</button></p>

</div>

<div className="col-md-5 ms-5 shadow p-4 mt-4">
<p className="text-center"><img src={product4} className="img-fluid w-50" /></p>
<p className="fs-4 text-center">Mi plus</p>
<p className="fs-6 text-center"><del>Rs.15500</del>Rs.12500</p>
<p className="fs-4 text-center"><button type="button" className="btn btn-sm btn-dark text-white">Buy Now</button></p>

</div>
</Row>
</div>
</Row>
</Container>
</>
)
}
export default Content