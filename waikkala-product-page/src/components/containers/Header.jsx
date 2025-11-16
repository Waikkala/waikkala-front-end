import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import { assets } from '../../utils/assets';

const Header = ({ logoSrc, cartCount = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCartClick = () => {
    if (cartCount > 0) {
      navigate('/cart');
    }
  };

  const headerStyle = {
    backgroundColor: '#02261C',
    backgroundImage: `url(${assets.images.bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <header className="w-full overflow-x-hidden" style={headerStyle}>
      {/* Top Banner with Logo and Promotional Text */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 gap-2">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
          <img src={logoSrc} alt="Waikkala Grinding Mills" className="h-10 sm:h-12 w-auto" />
        </div>

        {/* Promotional Banner */}
        <div className="hidden md:flex items-center gap-2 text-white flex-1 justify-center">
          <span className="text-sm">▶</span>
          <p className="text-xs sm:text-sm font-semibold text-center">
            Free Shipping on EVERY ORDER! | Premium Quality Guaranteed
          </p>
        </div>

        {/* Spacer for alignment */}
        <div className="hidden md:block w-10 sm:w-12 flex-shrink-0"></div>
      </div>

      {/* Navigation and Cart */}
      <div className="bg-white border-t border-gray-lighter w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="px-4 sm:px-6 py-2 bg-white border-2 border-gray-300 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors whitespace-nowrap">
              Contacts
            </button>
            <button className="px-4 sm:px-6 py-2 bg-white border-2 border-gray-300 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors whitespace-nowrap">
              Order Tracking
            </button>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center justify-end">
            <button
              onClick={handleCartClick}
              className={`relative p-2 transition-opacity ${cartCount > 0 ? 'hover:opacity-80 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
              disabled={cartCount === 0}
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C15.895 17 15 17.895 15 19C15 20.105 15.895 21 17 21C18.105 21 19 20.105 19 19C19 17.895 18.105 17 17 17ZM9 19C9 20.105 8.105 21 7 21C5.895 21 5 20.105 5 19C5 17.895 5.895 17 7 17C8.105 17 9 17.895 9 19Z"
                  stroke="#C17A3B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  cartCount: PropTypes.number,
};

export default Header;
