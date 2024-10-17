import React, { useState, useEffect } from 'react';

import axios from 'axios';
import HeaderComponent from '../Components/HeaderComponents';
import FooterComponent from '../Components/FooterComponent';

const Admin = () => {

    useEffect(() => {
        loadDestination();
    }, [])

    const [isLoading, updateIsLoading] = useState(true)

    const [destinationForm, updateDestinationForm] = useState({
        destinationName: '',
        location: '',
        destinationImage: '',
        destinationCount: ''
    })
    const [destinationFormError, updateDestinationFormError] = useState({
        destinationName: false,
        location: false,
        destinationImage: false,
        destinationCount: false
    })

    const [tableValue, updateTableValue] = useState([]);

    const valueFromInput = (event) => {
        updateDestinationForm({ ...destinationForm, [event.target.id]: event.target.value });

    }
    const uploadButton = () => {
        console.log(destinationForm);
        updateIsLoading(false);

        updateDestinationFormError({
            ...destinationFormError,
            destination: destinationForm.destinationName === "" ? true : false,
            location: destinationForm.location === "" ? true : false,
            destinationImage: destinationForm.destinationImage === "" ? true : false,
            destinationCount: destinationForm.destinationCount === "" ? true : false

        })

        const url = "https://travelix-backend-dhex.onrender.com/api/create/destination";

        axios.post(url, destinationForm)
            .then((response) => {
                alert(response.data);
                updateIsLoading(true);
                loadDestination();
            })
            .catch((error) => {
                console.error(error);
                updateIsLoading(true);
            })

    }
    const uploadImage = (event) => {
        const image_reader = new FileReader();
        const image_file = event.target.files[0];
        image_reader.readAsDataURL(image_file);

        image_reader.onload = () => {
            updateDestinationForm({ ...destinationForm, "destinationImage": image_reader.result });
        }
    }


    const loadDestination = () => {
        const url = "https://travelix-backend-dhex.onrender.com/api/list/destination";
        axios.get(url)
            .then((response) => {
                updateTableValue(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }


    const deleteList = (id) => {
        const url = "https://travelix-backend-dhex.onrender.com/api/delete/destination/" + id;
        axios.delete(url)
            .then((response) => {
                alert(response.data);
                loadDestination();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const List = tableValue.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.destinationName}</td>
                <td>{value.location}</td>
                <td>
                    <img src={value.destinationImage} width="200"></img>
                </td>
                <td>{value.destinationCount}</td>
                <td><button className="btn btn-danger" onClick={() => deleteList(value.id)}>DELETE</button></td>
            </tr>
        )
    })

    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <div className="admin-input">
                <div className='container-fluid'><br></br>
                    <h1> This is Admin Page </h1><br></br>
                    <div>
                        <label className='label-alignment'> Enter Destination Name</label>
                        <input id="destinationName" className='input-alignment-1' type='text' placeholder='Enter destination Name' onChange={valueFromInput}></input>
                        {destinationFormError.destinationName && <span className='error-message'> Missing Destination Name</span>}
                    </div>
                    <div>
                        <label className='label-alignment'> Enter Location / Area</label>
                        <input id="location"  className='input-alignment-2' type='text' placeholder='Enter Location Area' onChange={valueFromInput}></input>
                        {destinationFormError.location && <span className='error-message'> Missing Location / Area</span>}
                    </div>
                    <div>
                        <label className='label-alignment'> Upload Image</label>
                        <input id="destinationImage" className='input-alignment-3' type='file' accept='.jpg, .jpeg, .png' onChange={uploadImage}></input>
                        {destinationFormError.destinationImage && <span className='error-message'> Missing Destination Name</span>}
                    </div>
                    <div>
                        <label className='label-alignment'> Enter Destination Count</label>
                        <input id="destinationCount" className='input-alignment-4' type='text' placeholder='Enter Destination Count' onChange={valueFromInput}></input>
                        {destinationFormError.destinationCount && <span className='error-message'> Missing Destination Name</span>}
                    </div><br></br>
                    <button className="btn btn-dark" onClick={() => uploadButton()}>{isLoading ? "Upload Destination" : "Uploading..."}</button>
                </div><br></br>
            </div>
            <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th> Destination Name </th>
                            <th> Location / Area </th>
                            <th> Destination Image </th>
                            <th> Destination Count </th>
                        </tr>
                    </thead>
                    <tbody>
                        {List}
                    </tbody>
                </table>
            </div><br></br>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default Admin;