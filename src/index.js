import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import registerServiceWorker from "./registerServiceWorker";
import App from "./scripts/App";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./scripts/Reducers/index";

import { ConnectedRouter } from 'react-router-redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
const middlewarehistory = routerMiddleware(history)
const store = createStore(
    connectRouter(history)(reducers),
  composeWithDevTools(applyMiddleware(middlewarehistory, thunk, logger))
);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(

        <Provider store={store}>
            <ConnectedRouter store={store} history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
