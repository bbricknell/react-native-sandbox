import React from 'react';
import Renderer from 'react-test-renderer';

import { Button } from './button';

describe('Button Component', () => {
  test('renders button correctly', () => {
    const button = Renderer.create(<Button text="button test" clickAction={() => {}} />);
    expect(button).toMatchSnapshot();
  });
});