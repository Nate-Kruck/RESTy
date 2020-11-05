import React from 'react';
import {
  render,
  cleanup
} from '@testing-library/react';
import Repo from '../Repo/Repo';

describe('Repo Testing', () => {
  afterEach(() => cleanup());

  it('renders a Repo', () => {
    const { asFragment } = render(<Repo
      url="blank"
      method="GET"
      body="blank"
      onChange={() => {}}
      onSubmit={() => {}}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
