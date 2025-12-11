import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import FeatureCard from '../components/FeatureCard';
import heroImage from '/images/hero-guitar.jpg';

export default function Home() {
    return (
        <Container>
            <div className="hero-section text-center my-5">
                <img 
                    src={heroImage}
                    alt="Picture of a red Guitar"
                    className="img-fluid rounded mb-4"
                    style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                />
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

            <Row className="my-5">
                <Col md={4} className="mb-4">
                    <FeatureCard
                        icon="🎸"
                        title="Equipment Guides"
                        description="Comprehensive reviews and comparisons of guitars, amps, pedals, and recording gear"
                        linkTo="/equipment"
                        linkText="Learn More"
                    />
                </Col>

                <Col md={4} className="mb-4">
                    <FeatureCard
                        icon="📚"
                        title="Learning Resources"
                        description="Tutorials, music theory, techniques, and tips for guitarists at all levels"
                        linkTo="/resources"
                        linkText="Explore Resources"
                    />
                </Col>

                <Col md={4} className="mb-4">
                    <FeatureCard
                        icon="🎓"
                        title="Private Lessons"
                        description="Book one-on-one guitar lessons tailored to your skill level and musical interests"
                        linkTo="/lessons"
                        linkText="Book Now"
                    />
                </Col>
            </Row>

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