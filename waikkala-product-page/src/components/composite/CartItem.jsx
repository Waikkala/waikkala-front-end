import PropTypes from 'prop-types';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-lighter">
      {/* Product Image */}
      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-base sm:text-lg font-bold text-primary">{item.title}</h3>
        <p className="text-sm text-secondary font-semibold">{item.subtitle}</p>
        <p className="text-xs sm:text-sm text-gray mt-1">
          Quantity: {item.quantity} × {item.weight}
        </p>
      </div>

      {/* Remove Button (optional for future) */}
      {onRemove && (
        <button
          onClick={() => onRemove(item.id)}
          className="text-gray-medium hover:text-red-500 transition-colors p-2"
          aria-label="Remove item"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    quantity: PropTypes.number.isRequired,
    weight: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func,
  onQuantityChange: PropTypes.func,
};

export default CartItem;