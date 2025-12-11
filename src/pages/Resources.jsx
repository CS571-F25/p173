import { Container, Accordion, Row, Col, Card, ListGroup } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';

export default function Resources() {
    return (
        <Container className="my-5">
            <PageHeader 
                title="Learning Resources"
                subtitle="Tutorials, theory, techniques, and tips to accelerate your guitar journey"
            />

            <Row>
                <Col lg={8}>
                    <Accordion defaultActiveKey="0" className="mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>🎼 Music Theory Fundamentals</Accordion.Header>
                            <Accordion.Body>
                                <h5>Essential Theory for Guitarists</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <strong>The Major Scale:</strong> Foundation of Western music. Learn the 
                                        pattern and how to play it in any key across the fretboard.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Intervals:</strong> Understanding the distance between notes and 
                                        how they create harmony and melody.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Chord Construction:</strong> How chords are built from scales, 
                                        from basic triads to complex jazz voicings.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Chord Progressions:</strong> Common patterns like I-IV-V and 
                                        ii-V-I that form the backbone of popular music.
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>✋ Technique Development</Accordion.Header>
                            <Accordion.Body>
                                <h5>Building Solid Foundation</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <strong>Proper Posture:</strong> Sitting and standing positions that 
                                        prevent injury and maximize comfort during long practice sessions.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Fretting Hand Technique:</strong> Finger placement, thumb 
                                        position, and building strength and dexterity.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Picking Techniques:</strong> Alternate picking, economy picking, 
                                        and hybrid picking for different styles and speeds.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Fingerstyle Basics:</strong> Classical and contemporary 
                                        fingerpicking patterns and techniques.
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>🎸 Style-Specific Techniques</Accordion.Header>
                            <Accordion.Body>
                                <h5>Genre Approaches</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <strong>Rock Guitar:</strong> Power chords, palm muting, bending, and 
                                        vibrato techniques that define rock playing.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Jazz Guitar:</strong> Chord melody, walking bass lines, 
                                        improvisation over changes, and jazz comping.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Blues Guitar:</strong> The minor pentatonic scale, bending, 
                                        12-bar blues progressions, and expressive playing.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Classical Guitar:</strong> Rest stroke vs. free stroke, arpeggio 
                                        patterns, and reading standard notation.
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>🎵 Practice Strategies</Accordion.Header>
                            <Accordion.Body>
                                <h5>Effective Practice Methods</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <strong>Goal Setting:</strong> How to set realistic, achievable goals 
                                        that keep you motivated and progressing.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Practice Routine Structure:</strong> Balancing warm-ups, 
                                        technique work, repertoire, and creative exploration.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Using a Metronome:</strong> Developing solid time and gradually 
                                        increasing speed without sacrificing accuracy.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Recording Yourself:</strong> How self-recording helps identify 
                                        areas for improvement and track progress.
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>🎤 Performance & Recording</Accordion.Header>
                            <Accordion.Body>
                                <h5>Taking Your Playing Public</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <strong>Stage Presence:</strong> Building confidence, connecting with 
                                        audiences, and managing performance anxiety.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Vocal Preparation:</strong> Techniques for warming up your voice 
                                        if you're singing while playing guitar.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Home Recording Basics:</strong> Getting great guitar tones in 
                                        your home studio with minimal equipment.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Microphone Techniques:</strong> How to mic acoustic guitars and 
                                        guitar amplifiers for recording.
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

                <Col lg={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>📚 Recommended Books</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>The Guitar Handbook</ListGroup.Item>
                                <ListGroup.Item>Music Theory for Guitarists</ListGroup.Item>
                                <ListGroup.Item>Fretboard Logic</ListGroup.Item>
                                <ListGroup.Item>The Advancing Guitarist</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>🎬 Video Tutorials</Card.Title>
                            <Card.Text>
                                Check back soon for video lessons covering technique, theory, 
                                and style-specific content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>💡 Practice Tips</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Practice consistently, even if just 15 minutes daily</ListGroup.Item>
                                <ListGroup.Item>Start slow and build speed gradually</ListGroup.Item>
                                <ListGroup.Item>Record yourself to track progress</ListGroup.Item>
                                <ListGroup.Item>Learn songs you enjoy to stay motivated</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}