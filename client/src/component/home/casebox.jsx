import React from 'react';

const Casebox = (props) => {
    return (
            <div className="casesinfo" id={props.caseId}>
                <h1 className="caseheading">{props.caseHeading}</h1>
                <h3 className="count">
                    {props.caseCount}
                </h3>
            </div>
    )
}

export default Casebox;
