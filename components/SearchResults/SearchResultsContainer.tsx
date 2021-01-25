import React from 'react';
import { SearchResult, SearchResultProps } from './SearchResult';

export function SerachResultsContainer({results}: {results: SearchResultProps[]}) {
  return (
    <div className="serach-result-container">
      {results.map(result => <SearchResult key={result.id} {...result} />)}
    </div>
  );
}