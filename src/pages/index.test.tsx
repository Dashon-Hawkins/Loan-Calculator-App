import React from 'react';
import renderer from 'react-test-renderer';
import IndexPage from './';

describe('Index page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IndexPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
