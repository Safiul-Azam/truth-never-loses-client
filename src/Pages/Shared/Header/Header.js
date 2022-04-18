import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = ()=>{
        signOut(auth)
    }
    return (
        <Navbar sticky="top" className='header-container' collapseOnSelect expand="lg" variant="dark">
            <Container>

                <Navbar.Brand as={Link} to="/home">
                    <FontAwesomeIcon className='me-2' icon={faGavel}></FontAwesomeIcon>
                    Truth never loses
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        
                        {user? <Nav.Link onClick={handleSignOut} as={Link} to="/login">sign out</Nav.Link> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;