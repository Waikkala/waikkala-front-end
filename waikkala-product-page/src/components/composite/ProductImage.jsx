import { useState } from 'react';
import PropTypes from 'prop-types';

const ProductImage = ({ images, alt = 'Product', className = '' }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Main Image */}
      <div className="w-full max-w-[510px] h-[300px] sm:h-[400px] md:h-[510px] overflow-hidden rounded-lg shadow-custom-lg bg-white mx-auto">
        <img
          src={images[selectedImage]}
          alt={`${alt} - Main view`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-2 sm:gap-4 md:gap-8 justify-center overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-[100px] h-[80px] sm:w-[150px] sm:h-[120px] md:w-[240px] md:h-[187px] overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${
              selectedImage === index
                ? 'ring-2 sm:ring-4 ring-secondary scale-105'
                : 'hover:ring-2 hover:ring-gray-light'
            }`}
          >
            <img
              src={image}
              alt={`${alt} - Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

ProductImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default ProductImage;
