import React from 'react';
import PropTypes from 'prop-types';

function Repo({ url, method, body, onChange, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="url">
          URL
          <input
            type="text"
            name="url"
            value={url}
            onChange={onChange}
          />
        </label>
        <label htmlFor="method">HTTP Request method
          <select name="method" onChange={onChange} value={method}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
        <p>JSON data</p>
        <textarea name="body" onChange={onChange} value={body}></textarea>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

Repo.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};


export default Repo;
