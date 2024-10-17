import React from "react";
import HeaderComponent from "../Components/HeaderComponents";
import FooterComponent from "../Components/FooterComponent";
const ContactPage = () => {
    return (
        <div>
            <div>
                <HeaderComponent></HeaderComponent>
                <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/bg_2.jpg")})` }}>
                    <div className="overlay js-fullheight"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                            <div className="col-md-9  pb-5 text-center">
                                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                                    className="fa fa-chevron-right"></i></a></span> <span>Contact us <i
                                        className="fa fa-chevron-right"></i></span></p>
                                <h1 className="mb-0 bread">Contact us</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section ftco-no-pb contact-section mb-4">
                    <div className="container">
                        <div className="row d-flex contact-info">
                            <div className="col-md-3 d-flex">
                                <div className="align-self-stretch box p-4 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-map-marker"></span>
                                    </div>
                                    <h3 className="mb-2">Address</h3>
                                    <p>Kanchipuram - 631501</p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="align-self-stretch box p-4 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-phone"></span>
                                    </div>
                                    <h3 className="mb-2">Contact Number</h3>
                                    <p><a href="tel://1234567920">Phone No:</a></p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="align-self-stretch box p-4 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-paper-plane"></span>
                                    </div>
                                    <h3 className="mb-2">Email Address</h3>
                                    <p><a href="mailto:11199a225@kanchiuniv.ac.in">Mail Id</a></p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="align-self-stretch box p-4 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-globe"></span>
                                    </div>
                                    <h3 className="mb-2">Website</h3>
                                    <p><a href="https://www.linkedin.com/in/subash-r-1b326a248/">Website Link</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br></br>
                <section className="ftco-intro ftco-section ftco-no-pt">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 text-center">
                                <div className="img" style={{ backgroundImage: `url(${require("../images/Mahabalipuram.jpg")})` }}>
                                    <div className="overlay"></div>
                                    <h2>We Are Travelix A Travel Guide</h2>
                                    <p>We can manage your travel plan according to your need with the help of our website</p>
                                    <p className="mb-0"><a className="btn btn-primary px-4 py-3">Happy and Safe Journey</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterComponent></FooterComponent>
            </div>

        </div>
    )
}
export default ContactPage;