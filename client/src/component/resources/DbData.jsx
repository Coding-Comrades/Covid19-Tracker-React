import React, { useEffect, useState } from 'react';

import { NavLink } from "react-router-dom";
import axios from 'axios';
import Datacard from './Datacard';


const DbData = () => {

    const [listData, setListData] = useState([]);

    
    useEffect(() => {
        function fetchdata() {
            axios.get('/medicines')
                 .then((response) => {
                        
                    // console.log(response.data.newListItems);

                    let newList = response.data.newListItems;

                    for(const listItem of newList)
                    {
                        let schema = {

                            address: listItem.address,
                            contact: listItem.contact,
                            district: listItem.district,
                            medicine: listItem.medicine,
                            name: listItem.name,
                            id: listItem._id
                        }

                        setListData(prevState => [...prevState, schema]);
                    }
                           
                 });
        }
        fetchdata();
    }, [])

    return (
        <div>
                <div class="container mb-3 mt-3">
                <div class="d-flex justify-content-center inputdiv">
                    <input type="text" name="" id="myInput" placeholder="Search Your Medicine/Oxygen Lead" autoComplete="off" onkeyup="search()" />
                    </div>
                    <button type="button" class="btn btn-dark addLead">
                    <NavLink className="nav-link" to="/addlead">Add Lead</NavLink>
                    </button>

                    <div style={{padding : "%7 5%"}}  className="row">
                        {listData.map((data, index) => {

                            return(

                                <Datacard
                                    key={index}
                                    serialno = {index + 1}
                                    name = {data.name}
                                    district = {data.district}
                                    address = {data.address}
                                    contact = {data.contact}
                                    medicine = {data.medicine}
                                />
                            );

                        })}
                        </div>
                        
                </div>   

        </div>
    )
}

export default DbData;
