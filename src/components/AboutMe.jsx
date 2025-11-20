import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AboutMe() {
    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">About Guitar Hub</h1>
            
            <Row className="mb-5">
                <Col lg={8} className="mx-auto">
                    <Card className="shadow-sm">
                        <Card.Body className="p-4">
                            <h3 className="mb-3">Our Mission</h3>
                            <p>
                                Guitar Hub was created to be a comprehensive resource for guitarists at every 
                                level. Whether you're picking up a guitar for the first time or you're a 
                                seasoned player looking to expand your knowledge, we're here to support your 
                                musical journey.
                            </p>
                            <p>
                                We believe that great musicianship comes from a combination of solid fundamentals, 
                                understanding your equipment, and personalized instruction that meets you where 
                                you are in your development.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <h4 className="mb-3">🎸 Teaching Experience</h4>
                            <p>
                                Since 2017, I've been teaching guitar across multiple styles including Rock, 
                                Jazz, Blues, and Indian Classical music. My approach focuses on building strong 
                                fundamentals while encouraging students to explore the music they love.
                            </p>
                            <p className="mb-0">
                                I've been recognized with the Louis Armstrong Jazz Award and have helped 
                                students of all ages achieve their musical goals, from learning their first 
                                chords to preparing for performances and competitions.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <h4 className="mb-3">📖 What We Offer</h4>
                            <p>
                                <strong>Equipment Guides:</strong> In-depth reviews and comparisons to help 
                                you make informed decisions about guitars, amps, pedals, and recording gear.
                            </p>
                            <p>
                                <strong>Learning Resources:</strong> Tutorials on technique, theory, and 
                                style-specific approaches to expand your musical vocabulary.
                            </p>
                            <p className="mb-0">
                                <strong>Private Lessons:</strong> One-on-one instruction tailored to your 
                                skill level, musical interests, and goals.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={8} className="mx-auto">
                    <Card className="bg-light">
                        <Card.Body className="p-4">
                            <h3 className="mb-3">My Approach to Teaching</h3>
                            <p>
                                Every student is different, and I believe in meeting you where you are. Whether 
                                you learn best through structured theory, playing by ear, or a combination of 
                                approaches, we'll find what works for you.
                            </p>
                            <p>
                                I emphasize proper technique from the start to prevent bad habits and potential 
                                injury. But I also know that music should be fun and expressive, so we balance 
                                technical development with playing the songs and styles that inspire you.
                            </p>
                            <p className="mb-0">
                                My experience in competitive forensics has also taught me the importance of 
                                vocal preparation and communication skills, which I incorporate when working 
                                with students on performance and stage presence.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={8} className="mx-auto text-center">
                    <h3 className="mb-3">Ready to Start Your Journey?</h3>
                    <p className="lead">
                        Explore our equipment guides, dive into learning resources, or book a lesson to 
                        get personalized instruction. Let's make music together!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}