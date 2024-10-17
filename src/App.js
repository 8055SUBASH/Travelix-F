import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import DestinationPage from "./Pages/Destination";
import HotelPage from "./Pages/Hotel";
import ContactPage from "./Pages/Contact";
import Admin from "./Pages/Admin";
import AdminHotel from "./Pages/Admin_Hotel";
import "./css/flaticon.css";
import "./css/style.css";
import "./css/custom.css"
import "./css/bootstrap.css"
import DataSharingContext from "./context-api";
const App = () => {
  
  const[searchValue, updateSearchValue] = useState([]);

  const dataExchange = (data) => {
    updateSearchValue(data);
  }

  return(
    <div>
      <DataSharingContext.Provider value={{ dataExchange, searchValue}}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="About" element={<AboutPage></AboutPage>}></Route>
            <Route path="Destination" element={<DestinationPage></DestinationPage>}></Route>
            <Route path="Hotel" element={<HotelPage></HotelPage>}></Route>
            <Route path="Contact" element={<ContactPage></ContactPage>}></Route>
            <Route path="admin" element={<Admin></Admin>}></Route> 
            <Route path="adminhotel" element={<AdminHotel></AdminHotel>}></Route> 
          </Routes>
        </BrowserRouter>
      </DataSharingContext.Provider>
    </div>
  )
};
export default App;