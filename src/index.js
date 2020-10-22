import React from 'react';
import ReactDOM from 'react-dom';
import { MsalProvider } from './lib/auth-provider'
import { config, loginRequest } from "./config/auth"

import App from './App';

import './assets/scss/base-styles.scss';

console.log(config)

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider
      config={config}
      scopes={loginRequest}
    >
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
