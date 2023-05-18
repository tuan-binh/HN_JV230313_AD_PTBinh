import React from "react";
import "./Search.css";

function Search({ handleChangeTextSearch, textSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Here..."
        onChange={handleChangeTextSearch}
        value={textSearch}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default Search;
