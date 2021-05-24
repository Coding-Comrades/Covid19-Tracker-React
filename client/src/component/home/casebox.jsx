import React from 'react';

const Casebox = (props) => {
    return (
            <div className="casesinfo" id={props.caseId}>
                <h1 className="caseheading">{props.caseHeading}</h1>
                
                <div className="d-flex justify-content-center">
                    <h3 className="count">
                        <span className="icon">
                            <svg className="MuiSvgIcon-root decrease" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
                            </svg>
                        </span>
                        {props.caseCount}
                    </h3>
                </div>
            </div>
    )
}

export default Casebox;
