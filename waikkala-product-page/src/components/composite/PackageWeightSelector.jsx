import { useState } from 'react';
import PropTypes from 'prop-types';

const PackageWeightSelector = ({ productImage, onWeightChange }) => {
  const [selectedWeight, setSelectedWeight] = useState('100g');

  const weightOptions = [
    { weight: '100g', oz: '3.5oz' },
    { weight: '250g', oz: '8.8oz' },
    { weight: '500g', oz: '17.6oz' },
    { weight: '1000g', oz: '35.2oz' },
  ];

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
    onWeightChange?.(weight);
  };

  return (
    <div className="bg-gray-lightest border border-gray-300 rounded-lg p-4 sm:p-5 w-full">
      <h3 className="text-sm sm:text-base font-bold text-primary mb-3 flex items-center gap-2">
        <span>📦</span> Package Weight
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {weightOptions.map((option) => (
          <button
            key={option.weight}
            onClick={() => handleWeightChange(option.weight)}
            className="flex flex-col items-center justify-center p-2 sm:p-3 transition-all hover:scale-105"
          >
            <div className={`w-16 h-16 sm:w-20 sm:h-20 mb-2 rounded-md flex items-center justify-center overflow-hidden transition-all ${
              selectedWeight === option.weight
                ? 'ring-4 ring-[#C17A3B] shadow-[0_0_15px_rgba(193,122,59,0.6)] scale-105'
                : 'ring-2 ring-transparent hover:ring-gray-300'
            }`}>
              {productImage ? (
                <img
                  src={productImage}
                  alt={`Package ${option.weight}`}
                  className="w-full h-full object-contain p-1"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary"></div>
              )}
            </div>
            <span className="text-xs sm:text-sm font-bold text-primary">{option.weight}</span>
            <span className="text-xs text-gray">{option.oz}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

PackageWeightSelector.propTypes = {
  productImage: PropTypes.string,
  onWeightChange: PropTypes.func,
};

export default PackageWeightSelector;