import React from 'react';
import { NavLink } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
    return(
            <nav className="main-header">
                <NavLink to="/oneData" exact ><b>to one data</b></NavLink>
                <NavLink to="/allData" exact ><b>to all data</b></NavLink>
                <NavLink to="/postInput" exact ><b>to post input</b></NavLink>
            </nav>
    );
};

export default Navbar;