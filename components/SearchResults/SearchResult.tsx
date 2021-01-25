import React from 'react';

export interface SearchResultProps {
  id: string;
  header: string;
  body: string;
  url: string;
  presentationUrl?: string;
  imageUrl?: string;
}

function trimUrl(url: string) {
  if (url.startsWith('https://')) {
    return url.slice('https://'.length);
  }
  if (url.startsWith('http://')) {
    return url.slice('http://'.length);
  }
  throw new Error('Not a valid URL');
}

export function SearchResult({header, body, url, presentationUrl}: SearchResultProps) {
  return (
    <div className="search-result">
      <cite>{trimUrl(url)}</cite>
      <h3>
        <a href={url}>
          {header}
        </a>
      </h3>
      <p>{body}</p>
    </div>
  );
}
