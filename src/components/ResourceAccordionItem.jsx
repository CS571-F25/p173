import { Accordion, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ResourceAccordionItem({ eventKey, header, subtitle, items }) {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>
                <h5>{subtitle}</h5>
                <ListGroup variant="flush">
                    {items.map((item, index) => (
                        <ListGroup.Item key={index}>
                            <strong>{item.title}:</strong> {item.description}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    );
}

ResourceAccordionItem.propTypes = {
    eventKey: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired
};