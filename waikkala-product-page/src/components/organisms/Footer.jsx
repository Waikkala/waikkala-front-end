import PropTypes from 'prop-types';
import SocialLinks from '../molecules/SocialLinks';

const Footer = ({ logoSrc, socialIcons }) => {
  return (
    <footer className="py-6 px-6 sm:px-8 lg:px-12 mt-6" style={{ backgroundColor: '#02261C' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
        {/* Logo */}
        <div className="w-[90px] h-[90px] overflow-hidden rounded-sm shadow-custom-lg">
          <img
            src={logoSrc}
            alt="Waikkala Grinding Mills"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Company Info */}
        <div className="flex flex-col items-center gap-4 max-w-4xl w-full px-4">
          <h3 className="text-lg font-bold text-secondary uppercase tracking-wider font-secondary">
            Waikkala Grinding Mills
          </h3>
          <p className="text-sm text-[#cccccc] text-center leading-relaxed font-primary max-w-3xl">
            At Waikkala Grinding Mills (WGM), we take pride in being one of Sri Lanka&apos;s most trusted names in premium spices, grains, and herbal products.
            <br />
            🌿 Waikkala Grinding Mills – Where Tradition Meets Global Standards.
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
