import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <Container>
                <Row>
                    <Col md={4} className="mb-3">
                        <h5>Guitar Hub</h5>
                        <p className="small">
                            Your complete resource for guitar equipment, lessons, and learning materials.
                        </p>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                            <li><Link to="/equipment" className="text-light text-decoration-none">Equipment</Link></li>
                            <li><Link to="/lessons" className="text-light text-decoration-none">Lessons</Link></li>
                            <li><Link to="/resources" className="text-light text-decoration-none">Resources</Link></li>
                            <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Contact</h5>
                        <p className="small">
                            Questions about lessons or equipment?<br />
                            Use the lesson booking form to get in touch.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <p className="small mb-0">
                            © 2025 Guitar Hub. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}