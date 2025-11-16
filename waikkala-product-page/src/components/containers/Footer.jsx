import PropTypes from 'prop-types';
import SocialLinks from '../composite/SocialLinks';
import { assets } from '../../utils/assets';

const Footer = ({ logoSrc, socialIcons }) => {
  const footerStyle = {
    backgroundColor: '#02261C',
    backgroundImage: `url(${assets.images.bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <footer className="w-full py-6 px-4 sm:px-6 md:px-8 lg:px-12 overflow-x-hidden" style={footerStyle}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-3 w-full">
        {/* Logo */}
        <div className="w-20 h-20 sm:w-[90px] sm:h-[90px] overflow-hidden rounded-sm shadow-custom-lg flex-shrink-0">
          <img
            src={logoSrc}
            alt="Waikkala Grinding Mills"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Company Info */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full px-4">
          <h3 className="text-base sm:text-lg font-bold text-secondary uppercase tracking-wider font-secondary text-center">
            Waikkala Grinding Mills
          </h3>
          <p className="text-xs sm:text-sm text-[#cccccc] text-center leading-relaxed font-primary max-w-3xl">
            At Waikkala Grinding Mills (WGM), we take pride in being one of Sri Lanka&apos;s most trusted names in premium spices, grains, and herbal products.
            <br className="hidden sm:block" />
            <span className="block sm:inline"> 🌿 Waikkala Grinding Mills – Where Tradition Meets Global Standards.</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="pt-2">
          <SocialLinks icons={socialIcons} />
        </div>

        {/* Copyright */}
        <div className="border-t border-[#333333] w-full pt-3 mt-2">
          <p className="text-sm text-[#888888] text-center font-primary">
            Copyright 2025 © Waikkala Grinding Mills. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  socialIcons: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
