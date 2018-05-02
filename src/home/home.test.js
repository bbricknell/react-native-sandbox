import React from 'react';
import Renderer from 'react-test-renderer';

import { Home } from './home';

test('renders landing message correctly', () => {
  const home = Renderer.create(<Home text="hey" getText={() => {}}/>).toJSON();
  expect(home).toMatchSnapshot();
});