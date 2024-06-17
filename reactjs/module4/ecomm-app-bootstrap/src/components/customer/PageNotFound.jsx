import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container} from "react-bootstrap";
function PageNotFound()
{
return(
<>
{/* header */}
<Header />
{/* navbar */}
<Navbar />
{/* about us content */}

<Container className="p-5 mt-5 w-75 mx-auto">
<h1>Page not found 404 errors</h1>
<img src='https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif' className="img-fluid w-25" />

</Container>



{/* footer */}
<Footer />
</>
)
}

export default PageNotFound