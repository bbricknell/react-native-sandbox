import React from 'react';
import Renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Button } from './button';

describe('Button Component', () => {
  test('renders button correctly', () => {
    const button = Renderer.create(<Button text="button test" clickAction={() => {}} />);
    expect(button).toMatchSnapshot();
  });

  test('calls the passed callback on press', () => {
    const mockCallback = jest.fn();
    const button = shallow(<Button text="button test" clickAction={mockCallback} />);
    button.simulate('press');
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});