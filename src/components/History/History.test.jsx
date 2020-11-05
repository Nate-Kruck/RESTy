import React from 'react';
import {
  render,
  cleanup
} from '@testing-library/react';
import History from './History';

describe('History Testing', () => {
  afterEach(() => cleanup());

  it('should render request from history', () => {
    const history = [
      {
        url: 'www.friend.com',
        method: 'GET'
      },
      {
        url: 'www.friend.com',
        method: 'POST'
      },
      {
        url: 'www.friend.com',
        method: 'DELETE'
      }
    ];
    
    const { asFragment } = render(<History
      history={history}
      url="blank"
      method="GET"
      onClick={() => {}}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
