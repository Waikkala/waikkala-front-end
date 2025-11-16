import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../base/Button';

const CheckoutOrderSummary = ({ items, onPlaceOrder }) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 250.00;
  const taxRate = 0.05; // 5% tax
  const tax = subtotal * taxRate;

  // Apply discount if coupon is valid
  const discount = appliedCoupon ? appliedCoupon.discount : 0;
  const total = subtotal + shipping + tax - discount;

  const formatPrice = (price) => {
    return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleApplyCoupon = () => {
    // Simple coupon validation (you can expand this)
    const validCoupons = {
      'SAVE25': { discount: 25, type: 'fixed' },
      'WELCOME10': { discount: subtotal * 0.1, type: 'percentage' },
    };

    if (validCoupons[couponCode.toUpperCase()]) {
      setAppliedCoupon(validCoupons[couponCode.toUpperCase()]);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code');
      setAppliedCoupon(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-custom-md p-6 sticky top-8">
      <h2 className="text-lg sm:text-xl font-bold text-primary mb-4 pb-3 border-b-2 border-gray-lighter">
        Order Summary
      </h2>

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
              <p className="text-sm font-bold text-primary">LKR {formatPrice(item.price)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Coupon Code */}
      <div className="mb-6 pb-6 border-b border-gray-lighter">
        <h3 className="text-base font-bold text-primary mb-3">Coupon Code</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter Coupon code"
            className="flex-1 px-4 py-2 border-2 border-gray-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
          <button
            onClick={handleApplyCoupon}
            className="px-6 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            APPLY COUPON
          </button>
        </div>
        {couponError && <p className="text-red-500 text-xs mt-2">{couponError}</p>}
        {appliedCoupon && (
          <p className="text-green-600 text-xs mt-2">✓ Coupon applied successfully!</p>
        )}
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-medium">Subtotal</span>
          <span className="font-semibold text-primary">LKR {formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-medium">Shipping</span>
          <span className="font-semibold text-primary">LKR {formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-medium">Tax (Estimated)</span>
          <span className="font-semibold text-primary">LKR {formatPrice(tax)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-medium">Discount</span>
            <span className="font-semibold text-green-600">- LKR {formatPrice(discount)}</span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="mb-6 p-4 bg-primary rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-white">Total</span>
          <span className="text-2xl font-bold text-white">LKR {formatPrice(total)}</span>
        </div>
      </div>

      {/* Place Order Button */}
      <Button
        variant="primary"
        size="lg"
        className="w-full mb-4"
        onClick={onPlaceOrder}
      >
        PLACE ORDER
      </Button>

      {/* Secure Payment Notice */}
      <div className="flex items-center justify-center gap-2 text-xs text-gray-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span>Secure SSL Encrypted Payment</span>
      </div>
    </div>
  );
};

CheckoutOrderSummary.propTypes = {
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

export default CheckoutOrderSummary;