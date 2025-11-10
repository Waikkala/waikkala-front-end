import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import ProductImage from '../components/molecules/ProductImage';
import ProductDetails from '../components/organisms/ProductDetails';
import TabsSection from '../components/organisms/TabsSection';
import { assets, productData } from '../utils/assets';

const ProductPage = () => {
  const handleOrder = () => {
    alert('Order placed! Thank you for your purchase.');
  };

  return (
    <div className="bg-gray-lightest">
      {/* Header */}
      <Header logoSrc={assets.images.logo} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="bg-white rounded-xl shadow-custom-md p-6 sm:p-8 lg:p-10">
          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Product Images */}
            <div className="flex items-start justify-center">
              <ProductImage images={productData.images} alt={productData.title} />
            </div>

            {/* Product Details */}
            <div className="flex items-start lg:pt-4">
              <ProductDetails
                title={productData.title}
                subtitle={productData.subtitle}
                price={productData.price}
                currency={productData.currency}
                weight={productData.weight}
                deliveryIcon={assets.icons.delivery}
                clockIcon={assets.icons.clock}
                onOrder={handleOrder}
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
