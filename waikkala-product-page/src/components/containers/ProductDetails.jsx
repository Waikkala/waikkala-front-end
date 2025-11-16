import PropTypes from 'prop-types';
import Badge from '../base/Badge';
import Button from '../base/Button';
import QuantitySelector from '../composite/QuantitySelector';
import PackageWeightSelector from '../composite/PackageWeightSelector';
import DeliveryInfo from '../composite/DeliveryInfo';

const ProductDetails = ({
  title,
  subtitle,
  price,
  currency = 'LKR',
  productImage,
  inStock = true,
  deliveryIcon,
  clockIcon,
  onOrder,
  onAddToCart,
  onQuantityChange,
  onWeightChange
}) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 w-full">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">{title}</h1>

      {/* Subtitle */}
      <h2 className="text-xl sm:text-2xl font-bold text-secondary">{subtitle}</h2>

      {/* Stock Status */}
      {inStock && <Badge variant="success">✓ In Stock</Badge>}

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="text-lg sm:text-xl font-bold text-gray">{currency}</span>
        <span className="text-3xl sm:text-4xl font-bold text-primary">{price}</span>
      </div>

      {/* Package Weight Selector */}
      <PackageWeightSelector
        productImage={productImage}
        onWeightChange={onWeightChange}
      />

      {/* Quantity Selector */}
      <QuantitySelector onQuantityChange={onQuantityChange} />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Button
          variant="primary"
          size="lg"
          className="flex-1"
          onClick={onAddToCart}
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            ADD TO CART
          </span>
        </Button>
        <Button
          variant="primary"
          size="lg"
          className="flex-1"
          onClick={onOrder}
        >
          PLACE ORDER
        </Button>
      </div>

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
  productImage: PropTypes.string,
  inStock: PropTypes.bool,
  deliveryIcon: PropTypes.string.isRequired,
  clockIcon: PropTypes.string.isRequired,
  onOrder: PropTypes.func,
  onAddToCart: PropTypes.func,
  onQuantityChange: PropTypes.func,
  onWeightChange: PropTypes.func,
};

export default ProductDetails;
