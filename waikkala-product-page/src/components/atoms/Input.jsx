import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  disabled = false,
  min,
  max
}) => {
  const baseStyles = 'px-4 py-3 border-2 border-gray-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all';

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      min={min}
      max={max}
      className={`${baseStyles} ${disabled ? 'bg-gray-lightest cursor-not-allowed' : 'bg-white'} ${className}`}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default Input;
