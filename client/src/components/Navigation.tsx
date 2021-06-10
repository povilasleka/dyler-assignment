import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import './Navigation.css'

const Navigation = function() {
    return (
        <Navbar variant="dark" className="mb-3">
            <Container>
                <Navbar.Brand href="#home">
                    Dyler.com job assignment
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navigation;