import React from 'react';
import {
  render,
  cleanup,
  screen
} from '@testing-library/react';
import Repo from '../Repo/Repo';

describe('Repo Testing', () => {
  afterEach(() => cleanup());

  it('renders a Repo', () => {
    const repo = {
      url: 'www.google.com',
      name: 'restyAPI',
      login: 'Nate-Kruck'
    };
    
    const { asFragment } = render(<Repo repo={repo} />);

    screen.getByText('restyAPI');

    expect(asFragment()).toMatchSnapshot();
  });
});
