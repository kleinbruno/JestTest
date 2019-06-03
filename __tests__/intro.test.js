import React from 'react';
import Intro from '../src/intro';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Intro>Anything</Intro>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders without children', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});