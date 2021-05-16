import React from 'react';
import { Card } from 'react-bootstrap';

const Datacard = (props) => {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                    {props.address},{props.district}
                    </Card.Text>
                    <Card.Link href="#">{props.medicine}</Card.Link>
                </Card.Body>
            </Card>

            // To know about card react-bootstrap card component visit the following link :-

            // https://react-bootstrap.github.io/getting-started/introduction
    )
}

export default Datacard;
