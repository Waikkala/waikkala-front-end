import PropTypes from 'prop-types';

const PaymentOptions = ({ className = '' }) => {
  const paymentMethods = ['VISA', 'MC', 'AMEX'];

  return (
    <div className={`border-l-4 border-secondary rounded-lg w-full ${className}`}>
      <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-3 sm:space-y-4">
        <h4 className="text-xs sm:text-sm font-bold text-primary">SECURE PAYMENT OPTIONS</h4>
        <div className="flex items-center justify-center sm:justify-end gap-2 flex-wrap">
          {paymentMethods.map((method) => (
            <div
              key={method}
              className="bg-white border border-gray-lighter px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs font-bold text-gray"
            >
              {method}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PaymentOptions.propTypes = {
  className: PropTypes.string,
};

export default PaymentOptions;
