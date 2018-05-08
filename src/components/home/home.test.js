import React from 'react';
import Renderer from 'react-test-renderer';

import { Home } from './home';

describe('Home Component', () => {
  test('renders landing message correctly', () => {
    const home = Renderer.create(<Home text="hey" getText={() => {}} data={{ip: '90'}}/>).toJSON();
    expect(home).toMatchSnapshot();
  });
});
