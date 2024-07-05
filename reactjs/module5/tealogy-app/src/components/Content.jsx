import React from "react";
import slider1 from '../assets/images/slider1.jpg'
import slider2 from '../assets/images/slider2.jpg'
import slider3 from '../assets/images/slider3.jpg'
import Foods from '../assets/images/Foods.png'
import Tea from '../assets/images/tea.png'
import w1 from '../assets/images/w1.png'
import w2 from '../assets/images/w2.png'
import w3 from '../assets/images/w3.png'
import w4 from '../assets/images/w4.png'
import w5 from '../assets/images/w5.png'
import w6 from '../assets/images/w6.png'
import blackTea from '../assets/images/blacktea.png'
import Container from "postcss/lib/container";

const Content = () => {
    return (
        <>
            {/* Slider */}
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption w-6/12 mb-24">
                            <h5 className="fs-3">Join us as a Franchise at india's famous chai chain</h5>
                            <h2 className="pt-3 large-font">Extra Benefits <span style={{ color: 'yellow' }}>25k</span>for women Enterpreneur</h2>
                            <a href="#" className="btn btn-warning mt-3">BE A FRANCHISE</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption w-6/12 mb-24">
                            <h5 className="fs-3">Join us as a Franchise at india's famous chai chain</h5>
                            <h2 className="fs-1 pt-3">Extra Benefits <span style={{ color: 'yellow' }}>25k</span>for women Enterpreneur</h2>
                            <a href="#" className="btn btn-warning mt-3">BE A FRANCHISE</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption w-6/12 mb-24">
                            <h5 className="fs-3">Join us as a Franchise at india's famous chai chain</h5>
                            <h2 className="fs-1 pt-3">Extra Benefits <span style={{ color: 'yellow' }}>25k</span>for women Enterpreneur</h2>
                            <a href="#" className="btn btn-warning mt-3">BE A FRANCHISE</a>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* /Slider */}

            {/* About */}
            <div className="w-full mt-24">
                <div className="row">
                    <div className="col-md-5">
                        <img src={Foods} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-8">
                                <h4 className="h6 text-blue-950 fw-bold pt-3" >BEST TEA FRANCHISE</h4>
                                <h2 className="h2 text-blue-950 py-3">A CUP FULL OF HAPPINESS FOR YOUR
                                    SOUL CUP TEA!</h2>
                                <p className="pb-7">We are an Indian café chain that welcomes you with our exceptional kulhad chai experience. Spreading our tealogy effects from our establishment in 2018 and are continuously breaking the barriers of boundaries across the globe, curating the aromatic essence of our special kulhad chai.</p>
                                <button className="btn btn-warning mb-2">Read More</button>

                                <div className="reng" style={{ display: "flex" }}>
                                    <span className="">140+ cities</span>
                                    <span className="">140+ cities</span>
                                    <span className="">140+ cities</span>
                                    <span className="">140+ cities</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={Tea} className="img-fluid mt-44" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /About */}

            {/* Way Choose */}
            <div className="container mx-auto p-5 ps-72 m-auto text-blue-950 fw-bold" >
                <div className="row">
                    <h2 className="h2 py-5">WHY CHOOSE US</h2>
                    <div className="col-md-4 px-5">
                        <div className="content w-72">
                            <img src={w1} className="img-fluid" alt="" />
                            <h3 className="fs-5 ps-4">Scrumptious Menu with Pocket-Friendly Pricing</h3>
                        </div>
                        <div className="content">
                            <img src={w2} className="img-fluid" alt="" />
                            <h3 className="fs-5 ps-4">We offer Hygienic & Standard Tasty Food</h3>
                        </div>
                        <div className="content">
                            <img src={w3} className="img-fluid" alt="" />
                            <h3 className="fs-5 ps-4">We provide Training to Staff members</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="content w-72">
                            <img src={w4} className="img-fluid" alt="" />
                            <h3 className="fs-5 ps-4">High ROI (Return on Investment)</h3>
                        </div>
                        <div className="content">
                            <img src={w6} className="img-fluid" alt="" />
                            <h3 className="fs-5 ps-4">Well- Known Brand</h3>
                        </div>
                        <div className="content">
                            <img src={w5} className="img-fluid" alt="" />
                            <h3 className="fs-5 ps-4">Proven Business Model
                            </h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={blackTea} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
            {/* /Way Choose */}
        </>
    )
}

export default Content