export const ipMiddleware = store => next => action => {
  if(action.type === 'TEST') {
    console.warn('middleware executed');
    next(action);
  }
};