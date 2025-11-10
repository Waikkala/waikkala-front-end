import PropTypes from 'prop-types';

const Icon = ({ src, alt = '', size = 24, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`block ${className}`}
    />
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Icon;
