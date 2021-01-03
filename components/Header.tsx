import React from 'react';
import Image from 'next/image'
import { SearchBar } from './Searchbar';

export function Header () {
  const logoStyles = {
    large: {
      width: 92,
      height: 30,
      className: 'logo logo-large'
    }
  };

  const logoSize = 'large';

  return (
    <header className="w-screen mx-auto bg-white-000">       
      <div className="top-searchbar flex flex-1 flex-wrap h-12 mt-4">
        <div className={logoStyles[logoSize].className + ' absolute pt-3 px-9'}>
          <Image
            src="/images/google-logo.png"
            alt="Google Search Logo"
            width={logoStyles[logoSize].width}
            height={logoStyles[logoSize].height}
          />
        </div>
        <SearchBar />
      </div> 
    </header>
  );
}
