import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

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
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
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

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Book Your Guitar Lesson</h1>
            <p className="text-center lead mb-5">
                One-on-one instruction tailored to your goals and skill level
            </p>

            <Row>
                <Col lg={6} className="mb-4">
                    <h3 className="mb-4">What You'll Learn</h3>
                    
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>🎵 Multiple Styles</Card.Title>
                            <Card.Text>
                                Rock, Jazz, Blues, Classical, Indian Classical, and more. Lessons are customized 
                                to match your musical interests.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>📖 Music Theory</Card.Title>
                            <Card.Text>
                                Understand scales, chords, progressions, and how to apply theory to your playing 
                                in practical ways.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>🎸 Technique Development</Card.Title>
                            <Card.Text>
                                Build proper technique from the ground up, or refine advanced skills like 
                                fingerstyle, alternate picking, and improvisation.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>🎤 Performance Skills</Card.Title>
                            <Card.Text>
                                Develop confidence, stage presence, and the ability to perform under pressure. 
                                Includes vocal preparation techniques.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <div className="mt-4 p-3 bg-light rounded">
                        <h5>Experience Since 2017</h5>
                        <p className="mb-0">
                            Teaching guitar across multiple styles with a focus on building strong fundamentals 
                            and helping students achieve their musical goals.
                        </p>
                    </div>
                </Col>

                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <h3 className="mb-4">Request a Lesson</h3>
                            
                            {showSuccess && (
                                <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                                    Your lesson request has been submitted! We'll contact you soon to confirm.
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email *</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(555) 123-4567"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Skill Level *</Form.Label>
                                    <Form.Select
                                        name="skillLevel"
                                        value={formData.skillLevel}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select your level...</option>
                                        <option value="beginner">Beginner - Just starting out</option>
                                        <option value="intermediate">Intermediate - Can play songs/basic theory</option>
                                        <option value="advanced">Advanced - Looking to refine skills</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Lesson Type *</Form.Label>
                                    <Form.Select
                                        name="lessonType"
                                        value={formData.lessonType}
                                        onChange={handleChange}
                                        required
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
                                    <Form.Label>Preferred Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleChange}
                                    />
                                    <Form.Text className="text-muted">
                                        We'll confirm availability and schedule your lesson
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Additional Information</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your goals, experience, or any specific topics you'd like to cover..."
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
        </Container>
    );
}