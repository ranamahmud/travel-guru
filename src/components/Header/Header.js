import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(loggedInUser);
    return (

        <Container>

            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <Link to="/"><img id="logo" src={logo} alt="" /></Link>
                </Navbar.Brand>
                <Form inline>
                    <FormControl id="search-box" type="text" placeholder="Search your Destination..." className="mr-sm-2" />
                </Form>
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/news">News</Link>
                    <Link className="nav-link" to="/destination">Destination</Link>
                    <Link className="nav-link" to="/blog">Blog</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    {
                        loggedInUser.email && loggedInUser.email.length > 0 ?
                            <button onClick={() => setLoggedInUser({})}>Sign Out</button>
                            :
                            <Link id="login-btn" className="nav-link btn" to="/login">Login</Link>
                    }
                </Nav>

            </Navbar>
        </Container >

    );
};

export default Header;