import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./Booking.css";

const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Container>
            <Row>
                <Col>
                    <h1 id="book-title">Cox's bazar</h1>
                    <p id="book-text"> Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island. </p>
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

                        {/* <label for="start">From </label>
                        <input type="date" id="start" name="birthday" />

                        <label for="end">To </label>
                        <input type="date" id="end" name="birthday" /> */}


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