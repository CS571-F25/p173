import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

export default function FeatureCard({ icon, title, description, linkTo, linkText }) {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Body>
                <Card.Title>{icon} {title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button as={Link} to={linkTo} variant="outline-primary">
                    {linkText}
                </Button>
            </Card.Body>
        </Card>
    );
}

FeatureCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
};