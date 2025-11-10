import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder = 'Search for products...', onSearch, className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-3 px-4 py-3 border border-primary/65 rounded-xl">
        <svg
          className="w-6 h-6 text-gray"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder={placeholder}
          className="flex-1 outline-none bg-transparent text-gray-dark font-bold placeholder-gray-dark"
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  className: PropTypes.string,
};

export default SearchBar;
