import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbarvw">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="#">
                <img src="coronavirus.png" Style="padding-right : 9px; height : 3rem; -webkit-filter: drop-shadow(9px 5px 5px 
#ffffff );
  filter: drop-shadow(5px 5px 13px
#ffffff); " />Covid19-Tracker</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/medicines">Medicines</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/vaccination">Vaccination</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                    
                </div>
            </nav>

        </div>
    )
}

export default Navbar;
