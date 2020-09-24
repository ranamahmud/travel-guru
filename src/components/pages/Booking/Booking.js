import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./Booking.css";
const Booking = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 id="book-title">Cox's bazar</h1>
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
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Start Booking
  </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default Booking;