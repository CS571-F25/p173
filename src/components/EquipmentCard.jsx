import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function EquipmentCard({ title, description, imageSrc, imageAlt, onClick }) {
    return (
        <Card 
            className="h-100 equipment-card" 
            onClick={onClick}
            style={{ 
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
            }}
        >
            {imageSrc && (
                <Card.Img 
                    variant="top" 
                    src={imageSrc} 
                    alt={imageAlt || title}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
            )}
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="flex-grow-1">{description}</Card.Text>
                <Button variant="primary" size="sm" className="mt-2 w-100">
                    📖 Click for Details
                </Button>
            </Card.Body>
        </Card>
    );
}

EquipmentCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    onClick: PropTypes.func
};