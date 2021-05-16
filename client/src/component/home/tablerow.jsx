import React from 'react';

const Tablerow = (props) => {
    return (

            <tr>
                <td>{props.serialno}</td>
                <td>{props.stateName}</td>
                <td>{props.confirmed}</td>
                <td>{props.active}</td>
                <td>{props.deaths}</td>
                <td>{props.recovered}</td>
            </tr>
    )
}

export default Tablerow;
