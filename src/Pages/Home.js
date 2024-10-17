import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponents"
import ServiceComponent from "../Components/ServiceComponent";
import FooterComponent from "../Components/FooterComponent";
import HotelSearch from "../Components/HotelSearch";
import DestinationSearch from "../Components/DestinationSearch";
const HomePage = () => {

    const[hotelDestination, updateHotelDestination] = useState(true);

    const searchHotelDestination = (filter) => {
        updateHotelDestination(filter);
    }

    return (
        <div>
            <div>
                <HeaderComponent></HeaderComponent>
                <div className="hero-wrap js-fullheight header-banner" style={{ backgroundImage: `url(${require("../images/Mahabalipuram.jpg")})` }}>
                    <div className="overlay header-banner"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-center">
                            <div className="col-md-7">
                                <span className="subheading">Welcome to Travelix</span>
                                <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
                                <p className="caps">Travel to the any corner of the Kanchipuram, without going around in circles</p>
                            </div>

                        </div>
                    </div>
                </div>
                <section className="ftco-section ftco-no-pb ftco-no-pt">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ftco-search d-flex justify-content-center">
                                    <div className="row">
                                        <div className="col-md-12 nav-link-wrap">
                                            <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist"
                                                aria-orientation="vertical">

                                                <a className={ hotelDestination ? "nav-link" : "nav-link active" } id="v-pills-2-tab" data-toggle="pill"
                                                    role="tab" aria-controls="v-pills-2" aria-selected="false" onClick={() => searchHotelDestination(true)}>Hotel</a>

                                                <a className={hotelDestination ? "nav-link active mr-md-1" : "nav-link mr-md-1"} id="v-pills-1-tab" data-toggle="pill"
                                                     role="tab" aria-controls="v-pills-1" aria-selected="true" onClick={() => searchHotelDestination(false)}>Search Tour</a>

                                            </div>
                                        </div>
                                        <div className="col-md-12 tab-wrap">

                                            <div className="tab-content" id="v-pills-tabContent">
                                                { 
                                                hotelDestination ?
                                                <div className="tab-pane show active" id="v-pills-1" role="tabpanel"
                                                    aria-labelledby="v-pills-nextgen-tab">
                                                        <HotelSearch></HotelSearch>
                                                </div>
                                                :   
                                                <div className="tab-pane show active" id="v-pills-2" role="tabpanel"
                                                    aria-labelledby="v-pills-performance-tab">
                                                    <DestinationSearch></DestinationSearch>
                                                </div>
                                                }               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ServiceComponent></ServiceComponent>
                <section className="ftco-sections">
                    <div className="container">
                        <div className="row justify-content-center pb-4">
                            <div className="col-md-12 heading-section text-center">
                                <span className="subheading">Destination</span>
                                <h2 className="mb-4">Tour Destination</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/Kailasanadhar.jpg")})` }}>
                                            <div className="text">
                                                <h3>Temples</h3>
                                                <span>20+ Temples</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/hotel-resto-1.jpg")})` }}>
                                            <div className="text">
                                                <h3>Hotels</h3>
                                                <span>20+ Hotels</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/upasana.jpg")})` }}>
                                            <div className="text">
                                                <h3>Restaurants</h3>
                                                <span>25+ Restaurants</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="ftco-sections">
                    <div className="container">
                        <div className="row justify-content-center pb-4">
                            <div className="col-md-12 heading-section text-center">
                                <span className="subheading">Other References</span>
                                <h2 className="mb-4">Kanchipuram Tour Guide References</h2>
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-md-4 d-flex">
                                <div className="blog-entry justify-content-end">
                                    <a href="blog-single.html" className="block-20"
                                        style={{ backgroundImage: `url(${require("../images/Varadar.jpg")})` }}>
                                    </a>
                                    <div className="text">
                                        <div className="d-flex align-items-center mb-4 topp">
                                            <div className="one">
                                                <span className="day">1</span>
                                            </div>
                                            <div className="two">
                                                <span className="yr">2024</span>
                                                <span className="mos">Temples</span>
                                            </div>
                                        </div>
                                        <h3 className="heading"><a href="https://kancheepuram.nic.in/tourism/places-of-interest/">Most Popular Temple in Kanchipuram</a></h3>
                                        {/* <!-- <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> --> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="blog-entry justify-content-end">
                                    <a href="blog-single.html" className="block-20"
                                        style={{ backgroundImage: `url(${require("../images/room.jpg")})` }}>
                                    </a>
                                    <div className="text">
                                        <div className="d-flex align-items-center mb-4 topp">
                                            <div className="one">
                                                <span className="day">2</span>
                                            </div>
                                            <div className="two">
                                                <span className="yr">2024</span>
                                                <span className="mos">Rooms</span>
                                            </div>
                                        </div>
                                        <h3 className="heading"><a href="https://www.makemytrip.com/hotels/kanchipuram-hotels.html">Most Popular & Comfortable Rooms in Kanchipuram</a></h3>
                                        {/* <!-- <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> --> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex">
                                <div className="blog-entry">
                                    <a href="blog-single.html" className="block-20"
                                        style={{ backgroundImage: `url(${require("../images/food.jpg")})` }}>
                                    </a>
                                    <div className="text">
                                        <div className="d-flex align-items-center mb-4 topp">
                                            <div className="one">
                                                <span className="day">3</span>
                                            </div>
                                            <div className="two">
                                                <span className="yr">2024</span>
                                                <span className="mos">Food / Restaurant</span>
                                            </div>
                                        </div>
                                        <h3 className="heading"><a href="https://www.tripadvisor.in/Restaurants-g503705-Kanchipuram_Kanchipuram_District_Tamil_Nadu.html">Most Popular Restaurants in Kanchipuram</a></h3>
                                        {/* <!-- <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-intro ftco-section ftco-no-pt">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 text-center">
                                <div className="img" style={{ backgroundImage: `url(${require("../images/bg_2.jpg")})` }}>
                                    <div className="overlay"></div>
                                    <h2>We Are Travelix A Travel Agency</h2>
                                    <p>We can manage your dream building A small river named Duden flows by their place</p>
                                    <p className="mb-0"><a href="#" className="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
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
export default HomePage;