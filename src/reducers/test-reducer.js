import { testAction } from '../actions/test-actions';

export function test(state = { text: 'test' }, action) {
  switch(action.type) {
    case testAction:
      return {...state, text: action.text};
    default:
      return state;
  }
}