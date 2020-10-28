export const config = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: process.env.REACT_APP_AUTHORITY,
    redirectUri: process.env.REACT_APP_REDIRECT_URL,
    postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_URL 
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true
  }
}

export const graph = {
  userInfoUrl: process.env.USER_INFO_URL || 'https://graph.microsoft.com/v1.0/me?$select=userPrincipalName,onPremisesSamaccountName,givenName,surname,displayName'
}

export const loginRequest = {
  scopes: ['openid', 'profile', 'User.Read'],
  forceRefresh: true
}

export const apiRequest = {
  scopes: ['openid', 'profile', 'User.Read'],
  forceRefresh: false
}
