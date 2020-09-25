import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import "./Booking.css";

const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { place } = useParams();
    return (
        <Container>
            <Row>
                <Col>
                    {
                        place === "cox-bazar" &&
                        <div>
                            <h1 id="book-title">Cox's bazar</h1>
                            <p id="book-text"> Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island. </p>
                        </div>
                    }
                    {
                        place === "sreemongol" &&
                        <div>
                            <h1 id="book-title">Sreemongol</h1>
                            <p id="book-text"> It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur </p>
                        </div>
                    }
                    {
                        place === "sundorbon" &&
                        <div>
                            <h1 id="book-title">Sundorbon</h1>
                            <p id="book-text"> The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. Wikipedia</p>
                        </div>
                    }
                </Col>
                <Col>
                    <Form id="book-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group style={{ display: 'inline-block' }} controlId="formBasicForm">
                            <Form.Label>From</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group style={{ display: 'inline-block' }} controlId="formBasicTo">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>





                        <Link to="/search">Start Booking</Link>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default Booking;