import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from './select';
import Tablerow from './tablerow';

const StatecaseContainer = () => {

    const [rowData, setRowdata] = useState([]); 


    // function addData(newData)
    // {
    //     setRowdata(prevState => [...prevState, newData]);
    // }

    React.useEffect(function effectFunction() {
        function fetchapi() {
            axios.get('https://api.covid19india.org/data.json')
                 .then((response) => {

                    let statewiseDatas = response.data.statewise;

                    for(var i=1 ; i<38 ; i++)
                    {
                        let schema = {

                            stateName : statewiseDatas[i].state,
                            confirmed : statewiseDatas[i].confirmed,
                            active : statewiseDatas[i].active,
                            deaths : statewiseDatas[i].deaths,
                            recovered : statewiseDatas[i].recovered
                        }

                        setRowdata(prevState => [...prevState, schema]);
                    }

                    
                           
                 });
        }
        fetchapi();
    }, []);

    return (
        <div  className="container stateshow mb-3 mt-3 ">
            <h2 className="stateheading">Statewise Corona Updates</h2>

            <Select />

            <div  className="panel panel-default table-responsive">
            <table id="mydatatable" className="table table-bordered">

                <thead>
                    <tr>
                        <th>Serial no.</th>
                        <th>State Name</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>

                {rowData.map((rowItem, index) => {

                    return(
                        <Tablerow 
                            key={index}
                            serialno = {index + 1}
                            stateName = {rowItem.stateName}
                            confirmed = {rowItem.confirmed}
                            active = {rowItem.active}
                            deaths = {rowItem.deaths}
                            recovered = {rowItem.recovered}
                        />
                    );

                })}

                </tbody>
                

                </table>
            </div>

            
            

             
        </div>
    )
}

export default StatecaseContainer;
