import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Navigation = function() {
    return (
        <Navbar bg="dark" variant="dark" className="mb-3 navbar-dark">
            <Container>
                <Navbar.Brand href="#home">
                    Dyler.com job assignment
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navigation;