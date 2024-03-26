// Search.tsx

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Assuming you have installed the react-icons library

const Search: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="py-2 pl-10 pr-4 bg-[#F5F3FF] rounded-full w-[370.3px] h-[35px]"
      />
      <div className="absolute inset-y-0 right-12 pl-3 flex items-center">
        <FiSearch className="text-[#5041BC]" />
      </div>
    </form>
  );
};

export default Search;



