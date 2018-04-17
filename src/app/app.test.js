import React from 'react';
import Renderer from 'react-test-renderer';

import App from './app';

test('renders landing message correctly', () => {
  const app = Renderer.create(<App/>).toJSON();
  expect(app).toMatchSnapshot();
});