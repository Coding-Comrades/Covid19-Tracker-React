import React, { useEffect, useState } from 'react';
import {nextdate, stringdate} from '../../api/help';

const Displaydiv = (props) => {

    const [dates, setDates] = useState([]);
    const [row,setRows]=useState([]);


    useEffect(() => {

        setRows([]);
        setDates([]);
        var today = new Date();
        var date=today.getDate();
        var year=today.getFullYear();
        var monthnum=today.getMonth()+1;
        // var nDate = date.slice(8, 10) + '-' + date.slice(5, 7) + '-' + date.slice(0, 4);

        let datevalue = new Array();
        let stringdt = new Array();
        let stringmon = new Array();

        setDates(stringmon);



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

        // console.log(datevalue);
        // console.log(stringdt);
        // console.log(stringmon);

        let center = props.centers;


        const na = '<a href="/#" class="nbn">NA</a>';
        const booked = '<a href="/#" class="bbn">Booked</a>' ;
        const avl1 = '<a href="/#" class="avl">';
        const avl2 = '</a>';


        for(var i=0 ; i<center.length ; i++)
        {

            var dt = new Array(7).fill(na);
            let session = center[i].sessions;
            
            // console.log(center[i]);

            // console.log(session)
            

            for(var j=0 ; j< session.length ; j++)
            {
                for(var k = 0; k<7; k++)
                {
                    if(session[j].date === stringdt[k])
                    {
                        if(session[j].available_capacity !== 0)
                        {
                            if(dt[k] === na)
                            {  
                                dt[k] = avl1 + session[j].available_capacity + avl2;
                            }
                            else
                            {
                                var avl = avl1 + session[j].available_capacity + avl2 ;
                                dt[k] = dt[k].concat(avl);
                            }
                        }
                        else
                        {
                            if(dt[k] === na)
                            {  
                                dt[k] = booked;
                            }
                            else
                            {
                                dt[k] = dt[k].concat(booked);
                            }
                        }
                    }
                }
                
            }

            // console.log(dt)
            
            var [dt1, dt2, dt3, dt4, dt5, dt6, dt7] = dt;

            // console.log(dt1, dt2, dt3, dt4, dt5, dt6, dt7)


            let schema = {
                name : center[i].name,
                address : center[i].address,
                district_name : center[i].district_name,
                state_name : center[i].state_name,
                pincode : center[i].pincode,
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
        
        // console.log(dates);
        // console.log(props.centers);

    }, [props])


    return (
        <div className="gm panel panel-default table-responsive">
    <table className="displayresults">
        <thead>
            <tr>
                <th width="200"></th>
                {
                    dates.map((date , index) => {
                        return(
                            <th width="100"><div className="dt" >{date}</div></th>
                        );
                    })
                }
             
            </tr>
        </thead>
        
        <tbody>


        {
            row.map((info, index) => {
                return(
                    <tr>
                        <td>
                            <div className="up">{info.name}</div>
                            <div className="down">{info.address}, {info.district_name}, {info.state_name}, {info.pincode}</div>
                        </td>
                        <td dangerouslySetInnerHTML={{__html: info.dt1}}></td>
                        <td dangerouslySetInnerHTML={{__html: info.dt2}}></td>
                        <td dangerouslySetInnerHTML={{__html: info.dt3}}></td>
                        <td dangerouslySetInnerHTML={{__html: info.dt4}}></td>
                        <td dangerouslySetInnerHTML={{__html: info.dt5}}></td>
                        <td dangerouslySetInnerHTML={{__html: info.dt6}}></td>
                        <td dangerouslySetInnerHTML={{__html: info.dt7}}></td>
                    </tr>
                
                )
            })
        }

      
        </tbody>

        

    </table>


    
    </div>
    )
}

export default Displaydiv;
