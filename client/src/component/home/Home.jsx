import React from 'react';
import axios from 'axios';
import Casebox from './casebox';
import StatecaseContainer from './statecaseContainer';

function Home(){

    const [confirmed, setConfirmed] = React.useState("");
    const [recovered, setRecovered] = React.useState("");
    const [deaths, setDeaths] = React.useState("");
    const [vaccinated, setVaccinated] = React.useState("");


    function formatnos(x)   
     {
         var lastThree = x.substring(x.length-3);
         var otherNumbers = x.substring(0,x.length-3);
         if(otherNumbers !== '')
         {
             lastThree = ',' + lastThree;
         }
                    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
         return res;
     }
     
   React.useEffect(function effectFunction() {
       function fetchapi() {
           axios.get('https://api.covid19india.org/data.json')
                .then((response) => {
                    setConfirmed(response.data.statewise[0].confirmed);
                    setRecovered(response.data.statewise[0].recovered);
                    setDeaths(response.data.statewise[0].deaths);
                    let arr = response.data.tested;
                    let arrlen = (arr.length - 1);
                    setVaccinated(response.data.tested[arrlen].totalindividualsvaccinated);
                    
                });
       }
       fetchapi();
   }, []);


    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 justify-content-center caseinfocontainer caseinfocontainer">

                <Casebox 
                    caseId="totalcases" 
                    caseHeading="Infected"
                    caseCount={formatnos(confirmed)}
                />
                <Casebox 
                    caseId="recovered" 
                    caseHeading="Recovered"
                    caseCount={formatnos(recovered)}
                />
                <Casebox 
                    caseId="deaths" 
                    caseHeading="Deaths"
                    caseCount={formatnos(deaths)}
                />
                <Casebox 
                    caseId="vaccinated" 
                    caseHeading="Vaccinated"
                    caseCount={formatnos(vaccinated)}
                />
        
            </div>

            <StatecaseContainer />
        </>

    )
}

export default Home;