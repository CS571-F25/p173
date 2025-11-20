import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default function Home() {
    return (
        <Container>
            {/* Hero Section */}
            <div className="hero-section text-center my-5">
                <h1 className="display-3 mb-3">Welcome to Guitar Hub</h1>
                <p className="lead mb-4">
                    Your complete guide to guitars, equipment, and personalized lessons
                </p>
                <Button as={Link} to="/lessons" variant="primary" size="lg" className="me-3">
                    Book a Lesson
                </Button>
                <Button as={Link} to="/equipment" variant="outline-primary" size="lg">
                    Explore Equipment
                </Button>
            </div>

            {/* Feature Cards */}
            <Row className="my-5">
                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>🎸 Equipment Guides</Card.Title>
                            <Card.Text>
                                Comprehensive reviews and comparisons of guitars, amps, pedals, and recording gear
                            </Card.Text>
                            <Button as={Link} to="/equipment" variant="outline-primary">
                                Learn More
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>📚 Learning Resources</Card.Title>
                            <Card.Text>
                                Tutorials, music theory, techniques, and tips for guitarists at all levels
                            </Card.Text>
                            <Button as={Link} to="/resources" variant="outline-primary">
                                Explore Resources
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>🎓 Private Lessons</Card.Title>
                            <Card.Text>
                                Book one-on-one guitar lessons tailored to your skill level and musical interests
                            </Card.Text>
                            <Button as={Link} to="/lessons" variant="outline-primary">
                                Book Now
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* About Section */}
            <Row className="my-5 py-4 bg-light rounded">
                <Col>
                    <h2 className="text-center mb-4">Why Choose Guitar Hub?</h2>
                    <p className="text-center">
                        Whether you're just starting out or looking to refine your skills, Guitar Hub provides 
                        everything you need in one place. From in-depth equipment reviews to personalized instruction, 
                        we're here to support your musical journey.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}