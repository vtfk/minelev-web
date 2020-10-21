import { MsalAuthProvider, LoginType } from 'react-aad-msal'

const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/08f3813c-9f29-482f-9aec-16ef7cbf477a',
    clientId: '5b85b06c-ac10-47df-a308-51aab71428a9',
    redirectUri: 'http://localhost:3000'
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true
  }
}

const authenticationParameters = {
  scopes: [
    'user.read'
  ]
}

const options = {
  loginType: LoginType.Redirect
}
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)
