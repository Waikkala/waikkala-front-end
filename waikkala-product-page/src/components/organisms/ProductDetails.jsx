import PropTypes from 'prop-types';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import QuantitySelector from '../molecules/QuantitySelector';
import PaymentOptions from '../molecules/PaymentOptions';
import DeliveryInfo from '../molecules/DeliveryInfo';

const ProductDetails = ({
  title,
  subtitle,
  price,
  currency = 'LKR',
  weight,
  inStock = true,
  deliveryIcon,
  clockIcon,
  onOrder
}) => {
  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <h1 className="text-3xl font-bold text-primary leading-tight">{title}</h1>

      {/* Subtitle */}
      <h2 className="text-2xl font-bold text-secondary">{subtitle}</h2>

      {/* Stock Status */}
      {inStock && <Badge variant="success">✓ In Stock</Badge>}

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold text-gray">{currency}</span>
        <span className="text-4xl font-bold text-primary">{price}</span>
      </div>

      {/* Package Weight */}
      <div className="bg-gray-lightest border-l-4 border-secondary rounded-lg p-5 max-w-xs">
        <h3 className="text-base font-bold text-primary mb-2">📦 Package Weight</h3>
        <p className="text-sm text-gray">{weight}</p>
      </div>

      {/* Payment Options */}
      <PaymentOptions />

      {/* Quantity Selector */}
      <QuantitySelector />

      {/* Place Order Button */}
      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={onOrder}
      >
        Place Order
      </Button>

      {/* Delivery Info */}
      <DeliveryInfo deliveryIcon={deliveryIcon} clockIcon={clockIcon} />
    </div>
  );
};

ProductDetails.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string,
  weight: PropTypes.string.isRequired,
  inStock: PropTypes.bool,
  deliveryIcon: PropTypes.string.isRequired,
  clockIcon: PropTypes.string.isRequired,
  onOrder: PropTypes.func,
};

export default ProductDetails;
