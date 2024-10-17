import React from "react";

const ServiceComponent = () => {
    return (
        <div>
            <section className="ftco-section services-section">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-6 order-md-last heading-section pl-md-5 d-flex align-items-center">
                            <div className="w-100">
                                <span className="subheading">Welcome to Travelix</span>
                                <h2 className="mb-4">It's time to start your adventure</h2>
                                <p> Kanchipuram is an exceptionally gorgeous city in Tamil Nadu. This impressive city is known as an abode of ancient temples. Famous as Kanchi in South India, this city has recently become one of the most visited destinations by families and pilgrims. Travelers who are in search of quaint cities where they can take a replenishing break can make Kanchipuram as their next holiday destination. There are no dearth of places to visit in Kanchipuram and this city also houses remarkable hotels where you can stay. Make your vacation all about early mornings where you attend the grand prayer ceremony at the temples and later explore this city and interact with the locals. If a relaxing vacation is on your mind then Kanchi is the place to be at!</p>
                                <p><a href="https://www.google.com/maps/place/Vedachalam+Nagar+Extension,+Kanchipuram,+Tamil+Nadu+631502/@12.818455,79.674059,14z/data=!3m1!4b1!4m6!3m5!1s0x3a52c2f7e0c7f12d:0xde5f8682b1cb2a4d!8m2!3d12.818456!4d79.6946586!16zL20vMDc2cDBy?entry=ttu" className="btn btn-primary py-3 px-4">Search Destination</a></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div className="services services-1 color-1 d-block img"
                                        style={{ backgroundImage: `url(${require("../images/services-1.jpg")})` }}>
                                        <div className="icon d-flex align-items-center justify-content-center"><span
                                            className="flaticon-paragliding"></span></div>
                                        <div className="media-body">
                                            <h3 className="heading mb-3">Activities</h3>
                                            <p>Go on a temple tour, Enjoy boating on Muttukkadu Lake, Explore the history at Dutch Fort, Spend some relaxing time at Sadras Beach, Enjoy birdwatching at Vedanthangal Bird Sanctuary</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div className="services services-1 color-2 d-block img"
                                        style={{ backgroundImage: `url(${require("../images/services-2.jpg")})` }}>
                                        <div className="icon d-flex align-items-center justify-content-center"><span
                                            className="flaticon-route"></span>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="heading mb-3">Travel Information</h3>
                                            <p>All the necessary travel informations are availale within this websites
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div className="services services-1 color-3 d-block img"
                                        style= {{ backgroundImage: `url(${require("../images/services-3.jpg")})` }}>
                                        <div className="icon d-flex align-items-center justify-content-center"><span
                                            className="flaticon-tour-guide"></span></div>
                                        <div className="media-body">
                                            <h3 className="heading mb-3">Digital Guidance</h3>
                                            <p>We Provide Digital Guidance with the of all the mentioned places
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                    <div className="services services-1 color-4 d-block img"
                                        style={{ backgroundImage: `url(${require("../images/services-4.jpg")})` }}>
                                        <div className="icon d-flex align-items-center justify-content-center"><span
                                            className="flaticon-map"></span>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="heading mb-3">Location Manager</h3>
                                            <p>We Provide the Location of Kanchipuram City which is attached in the Home page.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ServiceComponent;