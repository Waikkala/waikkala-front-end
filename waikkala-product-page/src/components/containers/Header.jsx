import PropTypes from 'prop-types';
import SearchBar from '../composite/SearchBar';

const Header = ({ logoSrc }) => {
  const navItems = ['Products', 'Contacts', 'Order Tracking'];

  return (
    <header className="w-full overflow-x-hidden" style={{ backgroundColor: '#02261C' }}>
      {/* Top Banner with Logo and Promotional Text */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 gap-2">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
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

      {/* Navigation and Search Bar */}
      <div className="bg-white border-t border-gray-lighter w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Navigation */}
          <div className="flex items-center bg-white border-2 border-primary rounded-xl overflow-hidden">
            {navItems.map((item, index) => (
              <div key={item} className="relative flex items-center">
                <button className="px-3 sm:px-4 lg:px-6 py-2 text-xs sm:text-sm font-bold text-primary hover:bg-gray-lightest transition-colors whitespace-nowrap">
                  {item}
                </button>
                {index < navItems.length - 1 && (
                  <div className="h-6 w-px bg-primary" />
                )}
              </div>
            ))}
            <div className="flex items-center px-2">
              <svg
                className="w-3 h-3 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar className="flex-1 max-w-full sm:max-w-md" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired,
};

export default Header;
