import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import G1 from '../assets/images/g1.jpg'
import G2 from '../assets/images/g2.jpg'
import G3 from '../assets/images/g3.jpg'
import G4 from '../assets/images/g4.jpg'
import G5 from '../assets/images/g5.jpg'
import G6 from '../assets/images/g6.jpg'
import G7 from '../assets/images/g7.jpg'
import G8 from '../assets/images/g8.jpg'
import G9 from '../assets/images/g9.jpg'
import G10 from '../assets/images/g10.jpg'
import G11 from '../assets/images/g11.jpg'
import G12 from '../assets/images/g12.jpg'



function Gallery() {
    return (
        <>
            <Header />
            <div className="container mx-0 p-20 px-36">
                <div className="row">
                    <div className="col-md-3 Gallery Gallery">
                        <img src={G1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3 Gallery">
                        <img src={G2} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3 Gallery">
                        <img src={G3} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3 Gallery my-4">
                        <img src={G4} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3 Gallery my-4">
                        <img src={G5} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3 Gallery my-4">
                        <img src={G6} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3 Gallery">
                        <img src={G7} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3 Gallery">
                        <img src={G8} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3 Gallery">
                        <img src={G9} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3 Gallery">
                        <img src={G10} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3 Gallery">
                        <img src={G11} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-3 Gallery">
                        <img src={G12} className="img-fluid" alt="" />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
export default Gallery