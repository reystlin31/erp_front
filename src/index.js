import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import App from "./scripts/App";
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from './scripts/store';

ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter store={store} history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
