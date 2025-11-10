import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const DeliveryInfo = ({ deliveryIcon, clockIcon, className = '' }) => {
  return (
    <div className={`bg-bg-light rounded-md p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-5 w-full ${className}`}>
      <div className="flex items-center gap-2 sm:gap-3">
        <Icon src={deliveryIcon} alt="Delivery" size={20} className="sm:w-6 sm:h-6" />
        <span className="text-xs sm:text-sm font-bold text-gray-medium">Island-wide Delivery</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <Icon src={clockIcon} alt="Delivery Time" size={20} className="sm:w-6 sm:h-6" />
        <span className="text-xs sm:text-sm text-gray-medium">
          <span className="font-bold">3-4 Days</span> Delivery
        </span>
      </div>
    </div>
  );
};

DeliveryInfo.propTypes = {
  deliveryIcon: PropTypes.string.isRequired,
  clockIcon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DeliveryInfo;
