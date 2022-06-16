import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
    return(
        <nav className="navbar">
            <NavLink 
                to ="/" 
                style={({isActive}) =>{
                    return{color: isActive ? "red" : "grey"};
                }}
            >
                Home
            </NavLink>
            <NavLink to ="/forecast">Forecast</NavLink>
            <NavLink to ="/actual">Actual</NavLink>
        </nav>
    )
};

export default Navbar;