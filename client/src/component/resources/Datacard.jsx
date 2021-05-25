import React from 'react';
import { Card } from 'react-bootstrap';

const Datacard = (props) => {
    return (
            // <Card style={{ width: '18rem' }}>
            //     <Card.Body>
            //         <Card.Title>{props.name}</Card.Title>
            //         <Card.Text>
            //         {props.address},{props.district}
            //         </Card.Text>
            //         <Card.Link href="#">{props.medicine}</Card.Link>
            //     </Card.Body>
            // </Card>
            <div style={{padding : "3% 2%"}} className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>{props.name}</h4>
              </div>
              <div className="card-body">
                <p> { props.address}</p>
                <p><i class="fas fa-map-marked-alt"></i>{props.district}</p>
                <p><i class="fas fa-phone-alt"></i>{props.contact}</p>
                <img src="https://img.icons8.com/pastel-glyph/20/000000/first-aid-kit.png"/>
                <p>{props.medicine}</p>
              </div>
            </div>
          </div>
      
            // To know about card react-bootstrap card component visit the following link :-

            // https://react-bootstrap.github.io/getting-started/introduction
    )
}

export default Datacard;
