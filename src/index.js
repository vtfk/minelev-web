import React from 'react';
import ReactDOM from 'react-dom';
import { AzureAD, AuthenticationState } from 'react-aad-msal'
import { authProvider } from './lib/auth-provider'

import App from './App';

import './assets/scss/base-styles.scss';

const AAD = () => {
  return (
    <AzureAD provider={authProvider} forceLogin={true}>
  {
    ({login, logout, authenticationState, error, accountInfo}) => {
      switch (authenticationState) {
        case AuthenticationState.Authenticated:
          const { name, userName } = accountInfo.account
          const user = {
            name,
            userName
          }
          return (
            <App user={user} />
          );
        case AuthenticationState.Unauthenticated:
          return (
            <div>
              {error && <p><span>An error occured during authentication, please try again!</span></p>}
              <p>
                <span>Hey stranger, you look new!</span>
                <button onClick={login}>Login</button>
              </p>
            </div>
          );
        case AuthenticationState.InProgress:
          return (<p>Authenticating...</p>);
      }
    }
  }
</AzureAD>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AAD />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
