import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutUs from "../assets/images/About.jpg"
function About() {
    return (
        <>
            <Header />
            <div className="container mx-0 p-20">
                <div className="row">
                    <div className="col-md-7">
                        <h2 className="text-blue-950 h2">TEALOGY CAFE: BEST INDIAN CAFÉ CHAIN</h2>
                        <hr />
                        <p className="py-4">We are an Indian café chain that welcomes you with our exceptional kulhad chai experience. Spreading our tealogy effects from our establishment in 2018 and are continuously breaking the barriers of boundaries across the globe, curating the aromatic essence of our special kulhad chai.</p>

                        <p>As India’s fastest-growing tea franchise with over 320+ tea café outlets shining across the world, We embrace a vision to seamlessly merge the health benefits of Kulhad with India’s beloved “Tea” and share the unique offering of our special tea profusion worldwide.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={AboutUs} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default About