import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function LessonInfoCard({ icon, title, description }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{icon} {title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

LessonInfoCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};