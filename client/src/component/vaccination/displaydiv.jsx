import React, { useEffect, useState } from 'react';
import {nextdate, stringdate} from '../../api/help';

const Displaydiv = (props) => {

    const [dates, setDates] = useState({});
    const [row,setRows]=useState([]);


    useEffect(() => {

        var today = new Date();
        var date=today.getDate();
        var year=today.getFullYear();
        var monthnum=today.getMonth()+1;
        // var nDate = date.slice(8, 10) + '-' + date.slice(5, 7) + '-' + date.slice(0, 4);

        let datevalue = new Array();
        let stringdt = new Array();
        let stringmon = new Array();


        for(var i =0 ; i<7; i++)
        {
            let dv = {
                date: date,
                monthnum: monthnum,
                year: year
            }


            var str = stringdate(date, monthnum, year, "num");
            var str2 = stringdate(date, monthnum, year, "str");
            stringdt.push(str);
            stringmon.push(str2);
            datevalue.push(dv);

            let {rdate , rmonthnum, ryear} = nextdate(date, monthnum, year);
            date = rdate;
            monthnum = rmonthnum;
            year = ryear;
        }

        console.log(datevalue);
        console.log(stringdt);
        console.log(stringmon);

        let center = props.centers;


        for(var i=0 ; i<center.length ; i++)
        {

            const na = '<td><a href="/#" className="nbn">NA</a></td>';
            const booked = '<td><a href="/#" className="bbn">Booked</a></td>' ;
            const avl1 = '<td><a href="/#" className="avl">';
            const avl2 = '</a></td>';

            var dt = new Array();
            let session = center[i].sessions;
            
            var j=0,k=0,l=0;

            while(k<7)
            {
                if(session[j] === datevalue[k])
                {
                    if(session[j].available_capacity !== 0)
                    {
                        dt[k] = avl1 + session[j].available_capacity + avl2;
                    }
                    else
                    {
                        dt[k] = booked;
                    }

                    j++;
                }
                else
                {
                    dt[k] = na;
                    k++;
                }
            }

            
            var [dt1, dt2, dt3, dt4, dt5, dt6, dt7] = dt;


            let schema = {
                stateName : center[i].name,
                confirmed : center[i].address,
                active : center[i].district_name,
                deaths : center[i].state_name,
                recovered : center[i].pincode,
                dt1 : dt1,
                dt2 : dt2,
                dt3 : dt3,
                dt4 : dt4,
                dt5 : dt5,
                dt6 : dt6,
                dt7 : dt7,

            }
                        
            setRows(prevState => [...prevState, schema]);
        }

        console.log(row);
        
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
                    <td>
                    <div className="up">{info.name}</div>
                    <div className="down">{info.address}, {info.district_name}, {info.state_name}, {info.pincode}</div></td>
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
