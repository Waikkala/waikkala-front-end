import { useState } from 'react';
import PropTypes from 'prop-types';

const QuantitySelector = ({ initialQuantity = 1, onQuantityChange, className = '' }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(value);
    onQuantityChange?.(value);
  };

  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full ${className}`}>
      <span className="text-sm sm:text-base font-bold text-primary">Quantity:</span>
      <div className="flex items-center border-2 border-gray-lighter rounded-md overflow-hidden">
        <button
          onClick={handleDecrease}
          style={{ backgroundColor: '#02261C' }}
          className="text-white w-10 h-10 flex items-center justify-center text-xl font-secondary hover:opacity-90 transition-all"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={handleChange}
          min="1"
          className="w-16 h-10 text-center font-bold border-none focus:outline-none"
        />
        <button
          onClick={handleIncrease}
          style={{ backgroundColor: '#02261C' }}
          className="text-white w-10 h-10 flex items-center justify-center text-xl font-secondary hover:opacity-90 transition-all"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

QuantitySelector.propTypes = {
  initialQuantity: PropTypes.number,
  onQuantityChange: PropTypes.func,
  className: PropTypes.string,
};

export default QuantitySelector;
