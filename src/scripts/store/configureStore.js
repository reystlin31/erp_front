import { createStore } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../Reducers/index';

/* eslint-disable no-underscore-dangle */
export const store = createStore(
    reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */

store.subscribe(() => console.log(store.getState()));

