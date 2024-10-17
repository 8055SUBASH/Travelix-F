import axios from 'axios';
import React, { useState, useContext } from 'react';
import DataSharing from '../context-api';


const HotelSearch = () => {
    const context = useContext(DataSharing);
    const [loader, updateLoader] = useState(true);

    const [hotelFilter, updateHotelFilter] = useState({
        Destination: "",
        Price: ""
    });

    const getForm = (event) => {
        updateHotelFilter({ ...hotelFilter, [event.target.id]: event.target.value })
    }

    const searchButton = () => {
        updateLoader(false);
        const url = `https://travelix-backend-dhex.onrender.com/api/read/hotel?Destination=${hotelFilter.Destination}`;

        axios.get(url)
            .then((response) => {
                updateLoader(true);
                context.dataExchange(response.data)
            })
            .catch((error) => {
                updateLoader(true);
                console.error(error);
            })
    }
    return (
        <div>
            <div className="search-property-1">
                <div className="row no-gutters">
                    <div className="col-md d-flex">
                        <div className="form-group p-4 border-0">
                            <label for="#">Destination</label>
                            <div className="form-field">
                                <div className="icon"><span className="fa fa-search"></span></div>
                                <input type="text" id="Destination" className="form-control"
                                    placeholder="Search place" onChange={getForm}></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex">
                        <div className="form-group p-4">
                            <label for="#">Price Limit</label>
                            <div className="form-field">
                                <div className="select-wrap">
                                    <div className="icon"><span
                                        className="fa fa-chevron-down"></span></div>
                                    <select name="" id="Price" className="form-control" onChange={getForm}>
                                        <option>Rs. 399</option>
                                        <option>Rs. 599</option>
                                        <option>Rs. 999</option>
                                        <option>Rs. 1500</option>
                                        <option>Rs. 2000</option>
                                        <option>Rs. 5000</option>
                                        <option>Rs. 10000</option>
                                        
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex">
                        <div className="form-group d-flex w-100 border-0">
                            <div className="form-field w-100 align-items-center d-flex">
                                <button className="align-self-stretch form-control btn btn-primary" onClick={() => searchButton()}>
                                    {
                                        loader ?
                                            "Search"
                                            :
                                            <span>
                                                Loading
                                                <img src={require("../images/Loader.gif")} width={25}></img>
                                            </span>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelSearch;