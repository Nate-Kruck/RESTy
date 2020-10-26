import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo/Repo';

function RepoList({ repos }) {
  const RepoElements = repos.map(repo => (
    <Repo key={repo.name} repo={repo}/>
  ));
 
  return (
    <div>
      <ul>{RepoElements}</ul>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string
  })).isRequired
};

export default RepoList;
