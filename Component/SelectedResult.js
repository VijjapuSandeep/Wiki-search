import React from 'react';

function SelectedResult({ selectedResult, handleBack, handleViewMore }) {
    return (
      <div class="p-3">
        <h1>{selectedResult.title}</h1>
        <p>{selectedResult.snippet}</p>
        <div style={{ padding: "20px", paddingLeft: "15px", paddingRight: "15px" }} class="d-flex justify-content-between">
          <button class="btn btn-secondary" onClick={handleBack}>Back</button>
          <button class="btn btn-primary" onClick={handleViewMore}>View More</button>
        </div>
      </div>
    );
  }

  export default SelectedResult;