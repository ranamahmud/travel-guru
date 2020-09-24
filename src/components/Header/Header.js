import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (

        <Container>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"> <img id="logo" src={logo} alt="" /></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">News</Nav.Link>
                    <Nav.Link href="#features">Destination</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    <Button>Login</Button>
                </Nav>

            </Navbar>
        </Container>

    );
};

export default Header;