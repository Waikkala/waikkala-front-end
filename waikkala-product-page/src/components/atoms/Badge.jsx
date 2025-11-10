import PropTypes from 'prop-types';

const Badge = ({ children, variant = 'success', className = '' }) => {
  const variants = {
    success: 'bg-success-bg text-success',
    info: 'bg-bg-light text-primary',
    warning: 'bg-secondary/20 text-secondary',
  };

  return (
    <span
      className={`inline-block px-4 py-2 rounded-md text-sm font-bold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['success', 'info', 'warning']),
  className: PropTypes.string,
};

export default Badge;
