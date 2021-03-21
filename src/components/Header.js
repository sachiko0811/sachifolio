import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Nav.Link>
                        <img src="/images/sachiko-icon-gold.png" alt="icon" className="icon" />
                        </Nav.Link>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer to='/about'>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/skills'>
                            <Nav.Link>Skills</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/works'>
                            <Nav.Link>Works</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact'>
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
