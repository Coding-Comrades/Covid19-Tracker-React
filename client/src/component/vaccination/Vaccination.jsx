import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Pindiv from './Pindiv';
import Distdiv from './Distdiv';

const Vaccination = () => {

    const [toggle, setToggle] = useState(true);

    function togglepinClick()
    {
        setToggle(true);
        
        document.getElementById("pinButton").classList.add("toggleButton");
        document.getElementById("districtButton").classList.remove("toggleButton");
    }
    function toggledistClick()
    {
        setToggle(false);
        document.getElementById("pinButton").classList.remove("toggleButton");
        document.getElementById("districtButton").classList.add("toggleButton");
    }


    return (
        <div className="vaccination-container">
            <div>
                <h1 className="d-flex justify-content-center add" Style="font-style: bold;
    font-weight: 700;">Vaccination</h1>
                <button type="button" class="btn btn-dark addLead vad">
                    <NavLink className="nav-link" to="/vform">Notify Me</NavLink>
                </button>
            </div>

            

            <div className="container-fluid d-flex justify-content-center searchbtn">
                    <div className="buttonContainer">
                        <div type="button" onClick={togglepinClick} className="pinButtoncss toggleButton " id="pinButton">
                            Search By Pin code  
                        </div>
                        <div type="button" onClick={toggledistClick} className="districtButtoncss" id="districtButton">
                            Search By District
                        </div>                    
                    </div>
                <div className="toggle d-flex justify-content-center">
                    </div>
            </div>

            {toggle ? <Pindiv /> : <Distdiv />}

        </div>
    )
}

export default Vaccination;
