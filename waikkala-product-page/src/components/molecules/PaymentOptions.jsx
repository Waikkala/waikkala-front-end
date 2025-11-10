import PropTypes from 'prop-types';

const PaymentOptions = ({ className = '' }) => {
  const paymentMethods = ['VISA', 'MC', 'AMEX'];

  return (
    <div className={`border-l-4 border-secondary rounded-lg ${className}`}>
      <div className="px-6 py-5 space-y-4">
        <h4 className="text-sm font-bold text-primary">SECURE PAYMENT OPTIONS</h4>
        <div className="flex items-center justify-end gap-2">
          {paymentMethods.map((method) => (
            <div
              key={method}
              className="bg-white border border-gray-lighter px-4 py-2 rounded text-xs font-bold text-gray"
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
