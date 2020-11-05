import React from 'react';
import {
  render,
  cleanup
} from '@testing-library/react';
import Request from './Request';

describe('Request Testing', () => {
  afterEach(() => cleanup());

  it('Makes a request onClick', () => {
    const { asFragment } = render(<Request
      method="method"
      url="url"
      onClick={() => {}}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
