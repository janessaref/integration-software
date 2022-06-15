import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
    return(
        <>
        <NavLink to="/" className="navbar-brand pl-3 px-1">Collaborative Solutions</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-md-auto">
                        <li className="nav-item">
                            <NavLink to="/forecast" className="nav-link links">Forecast</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to="/actual" className="nav-link links">Actual</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/test" className="nav-link links">Test</NavLink>
                        </li>

                    </ul>
                    <div className="px-3"></div>
                </div>
        </>
    )
};

export default Navbar;