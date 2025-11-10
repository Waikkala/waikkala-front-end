import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const DeliveryInfo = ({ deliveryIcon, clockIcon, className = '' }) => {
  return (
    <div className={`bg-bg-light rounded-md p-4 flex gap-5 ${className}`}>
      <div className="flex items-center gap-3">
        <Icon src={deliveryIcon} alt="Delivery" size={24} />
        <span className="text-sm font-bold text-gray-medium">Island-wide Delivery</span>
      </div>
      <div className="flex items-center gap-3">
        <Icon src={clockIcon} alt="Delivery Time" size={24} />
        <span className="text-sm text-gray-medium">
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
