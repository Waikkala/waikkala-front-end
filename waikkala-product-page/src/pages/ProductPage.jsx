import { useState } from 'react';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';
import ProductImage from '../components/composite/ProductImage';
import ProductDetails from '../components/containers/ProductDetails';
import TabsSection from '../components/containers/TabsSection';
import { assets, productData } from '../utils/assets';

const ProductPage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('100g');

  const handleOrder = () => {
    alert(`Order placed!\nQuantity: ${currentQuantity}\nWeight: ${selectedWeight}\nThank you for your purchase.`);
  };

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + currentQuantity);
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

export default ProductPage;
