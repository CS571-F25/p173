import { Container, Tabs, Tab, Row, Col, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import EquipmentCard from '../components/EquipmentCard';
import acousticGuitar from '/images/acoustic-guitar.jpg';
import electricGuitar from '/images/electric-guitar.jpg';
import bassGuitar from '/images/bass-guitar.jpg';
import tubeAmp from '/images/tube-amp.jpg';
import solidStateAmp from '/images/solid-state-amp.jpg';
import modelingAmp from '/images/modeling-amp.jpg';
import pedalsOverdrive from '/images/pedals-overdrive.jpg';
import pedalsModulation from '/images/pedals-modulation.jpg';
import audioInterface from '/images/audio-interface.jpg';
import homeStudio from '/images/home-studio.jpg';

export default function Equipment() {
    const [key, setKey] = useState('guitars');
    const [showModal, setShowModal] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState(null);

    const equipmentDetails = {
        acoustic: {
            title: "Acoustic Guitars",
            image: acousticGuitar,
            fullDescription: "Acoustic guitars produce sound naturally through the vibration of their strings and resonance in their hollow bodies. They're perfect for singer-songwriters, folk music, and unplugged performances.",
            features: [
                "Dreadnought: The most popular body style, offering powerful bass and volume",
                "Concert/Grand Auditorium: Balanced tone with comfortable body size",
                "Parlor: Smaller body for fingerstyle and vintage tone",
                "Jumbo: Large body for maximum volume and bass response"
            ],
            considerations: [
                "Tonewoods: Spruce tops are bright and versatile, cedar is warmer",
                "Back/Sides: Mahogany (warm, focused), Rosewood (rich, complex), Maple (bright, clear)",
                "Bracing patterns affect tone: X-bracing for clarity, scalloped for more resonance",
                "Solid wood vs laminate: Solid wood improves with age and offers better tone"
            ],
            priceRange: "Entry-level: $200-500, Mid-range: $500-2000, Professional: $2000+"
        },
        electric: {
            title: "Electric Guitars",
            image: electricGuitar,
            fullDescription: "Electric guitars use electromagnetic pickups to convert string vibrations into electrical signals. They're essential for rock, jazz, blues, metal, and countless other genres.",
            features: [
                "Solid Body: Classic designs like Stratocaster and Les Paul, versatile for most genres",
                "Semi-Hollow: Combines electric sustain with acoustic warmth, great for jazz and blues",
                "Hollow Body: Full, rich tone perfect for jazz and softer rock styles",
                "Extended Range: 7-string and 8-string guitars for heavier music and extended range"
            ],
            considerations: [
                "Single-coil pickups: Bright, clear tone (Strat-style), susceptible to hum",
                "Humbucker pickups: Thicker, warmer tone (Les Paul-style), noise-canceling",
                "Scale length affects feel: 25.5\" (Fender) feels tighter, 24.75\" (Gibson) feels looser",
                "Tremolo systems: Floating trems for dive bombs, hardtail for stability",
                "Fretboard radius: Flatter (modern) for shredding, rounder (vintage) for chords"
            ],
            priceRange: "Entry-level: $200-600, Mid-range: $600-2500, Professional: $2500+"
        },
        bass: {
            title: "Bass Guitars",
            image: bassGuitar,
            fullDescription: "Bass guitars provide the rhythmic and harmonic foundation in most bands. They typically have 4 strings tuned an octave below the lowest four strings of a guitar.",
            features: [
                "4-String: Standard tuning (E-A-D-G), versatile for all styles",
                "5-String: Adds low B string for extended range and modern styles",
                "6-String: Adds both low B and high C for maximum range",
                "Fretless: Smooth, mellow tone similar to upright bass"
            ],
            considerations: [
                "Scale length: 34\" is standard, 35\" for tighter low strings, 30\" short-scale for comfort",
                "Active electronics: Require battery, offer more tone shaping and output",
                "Passive electronics: No battery needed, classic vintage tone",
                "P-Bass vs J-Bass: P-Bass has thick, punchy tone; J-Bass is brighter and more versatile",
                "String spacing: Wider for fingerstyle, narrower for faster playing"
            ],
            priceRange: "Entry-level: $200-500, Mid-range: $500-2000, Professional: $2000+"
        },
        tubeAmp: {
            title: "Tube Amplifiers",
            image: tubeAmp,
            fullDescription: "Tube amps use vacuum tubes to amplify signal, producing warm, dynamic tone with natural compression. They're prized for their touch sensitivity and harmonic richness.",
            features: [
                "Preamp tubes shape your tone (typically 12AX7 tubes)",
                "Power tubes determine volume and character (6L6, EL34, EL84)",
                "Natural compression and harmonic overtones when pushed",
                "Touch-sensitive dynamics respond to playing technique"
            ],
            considerations: [
                "Maintenance: Tubes need replacing every 1-3 years depending on use",
                "Weight: Generally heavier than solid-state amps",
                "Warm-up time: Need a few minutes to reach optimal performance",
                "Volume: Often need to be turned up loud to sound their best",
                "Bias adjustment: May be required when changing power tubes"
            ],
            priceRange: "Entry-level: $300-700, Mid-range: $700-2000, Professional: $2000+"
        },
        solidState: {
            title: "Solid-State Amplifiers",
            image: solidStateAmp,
            fullDescription: "Solid-state amps use transistors instead of tubes, offering reliable, consistent tone with minimal maintenance. They're perfect for gigging musicians who need dependability.",
            features: [
                "Reliable: No tubes to replace, minimal maintenance required",
                "Consistent: Sound the same every time you turn them on",
                "Lighter weight: Easier to transport than tube amps",
                "Clean headroom: Excellent clean tones at high volumes"
            ],
            considerations: [
                "Tone character: More neutral than tubes, less natural compression",
                "Distortion: Typically harsher clipping than tube overdrive",
                "Best for: Clean tones, pedal platforms, and jazz",
                "Durability: Very reliable for touring and regular gigging",
                "Price-to-power ratio: Generally more affordable wattage than tubes"
            ],
            priceRange: "Entry-level: $100-400, Mid-range: $400-1200, Professional: $1200+"
        },
        modeling: {
            title: "Modeling Amplifiers",
            image: modelingAmp,
            fullDescription: "Modeling amps use digital technology to simulate classic amps, cabinets, and effects. They offer incredible versatility with hundreds of tones in a single unit.",
            features: [
                "Multiple amp models: Classic Fender, Marshall, Vox, Mesa Boogie, and more",
                "Built-in effects: Delays, reverbs, modulation, distortion pedals",
                "Cabinet simulations: Different speaker cabinet sounds",
                "Presets: Save and recall your favorite tone combinations"
            ],
            considerations: [
                "Learning curve: Many features to explore and dial in",
                "Recording-ready: Often include USB output for direct recording",
                "Headphone practice: Most include headphone jacks with cabinet simulation",
                "Software updates: Some models can be updated with new amp models",
                "Best for: Home practice, recording, versatile playing situations"
            ],
            priceRange: "Entry-level: $100-400, Mid-range: $400-1500, Professional: $1500+"
        },
        overdrive: {
            title: "Overdrive & Distortion Pedals",
            image: pedalsOverdrive,
            fullDescription: "Overdrive and distortion pedals are essential for rock, blues, and metal tones. They range from subtle tube-amp breakup to extreme high-gain saturation.",
            features: [
                "Overdrive: Mimics tube amp breakup, smooth and dynamic",
                "Distortion: More aggressive clipping, higher gain than overdrive",
                "Fuzz: Extreme clipping for vintage psychedelic tones",
                "Boost: Clean boost to push your amp harder"
            ],
            considerations: [
                "Gain stacking: Using multiple drives for complex tones",
                "EQ controls: Shape your tone before and after clipping",
                "True bypass: Preserves your clean tone when off",
                "Popular models: Tube Screamer, Klon, Boss DS-1, Big Muff",
                "Buffer vs true bypass: Buffers can help with long cable runs"
            ],
            priceRange: "Budget: $30-80, Mid-range: $80-200, Boutique: $200-400"
        },
        modulation: {
            title: "Modulation & Time-Based Effects",
            image: pedalsModulation,
            fullDescription: "These effects add movement, space, and dimension to your guitar tone. They're essential for creating lush soundscapes and adding texture to your playing.",
            features: [
                "Chorus: Thickens your tone, creates shimmer and movement",
                "Flanger: Jet-plane whoosh effect, sweeping resonance",
                "Phaser: Swirling, psychedelic tone movement",
                "Delay: Repeating echoes from subtle slapback to infinite repeats",
                "Reverb: Adds space and ambience, from small rooms to cathedrals"
            ],
            considerations: [
                "Analog vs Digital: Analog is warmer, digital offers more options",
                "Tap tempo: Essential for matching delay time to song tempo",
                "Stereo operation: Many sound better with stereo outputs",
                "Modulation rate and depth: Control the speed and intensity",
                "Trails: Some pedals let repeats fade out naturally when bypassed"
            ],
            priceRange: "Budget: $40-100, Mid-range: $100-250, High-end: $250-500"
        },
        audioInterface: {
            title: "Audio Interfaces",
            image: audioInterface,
            fullDescription: "Audio interfaces convert your guitar's analog signal to digital for recording on your computer. They're the foundation of any home recording setup.",
            features: [
                "High-impedance inputs: Properly handle guitar signal levels",
                "Preamps: Amplify your signal for optimal recording levels",
                "Phantom power: For condenser microphones (48V)",
                "Headphone monitoring: Low-latency monitoring while recording"
            ],
            considerations: [
                "Sample rate: 44.1kHz or 48kHz is standard, 96kHz for high-quality",
                "Bit depth: 24-bit is professional standard",
                "Inputs: Consider how many instruments you'll record simultaneously",
                "Connection: USB is most common, Thunderbolt for lowest latency",
                "Latency: Lower latency means less delay when monitoring",
                "Software included: Many come with DAWs and plugins"
            ],
            priceRange: "Entry-level: $100-200, Mid-range: $200-600, Professional: $600+"
        },
        homeStudio: {
            title: "Home Studio Setup",
            image: homeStudio,
            fullDescription: "Building a home studio allows you to record guitar whenever inspiration strikes. With modern technology, professional-quality recordings are achievable at home.",
            features: [
                "Computer/DAW: Digital Audio Workstation software for recording and mixing",
                "Audio Interface: Connect your guitar and microphones",
                "Studio Monitors: Accurate speakers for mixing",
                "Headphones: Essential for tracking and detailed editing"
            ],
            considerations: [
                "Acoustic treatment: Foam panels and bass traps improve your room sound",
                "Monitor placement: Position at ear level, forming an equilateral triangle",
                "Cable management: Keep your space organized and safe",
                "Microphones: Dynamic (SM57) for amps, condenser for acoustic guitars",
                "Amp simulation: Software like Amplitube, Bias FX, or Neural DSP",
                "MIDI controller: Useful for programming drums and keys",
                "Backup system: External drives to protect your recordings"
            ],
            priceRange: "Basic setup: $500-1500, Mid-range: $1500-5000, Professional: $5000+"
        }
    };

    const handleCardClick = (equipmentKey) => {
        setSelectedEquipment(equipmentDetails[equipmentKey]);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container className="my-5">
            <PageHeader 
                title="Equipment Guide"
                subtitle="Click on any equipment card below to learn more about specifications, features, and buying considerations"
            />

            <Tabs
                id="equipment-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-4"
                justify
            >
                <Tab eventKey="guitars" title="Guitars">
                    <h2 className="mt-4 mb-3">Guitar Types</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <EquipmentCard
                                title="Acoustic Guitars"
                                description="Explore dreadnoughts, parlors, and jumbo acoustics. Learn about tonewoods, bracing patterns, and how to choose your perfect acoustic."
                                imageSrc={acousticGuitar}
                                imageAlt="Acoustic guitar close-up showing wooden body and strings"
                                onClick={() => handleCardClick('acoustic')}
                            />
                        </Col>
                        <Col md={4} className="mb-4">
                            <EquipmentCard
                                title="Electric Guitars"
                                description="From single-coil to humbucker pickups, solid body to semi-hollow designs. Discover what makes each electric guitar unique."
                                imageSrc={electricGuitar}
                                imageAlt="Electric guitar with sunburst finish"
                                onClick={() => handleCardClick('electric')}
                            />
                        </Col>
                        <Col md={4} className="mb-4">
                            <EquipmentCard
                                title="Bass Guitars"
                                description="4-string, 5-string, and extended range basses. Learn about scale length, active vs. passive electronics, and playing styles."
                                imageSrc={bassGuitar}
                                imageAlt="Bass guitar with four strings"
                                onClick={() => handleCardClick('bass')}
                            />
                        </Col>
                    </Row>
                </Tab>

                <Tab eventKey="amps" title="Amplifiers">
                    <h2 className="mt-4 mb-3">Amplifier Types</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <EquipmentCard
                                title="Tube Amps"
                                description="Classic warmth and natural compression. Understand preamp and power tubes, bias adjustment, and maintenance."
                                imageSrc={tubeAmp}
                                imageAlt="Vintage tube amplifier with glowing tubes"
                                onClick={() => handleCardClick('tubeAmp')}
                            />
                        </Col>
                        <Col md={4} className="mb-4">
                            <EquipmentCard
                                title="Solid-State Amps"
                                description="Reliable, consistent tone with minimal maintenance. Perfect for gigging musicians who need dependable performance."
                                imageSrc={solidStateAmp}
                                imageAlt="Modern solid-state guitar amplifier"
                                onClick={() => handleCardClick('solidState')}
                            />
                        </Col>
                        <Col md={4} className="mb-4">
                            <EquipmentCard
                                title="Modeling Amps"
                                description="Digital versatility with amp and effect simulations. Explore modern technology that puts hundreds of tones at your fingertips."
                                imageSrc={modelingAmp}
                                imageAlt="Digital modeling amplifier with modulation controls"
                                onClick={() => handleCardClick('modeling')}
                            />
                        </Col>
                    </Row>
                </Tab>

                <Tab eventKey="pedals" title="Effects Pedals">
                    <h2 className="mt-4 mb-3">Effects Categories</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <EquipmentCard
                                title="Overdrive & Distortion"
                                description="From subtle breakup to heavy saturation. Learn about gain staging, EQ curves, and how to stack drives for unique tones."
                                imageSrc={pedalsOverdrive}
                                imageAlt="Set of guitar overdrive and distortion pedals"
                                onClick={() => handleCardClick('overdrive')}
                            />
                        </Col>
                        <Col md={6} className="mb-4">
                            <EquipmentCard
                                title="Modulation & Time-Based"
                                description="Chorus, flanger, phaser, delay, and reverb. Create space and movement in your sound with these essential effects."
                                imageSrc={pedalsModulation}
                                imageAlt="Bias Modulation pedal showing various effect controls"
                                onClick={() => handleCardClick('modulation')}
                            />
                        </Col>
                    </Row>
                </Tab>

                <Tab eventKey="recording" title="Recording">
                    <h2 className="mt-4 mb-3">Recording Gear</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <EquipmentCard
                                title="Audio Interfaces"
                                description="Connect your guitar to your computer. Understanding inputs, outputs, sample rates, and buffer sizes for optimal recording."
                                imageSrc={audioInterface}
                                imageAlt="Audio interface with multiple inputs and knobs"
                                onClick={() => handleCardClick('audioInterface')}
                            />
                        </Col>
                        <Col md={6} className="mb-4">
                            <EquipmentCard
                                title="Home Studio Setup"
                                description="Build your recording space on any budget. Learn about monitoring, acoustic treatment, and essential software for guitarists."
                                imageSrc={homeStudio}
                                imageAlt="Home recording studio with monitors and equipment"
                                onClick={() => handleCardClick('homeStudio')}
                            />
                        </Col>
                    </Row>
                </Tab>
            </Tabs>

            {/* Equipment Detail Modal */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
                {selectedEquipment && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedEquipment.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img 
                                src={selectedEquipment.image} 
                                alt={selectedEquipment.title}
                                className="img-fluid rounded mb-4"
                                style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                            />
                            
                            <h3>Overview</h3>
                            <p>{selectedEquipment.fullDescription}</p>

                            <h3 className="mt-4">Key Features</h3>
                            <ul>
                                {selectedEquipment.features.map((feature, index) => (
                                    <li key={index} className="mb-2">{feature}</li>
                                ))}
                            </ul>

                            <h3 className="mt-4">Important Considerations</h3>
                            <ul>
                                {selectedEquipment.considerations.map((consideration, index) => (
                                    <li key={index} className="mb-2">{consideration}</li>
                                ))}
                            </ul>

                            <h3 className="mt-4">Price Range</h3>
                            <p className="mb-0">{selectedEquipment.priceRange}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </Container>
    );
}