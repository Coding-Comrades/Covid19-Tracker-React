import React, { useEffect, useState } from 'react';
import {statelist, distlist} from '../../api/data';
import axios from 'axios';
import Displaydiv from './displaydiv';

const Distdiv = () => {

    const [distlists, setDistlists] = useState([]);
    const [input, setInput] = useState("");
    const [Address, setAddress] = useState("");

    const [dataavail, setDataavail] = useState(true);
    const [centers, setCenters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const [error, setError] = useState(false);



    function handleClick()
    {
        axios.post("/distsearch", {distcode: input})
            .then((response) => {

                console.log(response);

                    setCenters(response.data.centers);

                    console.log(centers);

                    if(! response.centers)
                    {
                        setDataavail(false);
                    }
                    else{
                        setDataavail(true);
                    }

                    if(response.data.name === "Error")
                    {
                        setError(true);
                    }
                    else
                    {
                        setError(false);
                    }



                    
                    
                    setIsLoading(false);
                
            // console.log(response.data.centers);
            });
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

            {isLoading && <p>Wait I'm Loading comments for you</p>}
            

                {(!isLoading) ? 
                    <Displaydiv 
                        centers={centers}
                    /> :
                    <h1>Give correct data</h1>
                }
            
        </div>
    )
}

export default Distdiv;
