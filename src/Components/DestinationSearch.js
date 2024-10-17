import React, { useState, useContext } from 'react';
import axios from 'axios';
import DataSharingContext from '../context-api';
import { useNavigate } from 'react-router-dom';

const DestinationSearch = () => {

    const navigate = useNavigate();
    const context = useContext(DataSharingContext);

    const [loader, updateLoader] = useState(true);

    const [destinationContent, updateDestinationContent] = useState({
        destinationName: "",
        location: ""
    })

    const handleInput = (event) => {
        updateDestinationContent({ ...destinationContent, [event.target.id]: event.target.value })
    }
    const searchResult = (() => {
        updateLoader(false);
        const url = `https://travelix-backend-dhex.onrender.com/api/read/destination?destinationName=${destinationContent.destinationName}&location=${destinationContent.location}`
        axios.get(url)
            .then((response) => {
                context.dataExchange(response.data);
                navigate("/Destination");
                updateLoader(false);
            })
            .catch((error) => {
                alert(error.response.data);
                updateLoader(false);
            })

    })

    return (
        <div>
            <div className="search-property-1">
                <div className="row no-gutters">
                    <div className="col-lg d-flex">
                        <div className="form-group p-4 border-0">
                            <label for="#">Destination</label>
                            <div className="form-field">
                                <div className="icon"><span className="fa fa-search"></span></div>
                                <input id="destinationName" type="text" className="form-control" placeholder="Search place" onChange={handleInput}></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg d-flex">
                        <div className="form-group p-4 border-0">
                            <label for="#">Location/Area</label>
                            <div className="form-field">
                                <div className="icon"><span className="fa fa-location-arrow"></span></div>
                                <input id="location" type="text" className="form-control" placeholder="Search place" onChange={handleInput}></input>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg d-flex">
                        <div className="form-group d-flex w-100 border-0">
                            <div className="form-field w-100 align-items-center d-flex">
                                <button onClick={() => searchResult()} className="align-self-stretch form-control btn btn-primary">
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

export default DestinationSearch;