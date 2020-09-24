import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./Location.css"
function Location(props) {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={require('../../../images/image/Rectangle 1.png')} />
                    <Card.Body>
                        <Card.Title>Cox's bazar</Card.Title>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={require('../../../images/image/Rectangle 26.png')} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={require('../../../images/image/Rectangle 27.png')} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>

                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
}

export default Location;