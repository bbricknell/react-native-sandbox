export default function(state = { hello: 'heeelo' }, action) {
  switch(action.type) {
    case 'TEST':
      return {...state, hello: 'test'};
    default:
      return state;
  }
}