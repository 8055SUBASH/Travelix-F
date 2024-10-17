import React, {useContext} from "react";
import HeaderComponents from "../Components/HeaderComponents"
import FooterComponent from "../Components/FooterComponent";
import DestinationPlaceComponent from "../Components/DestinationPlaceComponent";
import DestinationSearch from "../Components/DestinationSearch";
import DataSharingContext from "../context-api";
const DestinationPage = () => {
    const context = useContext(DataSharingContext);

    const searchUpdate = context.searchValue.map((value, index) => {
        return(
            <DestinationPlaceComponent key = {index} info={value}></DestinationPlaceComponent>
        )   
     })
    return (
        <div>
            <div>
                <HeaderComponents></HeaderComponents>
                <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/destination.jpg")})` }}>
                    <div className="overlay js-fullheight"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                            <div className="col-md-9 pb-5 text-center">
                                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                                    className="fa fa-chevron-right"></i></a></span> <span>Tour List <i className="fa fa-chevron-right"></i></span>
                                </p>
                                <h1 className="mb-0 bread">Tours List</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section ftco-no-pb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="search-wrap-1">
                                    <DestinationSearch></DestinationSearch>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                           {searchUpdate}
                           </div>
                    </div>
                </section>

                {/* <section className="ftco-section">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-1.jpg")})` }}>
                                            <div className="text">
                                                <h3>Philippines</h3>
                                                <span>8 Tours</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-2.jpg")})` }}>
                                            <div className="text">
                                                <h3>Canada</h3>
                                                <span>2 Tours</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-3.jpg")})` }}>
                                            <div className="text">
                                                <h3>Thailand</h3>
                                                <span>5 Tours</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-4.jpg")})` }}>
                                            <div className="text">
                                                <h3>Autralia</h3>
                                                <span>5 Tours</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-5.jpg")})` }}>
                                            <div className="text">
                                                <h3>Greece</h3>
                                                <span>7 Tours</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-1.jpg")})` }}>
                                            <div className="text">
                                                <h3>Philippines</h3>
                                                <span>8 Tours</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-2.jpg")})` }}>
                                            <div className="text">
                                                <h3>Canada</h3>
                                                <span>2 Tours</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-3.jpg")})` }}>
                                            <div className="text">
                                                <h3>Thailand</h3>
                                                <span>5 Tours</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 m-btm-40">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-4.jpg")})` }}>
                                            <div className="text">
                                                <h3>Autralia</h3>
                                                <span>5 Tours</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <div className="block-27">
                                    <ul>
                                        <li><a href="#">&lt;</a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <FooterComponent></FooterComponent>

            </div>

        </div>
    )
}
export default DestinationPage;