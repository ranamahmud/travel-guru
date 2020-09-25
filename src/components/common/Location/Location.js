import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Location.css"
function Location(props) {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Link to="/booking">
                        <Card.Img variant="top" src={require('../../../images/image/Rectangle 1.png')} />
                    </Link>
                    <p className="bottom-center">Cox's bazar</p>


                </Card>
                <Card>
                    <Card.Img variant="top" src={require('../../../images/image/Rectangle 26.png')} />
                    <Card.Title className="bottom-center">Cox's bazar</Card.Title>

                </Card>
                <Card>
                    <Card.Img variant="top" src={require('../../../images/image/Rectangle 27.png')} />
                    <Card.Title className="bottom-center">Cox's bazar</Card.Title>

                </Card>
            </CardGroup>
        </div>
    );
}

export default Location;