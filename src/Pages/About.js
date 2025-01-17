import React from "react";
import HeaderComponent from "../Components/HeaderComponents";
import ServiceComponent from "../Components/ServiceComponent";
import FooterComponent from "../Components/FooterComponent";
const AboutPage = () => {
    return (
        <div>
            <div>
                <HeaderComponent></HeaderComponent>
                <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/about-page.jpg")})` }}>
                    <div className="overlay js-fullheight"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                            <div className="col-md-9 pb-5 text-center">
                                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                                    className="fa fa-chevron-right"></i></a></span> <span>About us <i className="fa fa-chevron-right"></i></span>
                                </p>
                                <h1 className="mb-0 bread">About Us</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <ServiceComponent></ServiceComponent>
                <FooterComponent></FooterComponent>
            </div>
        </div>
    )
}
export default AboutPage;