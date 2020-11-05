import React, { Component } from 'react';
import { fetchUrl } from '../Api-fetch/fetchUrl';
import Repo from '../Components/Repo/Repo';
import Search from '../Components/Search/Search';
import clearHistory from '../Api-fetch/clearHistory';
import History from '../Components/History/History';

export default class RepoPage extends Component {

  state = {
    url: '',
    method: 'GET',
    body: '',
    response: {},
    history: [],
  }

  handleSubmit = async(event) => {
    event.preventDefault();
      
    const data = await fetchUrl(this.state.url, this.state.method);
    const response = await data.json();

    this.setState (state => ({
      response,
      history: [
        ...this.state.history,
        { url: state.ur, method: state.method }
      ],
      url: '',
    }));

    this.setState({ history: clearHistory(this.state.history) });
  }

  handleClick = async(url, method) => {
    const json = await fetchUrl(url, method);
    const response = await json.json();

    this.setState({ response, url: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {
      url,
      method,
      body,
      response,
      history
    } = this.state;

    return (
      <>
        <div>
          <div>
            <Repo
              url={url}
              method={method}
              body={body}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <History
              history={history}
              onClick={this.handleClick}
            />
            <Search
              response={response}
            />
          </div>
        </div>
      </>
    );
  }
}
