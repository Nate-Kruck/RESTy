import React from 'react';
import {
  render,
  cleanup,
  screen
} from '@testing-library/react';
import RepoList from '../GitHubRepos/Repos';

describe('RepoList Testing', () => {
  afterEach(() => cleanup());

  it('renders a RepoList', () => {
    const repos = [
      {
        url: 'https://api.github/users/nate-kruck',
        name: 'restyAPI-1',
        login: 'nate-kruck',
      },
      {
        url: 'https://api.github/users/nate-kruck',
        name: 'restyAPI-2',
        login: 'nate-kruck',
      },
      {
        url: 'https://api.github/users/nate-kruck',
        name: 'restyAPI-3',
        login: 'nate-kruck',
      }
    ];
    const { asFragment } = render(<RepoList repos={repos} />);

    const allLogins = screen.getAllByText('nate-kruck');

    expect(allLogins.length).toEqual(3);

    expect(asFragment()).toMatchSnapshot();
  });
});
