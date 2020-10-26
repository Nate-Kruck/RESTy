import React from 'react';
import PropTypes from 'prop-types';

function Repo({ repo }) {
  return (
    <div>
      <li>
        <a href={repo.url} target="_blank" rel="noreferrer">
          <h1 data-testid="repo">{repo.name}</h1>
        </a>
      </li>
      <p>{repo.login}</p>
    </div>
  );
}

Repo.propTypes = {
  repo: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string
  }).isRequired
};

export default Repo;
