import { Container, Tabs, Tab, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';

export default function Equipment() {
    const [key, setKey] = useState('guitars');

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Equipment Guide</h1>
            <p className="text-center lead mb-5">
                Explore comprehensive guides on guitars, amplifiers, effects pedals, and recording equipment
            </p>

            <Tabs
                id="equipment-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-4"
                justify
            >
                <Tab eventKey="guitars" title="Guitars">
                    <Row className="mt-4">
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Acoustic Guitars</Card.Title>
                                    <Card.Text>
                                        Explore dreadnoughts, parlors, and jumbo acoustics. Learn about 
                                        tonewoods, bracing patterns, and how to choose your perfect acoustic.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Electric Guitars</Card.Title>
                                    <Card.Text>
                                        From single-coil to humbucker pickups, solid body to semi-hollow designs. 
                                        Discover what makes each electric guitar unique.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Bass Guitars</Card.Title>
                                    <Card.Text>
                                        4-string, 5-string, and extended range basses. Learn about scale length, 
                                        active vs. passive electronics, and playing styles.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>

                <Tab eventKey="amps" title="Amplifiers">
                    <Row className="mt-4">
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Tube Amps</Card.Title>
                                    <Card.Text>
                                        Classic warmth and natural compression. Understand preamp and power tubes, 
                                        bias adjustment, and maintenance.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Solid-State Amps</Card.Title>
                                    <Card.Text>
                                        Reliable, consistent tone with minimal maintenance. Perfect for gigging 
                                        musicians who need dependable performance.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Modeling Amps</Card.Title>
                                    <Card.Text>
                                        Digital versatility with amp and effect simulations. Explore modern 
                                        technology that puts hundreds of tones at your fingertips.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>

                <Tab eventKey="pedals" title="Effects Pedals">
                    <Row className="mt-4">
                        <Col md={6} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Overdrive & Distortion</Card.Title>
                                    <Card.Text>
                                        From subtle breakup to heavy saturation. Learn about gain staging, 
                                        EQ curves, and how to stack drives for unique tones.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Modulation & Time-Based</Card.Title>
                                    <Card.Text>
                                        Chorus, flanger, phaser, delay, and reverb. Create space and movement 
                                        in your sound with these essential effects.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>

                <Tab eventKey="recording" title="Recording">
                    <Row className="mt-4">
                        <Col md={6} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Audio Interfaces</Card.Title>
                                    <Card.Text>
                                        Connect your guitar to your computer. Understanding inputs, outputs, 
                                        sample rates, and buffer sizes for optimal recording.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Home Studio Setup</Card.Title>
                                    <Card.Text>
                                        Build your recording space on any budget. Learn about monitoring, 
                                        acoustic treatment, and essential software for guitarists.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
}