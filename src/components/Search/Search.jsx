import React from 'react';
import PropTypes from 'prop-types';

function Search({ endpoints, onChange }) {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="search"
        name="search"
        value={endpoints}
        onChange={onChange}
      />
    </div>
  );
}

Search.propTypes = {
  endpoints: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
