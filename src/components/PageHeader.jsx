import PropTypes from 'prop-types';

export default function PageHeader({ title, subtitle }) {
    return (
        <>
            <h1 className="text-center mb-4">{title}</h1>
            {subtitle && (
                <p className="text-center lead mb-5">{subtitle}</p>
            )}
        </>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};