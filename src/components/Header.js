import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>


            <Navbar bg="light" expand="lg">
                {/* <Container> */}
                <LinkContainer to='/'>
                        <Nav.Link >
                        <img src="/images/name-logo.png" alt="icon" className="icon" />
                        </Nav.Link>
                    </LinkContainer>
                    {/* <LinkContainer to='/'>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    </LinkContainer> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse 
                    id="basic-navbar-nav"
                    >
                        <Nav className="ml-auto">
                            <LinkContainer to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
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
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>


        </header>






            // <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            //     <Container>
            //         <LinkContainer to='/'>
            //             <Nav.Link>
            //             <img src="/images/sachiko-icon-gold.png" alt="icon" className="icon" />
            //             </Nav.Link>
            //         </LinkContainer>
            //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //         <Navbar.Collapse id="basic-navbar-nav">
            //             <Nav className="ml-auto">
            //             <LinkContainer to='/about'>
            //                 <Nav.Link>About</Nav.Link>
            //             </LinkContainer>
            //             <LinkContainer to='/skills'>
            //                 <Nav.Link>Skills</Nav.Link>
            //             </LinkContainer>
            //             <LinkContainer to='/works'>
            //                 <Nav.Link>Works</Nav.Link>
            //             </LinkContainer>
            //             <LinkContainer to='/contact'>
            //                 <Nav.Link>Contact</Nav.Link>
            //             </LinkContainer>
            //             </Nav>
            //         </Navbar.Collapse>
            //     </Container>
            // </Navbar>
    )
}

export default Header
