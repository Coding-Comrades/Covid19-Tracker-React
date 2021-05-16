import React, { useEffect, useState } from 'react';
import {statelist, distlist} from '../../api/data';
import axios from 'axios';
import Displaydiv from './displaydiv';

const Distdiv = () => {

    const [distlists, setDistlists] = useState([]);
    const [input, setInput] = useState("");
    
    const [centersinfo, setCentersinfo] = useState(null);
    const [Address, setAddress] = useState("");



    function handleClick()
    {
        axios.post("/distsearch", {distcode: input})
            .then((response) => {

                let center = response.data.centers;
                
                let address = center[0].block_name + ',' + center[0].address + ',' + center[0].district_name + ',' + center[0].state_name ;
                setAddress(address);
                console.log(Address);
                
            // console.log(response.data.centers);
            });
            console.log(Address);
    }





    const selectdist = (event) => {
        let i = event.target.value;
        setDistlists([]);
        for(var j = 0 ; j < distlist[i].length ; j++)
        {
            let a = distlist[i][j];
            setDistlists(prevState => [...prevState, a]);
        }

        if(i == "-1")
        {
            document.getElementById("distlistid").setAttribute("disabled","true");
        }
        else
        {
            
            document.getElementById("distlistid").removeAttribute("disabled");
        }

    }

    function handleChange(event)
    {
        setInput(event.target.value);
    }


    return (
        <div id="district">

            <div className="distsearch">
                <select className="form-select statelists drop-down1" aria-label="Default select example" id="statelistid" onChange={selectdist} name="statelists">
                    <option value="-1" selected>Select State</option>
                    {
                        statelist.map((stateOption, index) =>{
                            return (
                                
                            <option key={stateOption.state_id} value={index}>{stateOption.state_name}</option>
                            );
                        })
                    }
                </select>
        
             
                    <select className="form-select drop-down2" aria-label="Default select example" onChange={handleChange} id="distlistid" disabled>
                        <option selected>Select District</option>
                        {
                            distlists.map((distOption, index) =>{
                                return (
                                    
                                <option key={distOption.district_id} value={distOption.district_id}>{distOption.district_name}</option>
                                );
                            })
                        }
                    </select>
                <button type="button" className="dist-btn" onClick={handleClick} id="send_profile"><i class="fa fa-search"></i>Search</button>

            </div>

            <h1>{Address}</h1>
            
        </div>
    )
}

export default Distdiv;
