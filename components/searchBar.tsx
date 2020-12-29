import React from 'react';
import Image from 'next/image'

function SearchBar () {
  return (
    <header className="p-6 w-screen mx-auto bg-white-000">          
      <Image
        src="/images/google-logo.png"
        alt="Google Search Logo"
        width={400}
        height={225}
      />
    </header>
  );
}

export default SearchBar;