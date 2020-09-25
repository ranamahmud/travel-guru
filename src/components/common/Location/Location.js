import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Location.css"
function Location(props) {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Link to="/booking/cox-bazar">
                        <Card.Img variant="top" src={require('../../../images/image/Rectangle 1.png')} />
                        <p className="bottom-center">Cox's bazar</p>

                    </Link>


                </Card>
                <Card>
                    <Link to="/booking/sreemongol">
                        <Card.Img variant="top" src={require('../../../images/image/Rectangle 26.png')} />
                        <p className="bottom-center">Sreemongol</p>

                    </Link>


                </Card>
                <Card>
                    <Link to="/booking/sundorbon">
                        <Card.Img variant="top" src={require('../../../images/image/Rectangle 27.png')} />
                        <p className="bottom-center">Sundorbon</p>

                    </Link>


                </Card>
            </CardGroup>
        </div>
    );
}

export default Location;