import React from 'react';

export interface SearchResultProps {
  id: string;
  header: string;
  body: string;
  url: string;
  imageUrl?: string;
}

export function SearchResult({header, body, url, imageUrl}: SearchResultProps) {
  return (
    <div className="search-result">
      <h3>
        <a href={url}>
          {header}
        </a>
      </h3>
      <p>{body}</p>
    </div>
  );
}
