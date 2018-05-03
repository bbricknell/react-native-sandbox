import { updateAction } from '../actions/test-actions';

export const ipMiddleware = store => next => action => {
  if(action.type === 'TEST') {
    fetch('http://localhost:3000/90.123.456.23')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        store.dispatch({type: updateAction, data});
      });
  }
  next(action);
};