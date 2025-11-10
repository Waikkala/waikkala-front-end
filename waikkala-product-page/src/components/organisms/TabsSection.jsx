import { useState } from 'react';
import PropTypes from 'prop-types';

const TabsSection = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-custom-sm p-4 sm:p-6 md:p-8 mt-4 sm:mt-6 w-full overflow-x-hidden">
      {/* Tab Headers */}
      <div className="flex justify-center border-b-2 border-[#e0e0e0] mb-4 sm:mb-6 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-xs sm:text-sm font-secondary transition-all relative whitespace-nowrap ${
              activeTab === index
                ? 'text-primary font-bold'
                : 'text-gray hover:text-primary'
            }`}
          >
            {tab.title}
            {activeTab === index && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] sm:h-[3px] bg-secondary"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-4 sm:space-y-5 w-full">
        {tabs[activeTab].content.map((section, index) => (
          <div key={index} className="space-y-2 sm:space-y-3">
            {section.type === 'paragraph' && (
              <p className="text-sm sm:text-base text-[#555555] leading-6 sm:leading-7 text-center px-2">
                {section.text}
              </p>
            )}
            {section.type === 'heading' && (
              <h4 className="text-base sm:text-lg font-bold text-primary text-center pt-2">
                {section.text}
              </h4>
            )}
            {section.type === 'list' && (
              <ul className="text-sm sm:text-base text-[#555555] leading-6 sm:leading-7 text-center list-none">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

TabsSection.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.oneOf(['paragraph', 'heading', 'list']).isRequired,
          text: PropTypes.string,
          items: PropTypes.arrayOf(PropTypes.string),
        })
      ).isRequired,
    })
  ).isRequired,
};

export default TabsSection;
