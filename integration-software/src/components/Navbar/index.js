import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
    return(
        <nav className="navbar">
            <NavLink 
                to ="/" 
                style={({isActive}) =>{
                    return{color: isActive ? "red" : "blue"};
                }}
            >
                Home
            </NavLink>
            <NavLink 
                to ="/forecast"
                style={({isActive}) =>{
                    return{color: isActive ? "red" : "blue"};
                }}
            >
                Forecast
            </NavLink>
            <NavLink 
                to ="/actual"
                style={({isActive}) =>{
                    return{color: isActive ? "red" : "blue"};
                }}
            >
                Actual
            </NavLink>
        </nav>
    )
};

export default Navbar;