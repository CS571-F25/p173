import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import LessonInfoCard from '../components/LessonInfoCard';

export default function Lessons() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        skillLevel: '',
        lessonType: '',
        preferredDate: '',
        message: ''
    });
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        setShowModal(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            skillLevel: '',
            lessonType: '',
            preferredDate: '',
            message: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container className="my-5">
            <PageHeader 
                title="Book Your Guitar Lesson"
                subtitle="One-on-one instruction tailored to your goals and skill level"
            />

            <Row>
                <Col lg={6} className="mb-4">
                    <h2 className="mb-4">What You'll Learn</h2>
                    
                    <LessonInfoCard
                        icon="🎵"
                        title="Multiple Styles"
                        description="Rock, Jazz, Blues, Classical, Indian Classical, and more. Lessons are customized to match your musical interests."
                    />

                    <LessonInfoCard
                        icon="📖"
                        title="Music Theory"
                        description="Understand scales, chords, progressions, and how to apply theory to your playing in practical ways."
                    />

                    <LessonInfoCard
                        icon="🎸"
                        title="Technique Development"
                        description="Build proper technique from the ground up, or refine advanced skills like fingerstyle, alternate picking, and improvisation."
                    />

                    <LessonInfoCard
                        icon="🎤"
                        title="Performance Skills"
                        description="Develop confidence, stage presence, and the ability to perform under pressure. Includes vocal preparation techniques."
                    />

                    <div className="mt-4 p-3 bg-light rounded">
                        <h3 className="h5">Experience Since 2017</h3>
                        <p className="mb-0">
                            Teaching guitar across multiple styles with a focus on building strong fundamentals 
                            and helping students achieve their musical goals.
                        </p>
                    </div>
                </Col>

                <Col lg={6}>
                    <Card className="border-secondary">
                        <Card.Body>
                            <h2 className="mb-4 text-dark">Request a Lesson</h2>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="name" className="fw-bold text-dark">Full Name *</Form.Label>
                                    <Form.Control
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                        className="border-secondary"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="email" className="fw-bold text-dark">Email *</Form.Label>
                                    <Form.Control
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                        className="border-secondary"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="phone" className="fw-bold text-dark">Phone Number</Form.Label>
                                    <Form.Control
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(555) 123-4567"
                                        className="border-secondary"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="skillLevel" className="fw-bold text-dark">Skill Level *</Form.Label>
                                    <Form.Select
                                        id="skillLevel"
                                        name="skillLevel"
                                        value={formData.skillLevel}
                                        onChange={handleChange}
                                        required
                                        className="border-secondary"
                                    >
                                        <option value="">Select your level...</option>
                                        <option value="beginner">Beginner - Just starting out</option>
                                        <option value="intermediate">Intermediate - Can play songs/basic theory</option>
                                        <option value="advanced">Advanced - Looking to refine skills</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="lessonType" className="fw-bold text-dark">Lesson Type *</Form.Label>
                                    <Form.Select
                                        id="lessonType"
                                        name="lessonType"
                                        value={formData.lessonType}
                                        onChange={handleChange}
                                        required
                                        className="border-secondary"
                                    >
                                        <option value="">Select lesson type...</option>
                                        <option value="rock">Rock Guitar</option>
                                        <option value="jazz">Jazz Guitar</option>
                                        <option value="blues">Blues Guitar</option>
                                        <option value="classical">Classical Guitar</option>
                                        <option value="indian">Indian Classical</option>
                                        <option value="general">General/Multiple Styles</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="preferredDate" className="fw-bold text-dark">Preferred Date</Form.Label>
                                    <Form.Control
                                        id="preferredDate"
                                        type="date"
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleChange}
                                        className="border-secondary"
                                    />
                                    <Form.Text className="text-dark" style={{ fontSize: '0.9rem' }}>
                                        We'll confirm availability and schedule your lesson
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label htmlFor="message" className="fw-bold text-dark">Additional Information</Form.Label>
                                    <Form.Control
                                        id="message"
                                        as="textarea"
                                        rows={3}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your goals, experience, or any specific topics you'd like to cover..."
                                        className="border-secondary"
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" size="lg" className="w-100">
                                    Submit Lesson Request
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Success Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>✅ Request Submitted!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-0">
                        Thank you for your lesson request! We've received your information and will 
                        contact you soon to confirm your lesson schedule.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}