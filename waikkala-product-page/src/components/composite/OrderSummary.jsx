import PropTypes from 'prop-types';
import Button from '../base/Button';

const OrderSummary = ({ items, onPlaceOrder }) => {
  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 250.00;
  const taxRate = 0.05; // 5% tax
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  const formatPrice = (price) => {
    return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="bg-white rounded-lg shadow-custom-md p-6">
      <h2 className="text-lg sm:text-xl font-bold text-primary mb-4">Order Summary</h2>

      {/* Product Items */}
      <div className="space-y-4 mb-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-primary">{item.title}</h4>
              <p className="text-xs text-secondary">{item.subtitle}</p>
              <p className="text-xs text-gray mt-1">
                Quantity: {item.quantity} × {item.weight}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-primary">LKR {formatPrice(item.price * item.quantity)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="border-t border-gray-lighter pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray">Subtotal</span>
          <span className="font-semibold text-primary">LKR {formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray">Shipping</span>
          <span className="font-semibold text-primary">LKR {formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray">Tax (Estimated)</span>
          <span className="font-semibold text-primary">LKR {formatPrice(tax)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="mt-6 p-4 bg-primary rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-white">Total</span>
          <span className="text-2xl font-bold text-white">LKR {formatPrice(total)}</span>
        </div>
      </div>

      {/* Place Order Button */}
      <Button
        variant="primary"
        size="lg"
        className="w-full mt-6"
        onClick={onPlaceOrder}
      >
        PLACE ORDER
      </Button>

      {/* Secure Payment Notice */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span>Secure SSL Encrypted Payment</span>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      quantity: PropTypes.number.isRequired,
      weight: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onPlaceOrder: PropTypes.func.isRequired,
};

export default OrderSummary;