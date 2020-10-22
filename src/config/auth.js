export const config = {
  auth: {
      clientId: process.env.REACT_APP_CLIENT_ID,
      authority: process.env.REACT_APP_AUTHORITY,
      redirectUri: process.env.REACT_APP_REDIRECT_URL,
  },
  cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false
  }
}

export const loginRequest = {
  scopes: ['openid', 'profile', 'User.Read'],
  forceRefresh: false
}

export const apiRequest = {
  scopes: ['openid', 'profile', 'User.Read'],
  forceRefresh: false
}
