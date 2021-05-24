import React from 'react';

const Select = () => {


    function search()
        {
            let filter = document.getElementById('myInput').value.toUpperCase();
            let myTable = document.getElementById('mydatatable');

            let tr = myTable.getElementsByTagName('tr');

            for(var i=0; i < tr.length; i++)
            {
                let td = tr[i].getElementsByTagName('td')[1];

                if(td){
                    let textvalue = td.textContent || td.innerHTML;

                    if(textvalue.toUpperCase().indexOf(filter) > -1)
                    {
                        tr[i].style.display = "";
                    }
                    else
                    {
                        tr[i].style.display = "none";
                    }
                }
            }
        }

    return (
        <div className="d-flex justify-content-center inputdiv">
            <input type="text" name="" id="myInput" placeholder="Search Your State" onKeyUp={search} autocomplete="off"></input>
        </div>
    )
}

export default Select;
