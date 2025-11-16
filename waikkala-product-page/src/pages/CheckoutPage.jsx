import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/containers/Footer';
import BillingForm from '../components/composite/BillingForm';
import CheckoutOrderSummary from '../components/composite/CheckoutOrderSummary';
import { assets, productData } from '../utils/assets';

const CheckoutPage = ({ cartItems }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const billingFormRef = useRef(null);

  const steps = [
    { number: 1, label: 'Billing Info' },
    { number: 2, label: 'Payment' },
    { number: 3, label: 'Confirmation' },
  ];

  const handleBillingSubmit = (billingData) => {
    console.log('Billing Data:', billingData);
    // Move to next step or process order
    alert('Order submitted successfully!');
    navigate('/');
  };

  const handlePlaceOrder = () => {
    // Trigger form submission
    if (billingFormRef.current) {
      const form = billingFormRef.current.querySelector('form');
      if (form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <div className="w-full bg-gray-lightest overflow-x-hidden min-h-screen">
      {/* Checkout Header Banner */}
      <div
        className="w-full py-12 sm:py-16 px-4 relative overflow-hidden"
        style={{
          backgroundColor: '#02261C',
          backgroundImage: `url(${assets.images.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-10 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-20 h-20 border-2 border-white rounded-full"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img
                src={assets.images.logo}
                alt="Waikkala Grinding Mills"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Billing & Dispatch Details
          </h1>
          <p className="text-sm sm:text-base text-gray-light">
            Complete Your order for Ceylon Raga Reserve
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="w-full bg-white py-6 px-4 border-b border-gray-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all ${
                      step.number === currentStep
                        ? 'bg-secondary text-white scale-110'
                        : step.number < currentStep
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-lighter text-gray-medium'
                    }`}
                  >
                    {step.number < currentStep ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className={`mt-2 text-xs sm:text-sm font-semibold ${
                    step.number === currentStep ? 'text-primary' : 'text-gray-medium'
                  }`}>
                    {step.label}
                  </span>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-16 md:w-24 h-1 mx-2 ${
                    step.number < currentStep ? 'bg-green-500' : 'bg-gray-lighter'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Billing Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-custom-md p-6" ref={billingFormRef}>
              <BillingForm onSubmit={handleBillingSubmit} />
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <CheckoutOrderSummary
              items={cartItems}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer logoSrc={assets.images.logo} socialIcons={productData.socialIcons} />
    </div>
  );
};

CheckoutPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      quantity: PropTypes.number.isRequired,
      weight: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CheckoutPage;