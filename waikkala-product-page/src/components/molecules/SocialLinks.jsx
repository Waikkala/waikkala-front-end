import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const SocialLinks = ({ icons, className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border-2 border-secondary rounded-full hover:bg-secondary hover:border-secondary transition-all duration-300"
          aria-label={icon.label}
        >
          <Icon src={icon.src} alt={icon.label} size={icon.size || 20} />
        </a>
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      size: PropTypes.number,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default SocialLinks;
