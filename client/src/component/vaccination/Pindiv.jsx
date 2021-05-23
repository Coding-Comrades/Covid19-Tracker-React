import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchbypinapi from '../../api/searchbypinapi';
import Displaydiv from './displaydiv';

const Pindiv = () => {

    const [input, setInput] = useState("");
    const [dataavail, setDataavail] = useState(true);
    const [centers, setCenters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const [error, setError] = useState(false);



    // useEffect(() => {

    //     setCenters([]);

    //     axios.post("/pinsearch", {pincode: input})
    //             .then((response) => {


    //                 setCenters(response.data.centers);

    //                 console.log(centers);

                    
    //                 setIsLoading(false);
                                    
    //                 // console.log(response.data.centers);
    //             });

       
    // }, [calltime])



    const handleChange = (event) => {
        setInput(event.target.value);
    }

    function handleClick(){

        setCenters([]);

        axios.post("/pinsearch", {pincode: input})
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
    

    return (
        <div id="pincode" className="pinsearch ">
            <div class="example d-flex justify-content-center">
                    <input type="text" autoComplete="off" onChange={handleChange} placeholder="Search.." name="search" />
                    <button type="button" onClick={handleClick} ><i class="fa fa-search"></i></button>
            </div>

            
            

                {(!isLoading) ? 
                    <Displaydiv 
                        centers={centers}
                    /> :
                    <h1></h1>
                }


            
        </div>
    )
}

export default Pindiv
