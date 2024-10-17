import React from 'react';

const HotelPlaceComponents = (props) => {
    return (

        <div className="col-md-4">
            <div className="project-wrap hotel">
                <a href="#" className="img" style={{ backgroundImage: `url(${props.info.Images})` }}>
                    <span className="price">{props.info.Price}</span>
                </a>
                <div className="text p-4">
                    <p className="star mb-2">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </p>
                    <span className="days">8 Days Tour</span>
                    <h3><a href="#">{props.info.Name}</a></h3>
                    <p className="location"><span className="fa fa-map-marker"></span> {props.info.Destination}</p>
                    <ul>
                        <li><span className="flaticon-shower"></span>2</li>
                        <li><span className="flaticon-king-size"></span>3</li>
                        <li><span className="flaticon-mountains"></span>{props.info.Location}</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default HotelPlaceComponents;