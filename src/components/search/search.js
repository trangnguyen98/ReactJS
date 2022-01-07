import React from "react";
import "./search.css";
function Search() {
  return (
    // <div className="container">
    <div className="row search mt-40">
      <div className="col-sm-9 d-flex align-items-center">
        <div className="search-btn d-flex align-items-center">
          <i className="search-icon ti-search" />
        </div>
        <div class="input-group mb-3 search-from">
          <input
            id="search"
            type="text"
            class="form-control"
            placeholder="Living room"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </div>
      <div className="col-sm-3 search-menu">
        <select
          className="form-select search-menu-list"
          aria-label="Default select example"
        >
          <option selected>Best match</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
    // </div>
  );
}

export default Search;
