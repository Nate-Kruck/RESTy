import React from 'react';
import PropTypes from 'prop-types';

function Request({ method, url, onClick }) {
  return (
    <li onClick={() => onClick(url, method)}>
      <p>{method}</p>
      <p>{url}</p>
    </li>
  );
}

Request.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Request;
