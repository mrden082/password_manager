import React, { useState } from 'react';

type SearchListProps = {
  onSearch: (query: string) => void;
};

const SearchList: React.FC<SearchListProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <input
        type="text"
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск..."
      />
    </div>
  );
};

export default SearchList;
