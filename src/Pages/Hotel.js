import React, { useContext } from "react";
import HeaderComponent from "../Components/HeaderComponents"
import FooterComponent from "../Components/FooterComponent";
import HotelPlaceComponents from "../Components/HotelPlaceComponents";
import DataSharing from "../context-api";
import HotelSearch from "../Components/HotelSearch";
const HotelPage = () => {

    const context = useContext(DataSharing);
    const hotelResultList = context.searchValue.map((value, index) => {
        return (
            <HotelPlaceComponents key={index} info={value}></HotelPlaceComponents>
        )
    })



    return (
        <div>
            <div>
                <HeaderComponent></HeaderComponent>
                <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/hotellobby.jpg")})` }}>
                    <div className="overlay js-fullheight"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                            <div className="col-md-9 pb-5 text-center">
                                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                                    className="fa fa-chevron-right"></i></a></span> <span>Hotel <i className="fa fa-chevron-right"></i></span></p>
                                <h1 className="mb-0 bread">Hotel</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section ftco-no-pb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="search-wrap-1">
                                    <HotelSearch></HotelSearch>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            {hotelResultList}
                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <div className="block-27">
                                    <ul>
                                        <li><a>&lt;</a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a>2</a></li>
                                        <li><a >3</a></li>
                                        <li><a >4</a></li>
                                        <li><a >5</a></li>
                                        <li><a >&gt;</a></li>
                                    </ul>
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
export default HotelPage;