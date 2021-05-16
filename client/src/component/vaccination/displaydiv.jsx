import React, { useEffect, useState } from 'react';

const Displaydiv = (props) => {

    const [dates, setDates] = useState({});


    useEffect(() => {

        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var today = new Date();
        var date=today.getDate();
        var year=today.getFullYear();
        var month=monthNames[today.getMonth()];
        // var nDate = date.slice(8, 10) + '-' + date.slice(5, 7) + '-' + date.slice(0, 4);

        var dt = {

                dt1 : date+" "+month+" "+year,
                dt2 : date+1+" "+month+" "+year, 
                dt3 : date+2+" "+month+" "+year, 
                dt4 : date+3+" "+month+" "+year, 
                dt5 : date+4+" "+month+" "+year, 
                dt6 : date+5+" "+month+" "+year, 
                dt7 : date+6+" "+month+" "+year,
                dtp1 : date+" "+"05"+" "+year,
                dtp2 : date+1+" "+"05"+" "+year, 
                dtp3 : date+2+" "+"05"+" "+year, 
                dtp4 : date+3+" "+"05"+" "+year, 
                dtp5 : date+4+" "+"05"+" "+year, 
                dtp6 : date+5+" "+"05"+" "+year, 
                dtp7 : date+6+" "+"05"+" "+year,
                dtp: [date+" "+"05"+" "+year, 
                        date+1+" "+"05"+" "+year, 
                        date+2+" "+"05"+" "+year, 
                        date+3+" "+"05"+" "+year, 
                        date+4+" "+"05"+" "+year, 
                        date+5+" "+"05"+" "+year, 
                        date+6+" "+"05"+" "+year]
        }

        setDates(dt);
        console.log(dates);
        console.log(props.centers);

    }, [])


    return (
        <div className="gm panel panel-default table-responsive">
    <table className="displayresults">
        <thead>
            <tr>
                <th width="200"></th>
                <th width="100"><div className="dt" >{dates.dt1}</div></th>
                <th width="100"><div className="dt" >{dates.dt2}</div></th>
                <th width="100"><div className="dt" >{dates.dt3}</div></th>
                <th width="100"><div className="dt" >{dates.dt4}</div></th>
                <th width="100"><div className="dt" >{dates.dt5}</div></th>
                <th width="100"><div className="dt" >{dates.dt6}</div></th>
                <th width="100"><div className="dt" >{dates.dt7}</div></th>
            </tr>
        </thead>
        
        <tbody>

        {props.centers.map((info, index) => {

            return(
                <tr>
                    <td><div className="up">{info.name}</div><div className="down">{info.address}, {info.district_name}, {info.state_name}, {info.pincode}</div></td>
                    {/* {
                        info.sessions.map((session, index) => {
                            if(session.date === dates.dtp[index])
                            {
                                if(session.available_capacity >= 1)
                                {
                                    <td><a class="fbn">{session.available_capacity}</a></td>
                                }
                                else
                                {
                                    <td><a href="/#" className="bbn">Booked</a></td>
                                }
                                
                            }
                            else
                            {
                                <td><a href="/#" className="nbn">NA</a></td>
                            }
                        })
                    } */}
                     <td><a href="/#" className="bbn">Booked</a></td>
                    <td><a href="/#" className="nbn">NA</a></td>
                    <td><a href="/#" className="nbn">NA</a></td>
                    
                    <td><a href="/#" className="nbn">NA</a></td>
                    <td><a href="/#" className="nbn">NA</a></td>
                    <td><a href="/#" className="nbn">NA</a></td>
                    <td><a href="/#" className="nbn">NA</a></td> 
                </tr>
               
            );

        })}
        </tbody>

        

    </table>
    </div>
    )
}

export default Displaydiv;
