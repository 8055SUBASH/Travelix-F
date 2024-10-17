import React, {useState} from "react";
import { NavLink } from "react-router-dom";
const HeaderComponent = () => {

    const [menu, updateMenu] = useState(false);
    const menuButton = () => {
        updateMenu(!menu)
    }

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand"><NavLink to="/" className="navbar-brand">Travelix<span>Travel Guide</span></NavLink></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => menuButton()}>
                            <span className="oi oi-menu"></span> Menu
                        </button>

                        <div className={ menu ? "navbar-collapse" : "collapse navbar-collapse"} id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <NavLink to="/" className="nav-item"><a href="index.html" className="nav-link">Home</a></NavLink>
                                <NavLink to="/About" className="nav-item"><a href="about.html" className="nav-link">About</a></NavLink>
                                <NavLink to="/Destination" className="nav-item"><a href="destination.html" className="nav-link">Destination</a></NavLink>
                                <NavLink to="/Hotel" className="nav-item"><a href="hotel.html" className="nav-link">Hotel</a></NavLink>
                                <NavLink to="/Contact" className="nav-item"><a href="contact.html" className="nav-link">Contact</a></NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}
export default HeaderComponent;