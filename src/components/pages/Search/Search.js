import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import "./Search.css"
const Search = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <p id="guests">252 stays Apr 13-17 3 guests</p>
                    <p id="cox-bazar">Stay in Cox’s Bazar</p>

                    <CardGroup>
                        <Card>
                            <Card.Img className="card-img-top img-fluid" variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
      </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        {/* <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
        content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card> */}
                        {/* <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
      </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card> */}
                    </CardGroup>
                </Col>
                <Col>col 1</Col>
            </Row>
        </Container>
    );
};

export default Search;