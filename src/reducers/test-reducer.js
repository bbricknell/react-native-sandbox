import { testAction, updateAction } from '../actions/test-actions';

export function test(state = { text: 'test', data: {} }, action) {
  switch(action.type) {
    case testAction:
      return { ...state, text: action.text };
    case updateAction:
      return { ...state, data: action.data };
    default:
      return state;
  }
}