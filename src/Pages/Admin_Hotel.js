import axios from "axios";
import React, { useState, useEffect } from "react";
import FooterComponent from "../Components/FooterComponent";
import HeaderComponent from "../Components/HeaderComponents";

const AdminHotel = () => {

    useEffect(() => {
        displayHotelDetails();
    }, []);

    const [hotelList, loadHotelList] = useState([]);

    const [hotelForm, updateHotelForm] = useState({
        Name: "",
        Destination: "",
        Images: "",
        Price: "",
        Location: "",
        Available: false
    });

    const valueFromInput = (event) => {
        if (event.target.id === "Available") {
            // console.log(event.target.checked);
            updateHotelForm({ ...hotelForm, [event.target.id]: event.target.checked })
        }
        else {

            // console.log(event.target.value);
            updateHotelForm({ ...hotelForm, [event.target.id]: event.target.value })
        }
    }

    const uploadImage = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.readAsDataURL(file);

        reader.onload = () => {
            // console.log(reader.result);
            updateHotelForm({ ...hotelForm, "Images": reader.result });
        }
    }


    const updateHotelDetails = () => {

        var url = "https://travelix-backend-dhex.onrender.com/api/create/hotel"
        axios.post(url, hotelForm)
            .then((response) => {
                alert(response.data);
                displayHotelDetails();
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const displayHotelDetails = () => {
        var url = "https://travelix-backend-dhex.onrender.com/api/load/hotels"
        axios.get(url)
            .then((response) => {
                loadHotelList(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const deleteInfo = (id) => {
        const url = "https://travelix-backend-dhex.onrender.com/api/delete/hotels/" + id;
        axios.delete(url)
            .then((request, response) => {
                console.log(response);
                alert("Hotel Information is deleted");
                displayHotelDetails();
            })
            .catch((error) => {
                console.error(error);
            })

    }

    const hotelMapList = hotelList.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.Name}</td>
                <td>{value.Destination}</td>
                <td>
                    <img src={value.Images} width={100} />
                </td>
                <td>{value.Price}</td>
                <td>{value.Location}</td>
                <td>{value.Available == 1 ? 'YES' : 'NO'}</td>
                <td><button onClick={() => deleteInfo(value.id)} className="btn btn-outline-light">DELETE</button></td>
            </tr>
        )
    })


    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <div className="admin-input">
                <div className='container-fluid'><br></br>
                    <h2>Upload hotel details</h2><br></br>
                    <div>
                        <label className='label-alignment'>Enter Hotel Name:</label>
                        <input type="text" className='input-alignment-hotel-1' id="Name" placeholder="Hotel Name" onChange={valueFromInput} />
                    </div>
                    <div>
                        <label className='label-alignment'>Enter Destination Name:</label>
                        <input type="text" className='input-alignment-hotel-2' id="Destination" placeholder="Destination Name" onChange={valueFromInput} />
                    </div>
                    <div>
                        <label className='label-alignment'>Enter Hotel Image:</label>
                        <input type="file" className='input-alignment-hotel-3' id="Images" accept=".jpg, .jpeg, .png" onChange={uploadImage} />
                    </div>
                    <div>
                        <label className='label-alignment'>Enter Price:</label>
                        <input type="text" className='input-alignment-hotel-4' id="Price" placeholder="Enter Price" onChange={valueFromInput} />
                    </div>
                    <div>
                        <label className='label-alignment'>Enter State Location:</label>
                        <input type="text" className='input-alignment-hotel-5' id="Location" placeholder="Enter State" onChange={valueFromInput} />
                    </div>
                    <div>
                        <label className='label-alignment'>Hotel Availability</label>
                        <input type="checkbox" className='input-alignment-hotel-6' id="Available" onChange={valueFromInput} /> (Checked - Aavailable / UnChecked - UnAvailable)
                    </div><br></br>
                    <button className="btn btn-dark" onClick={() => updateHotelDetails()}> Update Details </button>
                </div><br></br>
            </div>
            <table className="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Destination</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Loacation</th>
                        <th>Avaliblity</th>
                        <th>Delete Info</th>
                    </tr>
                </thead>
                <tbody>
                    {hotelMapList}
                </tbody>
            </table><br></br>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default AdminHotel;
