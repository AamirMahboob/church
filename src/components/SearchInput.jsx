import React from 'react';
import { FaSistrix } from 'react-icons/fa'; // Import the search icon from react-icons


const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative rounded-full shadow-md w-full">
      <input
        type="text"
        className="w-full py-2 pl-4 pr-12 rounded-full border border-gray-300   "
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2  ">
        <FaSistrix className="h-5 w-5 text-yellow-500  "   />  
      </div>
    </div>
  );
};

export default SearchInput;
