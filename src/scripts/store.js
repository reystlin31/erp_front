import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./Reducers/index";
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
const middlewarehistory = routerMiddleware(history)
const store = createStore(
    connectRouter(history)(reducers),
  composeWithDevTools(applyMiddleware(middlewarehistory, thunk, logger))
);

store.subscribe(() => console.log(store.getState()));

export {store, history};