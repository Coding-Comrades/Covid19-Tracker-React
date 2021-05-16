export function nextdate(date,monthnum,year)
        {
            var rdate, rmonthnum, ryear;
            
            if(date>0 && date<28)  //checking for day from 0 to 27
            {	
                rdate = date + 1;
            }

            if (date === 28)
            {
                if (monthnum === 2)	//checking for february
                {
                    if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0))	//leap year check in case of feb
                    {
                        rdate = 29;
                    }
                    else
                    {
                        rdate = 1;
                        rmonthnum = 3;
                    }
                }
                else  //when its not feb
                {
                    rdate =date + 1;
                }	
                    
            }

            if (date === 29)	//last day check for feb
            {
                if (monthnum === 2)
                {
                    rdate = 1;
                    rmonthnum = 3;
                }
                else
                {
                    rdate =date + 1;
                }
            }

            if (date === 30)	//last day check for april,june,September,November
            {
                if (monthnum === 1 || monthnum === 3 || monthnum === 5 || monthnum === 7 || monthnum === 8 || monthnum === 10 || monthnum === 12)
                {
                    rdate =date + 1;
                }
                else
                {
                    rdate = 1;
                    rmonthnum += 1;
                }
            }

            if (date === 31)	//last day of the month
            {
                rdate = 1;
                if (monthnum === 12)	//checking for last day of the year
                {
                    ryear =year + 1;
                    rmonthnum = 1;
                }
                else
                {
                    rmonthnum =monthnum + 1;
                }
            }

            if (typeof(rmonthnum) === 'undefined')
            {
                rmonthnum = monthnum;
            }
            if (typeof(ryear) === 'undefined')
            {
                ryear = year;
            }


            return {rdate , rmonthnum, ryear};

        }


export function stringdate(date,monthnum,year, check)
        {
            var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        
            var strDate, strmonth;

            if (date < 10)	//checking if day needs to be preceded by 0
            {
                strDate = "0"+date;
            }
            else
            {
                strDate = date;
            }

            if(check === "num")
            {
                if (monthnum < 10)	//checking if month needs to be preceded by 0
                {
                    strmonth = "0"+monthnum;
                }
                else
                {
                    strmonth = monthnum;
                }
            }
            else if(check === "str")
            {
                strmonth = monthNames[monthnum - 1];
            }
            

            var rd = strDate + "-" + strmonth + "-" + year;

            return rd;
        }

