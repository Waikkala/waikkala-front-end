import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';
import ProductImage from '../components/composite/ProductImage';
import ProductDetails from '../components/containers/ProductDetails';
import TabsSection from '../components/containers/TabsSection';
import { assets, productData } from '../utils/assets';

const ProductPage = ({ cartCount, onAddToCart }) => {
  const navigate = useNavigate();
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('100g');

  const handleOrder = () => {
    // Create cart item
    const cartItem = {
      id: Date.now().toString(),
      image: productData.images[0],
      title: productData.title,
      subtitle: productData.subtitle,
      quantity: currentQuantity,
      weight: selectedWeight,
      price: parseFloat(productData.price.replace(/,/g, '')),
    };

    // Add to cart
    onAddToCart(cartItem);

    // Navigate to cart
    navigate('/cart');
  };

  const handleAddToCart = () => {
    // Create cart item
    const cartItem = {
      id: Date.now().toString(),
      image: productData.images[0],
      title: productData.title,
      subtitle: productData.subtitle,
      quantity: currentQuantity,
      weight: selectedWeight,
      price: parseFloat(productData.price.replace(/,/g, '')),
    };

    // Add to cart
    onAddToCart(cartItem);

    // Show success message
    alert(`Added ${currentQuantity} item(s) (${selectedWeight}) to cart!`);
  };

  const handleQuantityChange = (quantity) => {
    setCurrentQuantity(quantity);
  };

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
  };

  return (
    <div className="w-full bg-gray-lightest overflow-x-hidden">
      {/* Header */}
      <Header logoSrc={assets.images.logo} cartCount={cartCount} />

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6">
        <div className="bg-white rounded-lg sm:rounded-xl shadow-custom-md p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
            {/* Product Images */}
            <div className="flex items-start justify-center w-full">
              <ProductImage images={productData.images} alt={productData.title} />
            </div>

            {/* Product Details */}
            <div className="flex items-start w-full">
              <ProductDetails
                title={productData.title}
                subtitle={productData.subtitle}
                price={productData.price}
                currency={productData.currency}
                productImage={assets.images.tbag}
                deliveryIcon={assets.icons.delivery}
                clockIcon={assets.icons.clock}
                onOrder={handleOrder}
                onAddToCart={handleAddToCart}
                onQuantityChange={handleQuantityChange}
                onWeightChange={handleWeightChange}
              />
            </div>
          </div>

          {/* Tabs Section */}
          <TabsSection tabs={productData.tabs} />
        </div>
      </main>

      {/* Footer */}
      <Footer logoSrc={assets.images.logo} socialIcons={productData.socialIcons} />
    </div>
  );
};

ProductPage.propTypes = {
  cartCount: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductPage;
