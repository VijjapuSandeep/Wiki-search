import React from 'react';

function SearchResults({ searchResults, handleResultClick }) {
    return (
      <ul style={{ listStyleType: "none", padding: "25px" }}>
        {searchResults.map(result => (
          <li key={result.pageid}>
            <div class="d-flex justify-content-between m-3 border">
              <h3 class="">{result.title}</h3>
              <button class="btn btn-link" onClick={() => handleResultClick(result)}>Launch</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  export default SearchResults;