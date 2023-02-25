import React from 'react';
import SearchResults from './SearchResults';

function SearchForm({ searchTerm, setSearchTerm, handleSearch, searchResults, handleResultClick }) {
    return (
      <div style={{ padding: "15px" }} class="border">
        <form onSubmit={handleSearch}>
          <input type="text" placeholder='Search Here' value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
          {searchResults.length === 0 && <p>No Items Found!</p>}
        </form>
        <SearchResults searchResults={searchResults} handleResultClick={handleResultClick} />
      </div>
    );
  }


export default SearchForm;