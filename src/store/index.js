import { createStore } from 'redux';
import initialState from './initial-state';
import reduser from './reduser';

const store = createStore(
  reduser,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
