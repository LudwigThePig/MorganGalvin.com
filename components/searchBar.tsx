import React, { useState } from 'react';

export function SearchBar() {
  const [searchText, setSearchText] = useState<string>('https://morgangalvin.com');
  function handleSearch() {
  }
  function handleSearchTextInput(e: React.ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setSearchText(text);
    
  }
  function handleClear() {
    setSearchText('');
  }
  return (
    <div className="border rounded-3xl border-gray-200 flex flex-1 flex-wrap pl-2 pt-2">
      <input
        className="leading-8 h-8 outline-none mb-1 ml-3 flex flex-1 arial"
        maxLength={2048}
        name="q"
        type="text"
        aria-autocomplete="both"
        aria-haspopup="false"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        role="combobox"
        spellCheck="false"
        title="Search"
        value={searchText}
        onChange={handleSearchTextInput}
        aria-label="Search"
      ></input>

      {/* TODO: Fix dry */}
      <button onClick={handleClear} className="flex flex-none divide-x h-full align-middle -mt-1">
        {/* Clear Button */}
        <svg
          className="h-full mx-3 align-middle block"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          height="24px" width="24px" viewBox="0 0 24 24"
          fill="#80868b"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </button>
      {/* Search Button */}
      <button onClick={handleSearch} className="h-full mr-3 -mt-1">
        <svg
          className="h-full align-middle block"
          focusable="false" 
          xmlns="http://www.w3.org/2000/svg"
          height="24px" width="24px" viewBox="0 0 24 24"
          fill="#4285f4"
          >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </button>
    </div>
  );
}