import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router';

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    🎸 Guitar Hub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/equipment">Equipment</Nav.Link>
                        <Nav.Link as={Link} to="/lessons">Lessons</Nav.Link>
                        <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}