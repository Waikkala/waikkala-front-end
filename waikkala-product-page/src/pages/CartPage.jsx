import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/containers/Footer';
import CartItem from '../components/composite/CartItem';
import OrderSummary from '../components/composite/OrderSummary';
import { assets } from '../utils/assets';

const CartPage = ({ cartItems, cartCount }) => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert('Order placed successfully! Thank you for your purchase.');
    // Here you would typically process the order and navigate to a confirmation page
    navigate('/');
  };

  const handleRemoveItem = (itemId) => {
    // This would be implemented to remove items from cart
    console.log('Remove item:', itemId);
  };

  return (
    <div className="w-full bg-gray-lightest overflow-x-hidden min-h-screen">
      {/* Cart Header Banner */}
      <div
        className="w-full py-12 sm:py-16 px-4 relative overflow-hidden"
        style={{ backgroundColor: '#02261C' }}
      >
        {/* Background Pattern (decorative) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-10 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-20 h-20 border-2 border-white rounded-full"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img
                src={assets.images.logo}
                alt="Waikkala Grinding Mills"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Your Tea Collection
          </h1>
          <p className="text-sm sm:text-base text-gray-light">
            Reviewing Your Reserve Selections
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <svg
              className="w-24 h-24 mx-auto text-gray-light mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-primary mb-2">Your cart is empty</h2>
            <p className="text-gray mb-6">Add some products to get started!</p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Left Column - Shopping Cart */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-custom-md p-6">
                {/* Cart Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-lighter">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary">
                    Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                  </h2>
                </div>

                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <CartItem
                      key={index}
                      item={item}
                      onRemove={handleRemoveItem}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary
                items={cartItems}
                onPlaceOrder={handlePlaceOrder}
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer logoSrc={assets.images.logo} socialIcons={[]} />
    </div>
  );
};

CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      quantity: PropTypes.number.isRequired,
      weight: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  cartCount: PropTypes.number.isRequired,
};

export default CartPage;