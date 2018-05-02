import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../reducers/root-reducer';
import { ipMiddleware } from '../middleware/ip-middleware';

export const store = createStore(
  rootReducer,
  applyMiddleware(ipMiddleware)
);