import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from "./registerServiceWorker";
import App from "./scripts/App";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./scripts/Reducers/index";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
