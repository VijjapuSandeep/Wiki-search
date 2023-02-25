import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './SearchForm';
import SelectedResult from './SelectedResult';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    axios
      .get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&origin=*`)
      .then(response => {
        setSearchResults(response.data.query.search.slice(0, 5));
        setSelectedResult(null);
      })
  }

  function handleResultClick(result) {
    setSelectedResult(result);
  }

  function handleViewMore() {
    window.open(`https://en.wikipedia.org/?curid=${selectedResult.pageid}`, '_blank');
  }

  function handleBack() {
    setSelectedResult(null);
  }

  return (
    <div style={{ background: "antiquewhite", height: "100vh", padding: "25px" }} class="bg-container">
      {!selectedResult ? (
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} searchResults={searchResults} handleResultClick={handleResultClick} />
      ) : (
        <SelectedResult selectedResult={selectedResult} handleBack={handleBack} handleViewMore={handleViewMore} />
      )}
    </div>
  );
}

export default Search;
