import React, { useState } from 'react';

export function SearchBar() {

  return (
    <div className="border rounded-3xl border-gray-200 flex flex-1 flex-wrap pl-2 pt-2">
      <input
        className="leading-8 h-8 outline-none mb-1 flex flex-1"
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
        value="https://morgangalvin.com"
        aria-label="Search"
      ></input>

      {/* Clear Button */}
      <div className="flex flex-1 divide-x">
        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
        <span></span>
      </div>
    </div>
  );
}