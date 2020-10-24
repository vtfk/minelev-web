import React, { useState, useEffect, useContext } from 'react'
import * as msal from '@azure/msal-browser'
import axios from 'axios'
import { useSessionStorage } from './use-session-storage'

const ua = window.navigator.userAgent
const msie = ua.indexOf('MSIE ')
const msie11 = ua.indexOf('Trident/')
const msedge = ua.indexOf('Edge/')
const isIE = msie > 0 || msie11 > 0
const isEdge = msedge > 0

const getUserInfo = async token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
  try {
    const { data } = await axios.get('https://graph.microsoft.com/v1.0/me?$select=userPrincipalName,onPremisesSamaccountName,givenName,surname,displayName')
    return data
  } catch (error) {
    console.error(error)
    return {}
  }
}

export const MsalContext = React.createContext()
export const useSession = () => useContext(MsalContext)
export const MsalProvider = ({
  children,
  config
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState()
  const [user, setUser] = useSessionStorage('user', false)
  const [token, setToken] = useSessionStorage('token', false)
  const [expires, setExpires] = useSessionStorage('expires', new Date().getTime())
  const [publicClient, setPublicClient] = useState()
  const [loading, setLoading] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [loginError, setLoginError] = useState(false)

  async function updateUserInfo (token, user) {
    const userInfo = await getUserInfo(token)
    setUser({ ...user, ...userInfo })
  }

  useEffect(() => {
    const pc = new msal.PublicClientApplication(config)
    setPublicClient(pc)
    // Første innlogging
    pc.handleRedirectPromise().then((response) => {
      setLoading(false)
      async function updateData (token, user) {
        setToken(token)
        await updateUserInfo(token, user)
        setIsAuthenticated(true)
      }
      if (response) {
        const user = pc.getAllAccounts()[0]
        setExpires(new Date(response.expiresOn).getTime())
        if (response.idToken) {
          updateData(response.idToken, user)
        }
      }
    }).catch(error => {
      console.log(error)
      setLoginError(error)
    })

    // Dersom bruker er innlogget fra tidligere
    if (pc.getAllAccounts().length > 0) {
      const user = pc.getAllAccounts()[0]
      if (!token) {
        async function updateToken () {
          const response = await pc.acquireTokenSilent({ account: user.username, scopes: config.scopes })
          setToken(response.idToken)
          setExpires(new Date(response.expiresOn).getTime())
          await updateUserInfo(response.idToken, user)
          setIsAuthenticated(true)
        }
        updateToken()
      } else {
        setIsAuthenticated(token && expires > new Date().getTime())
      }
    }

    // eslint-disable-next-line
    }, [])

  const login = async (loginRequest, method) => {
    const signInType = (isIE || isEdge) ? 'loginRedirect' : method
    if (signInType === 'loginPopup') {
      setPopupOpen(true)

      try {
        await publicClient.loginPopup(loginRequest)

        if (publicClient.getAccount()) {
          setUser(publicClient.getAccount())
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.log(error)
        setLoginError(error)
      } finally {
        setPopupOpen(false)
      }
    } else if (signInType === 'loginRedirect') {
      setLoading(true)

      publicClient.loginRedirect(loginRequest)
    }
  }

  const logout = () => {
    publicClient.logout()
  }

  const getTokenPopup = async (loginRequest) => {
    try {
      const response = await publicClient.acquireTokenSilent(loginRequest)
      setToken(response.idToken)
    } catch (error) {
      try {
        setPopupOpen(true)
        const response = await publicClient.acquireTokenPopup(loginRequest)
        setToken(response.idToken)
      } catch (error) {
        console.log(error)
        setLoginError(error)
      } finally {
        setPopupOpen(false)
      }
    }
  }

  // This function can be removed if you do not need to support IE
  const getTokenRedirect = async (loginRequest) => {
    try {
      setToken(await publicClient.acquireTokenSilent(loginRequest))
    } catch (error) {
      try {
        setLoading(true)

        publicClient.acquireTokenRedirect(loginRequest)
      } catch (error) {
        console.error(error)
        setLoginError(error)
      }
    }
  }

  const getToken = async (loginRequest, method) => {
    const signInType = (isIE || isEdge) ? 'loginRedirect' : method
    if (signInType === 'loginRedirect') {
      return await getTokenRedirect(loginRequest)
    } else {
      return await getTokenPopup(loginRequest)
    }
  }

  // Implementerer api kall
  const is401 = error => /401/.test(error.message)
  const isValid = (token, expires) => token && expires > new Date().getTime()
  const updateToken = async () => {
    const response = await publicClient.acquireTokenSilent({ account: user.username, scopes: config.scopes })
    setToken(response.idToken)
    setExpires(new Date(response.expiresOn).getTime())
    await updateUserInfo(response.idToken, user)
    setIsAuthenticated(true)
  }

  const apiGet = async url => {
    if (isValid(token, expires)) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      try {
        const { data } = await axios.get(url)
        return data
      } catch (error) {
        if (is401(error)) {
          await updateToken()
          axios.defaults.headers.common.Authorization = `Bearer ${token}`
          try {
            const { data } = await axios.get(url)
            return data
          } catch (error) {
            console.error(error)
            return false
          }
        } else {
          console.error(error)
          return false
        }
      }
    } else {
      console.warn('invalid token or expire')
      await updateToken()
      return apiGet(url)
    }
  }

  const apiPost = async (url, payload) => {
    if (isValid(token, expires)) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      try {
        const { data } = await axios.post(url, payload)
        return data
      } catch (error) {
        if (is401(error)) {
          await updateToken()
          axios.defaults.headers.common.Authorization = `Bearer ${token}`
          try {
            const { data } = await axios.post(url, payload)
            return data
          } catch (error) {
            console.error(error)
            return false
          }
        } else {
          console.error(error)
          return false
        }
      }
    } else {
      console.warn('invalid token or expire')
      await updateToken()
      return apiPost(url, payload)
    }
  }

  const apiPut = async (url, payload) => {
    if (isValid(token, expires)) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      try {
        const { data } = await axios.put(url, payload)
        return data
      } catch (error) {
        if (is401(error)) {
          await updateToken()
          axios.defaults.headers.common.Authorization = `Bearer ${token}`
          try {
            const { data } = await axios.put(url, payload)
            return data
          } catch (error) {
            console.error(error)
            return false
          }
        } else {
          console.error(error)
          return false
        }
      }
    } else {
      console.warn('invalid token or expire')
      await updateToken()
      return apiPut(url, payload)
    }
  }

  return (
    <MsalContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
        loading,
        popupOpen,
        loginError,
        login,
        logout,
        getToken,
        apiGet,
        apiPost,
        apiPut
      }}
    >
      {children}
    </MsalContext.Provider>
  )
}
