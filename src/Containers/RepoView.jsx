import React, { Component } from 'react';
import { getGitHubApi } from '../Api-fetch/github';
import Search from '../Components/Search/Search';

export default class RepoPage extends Component {

  state = {
    repos: [],
    endpoints: ''
  }

  handleSearch = () => {
    getGitHubApi(this.state.endpoints)
      .then(repos => this.setState({ repos }));
  }

  handleChange = ({ target }) => {
    this.setState({ endpoints: target.value });
  }

  render() {
    const { repos, endpoints } = this.state;

    return (
      <div>
        <Search
          onChange={this.handleChange}
          endpoints={endpoints}
        />
        <button onClick={this.handleSearch}>Get Repos</button>
      </div>
    );
  }
}
