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
  const [idToken, setIdToken] = useSessionStorage('idToken', false)
  const [expires, setExpires] = useSessionStorage('expires', new Date().getTime())
  const [publicClient, setPublicClient] = useState()
  const [loading, setLoading] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const [isMock, setMock] = useState(process.env.REACT_APP_IS_MOCK ? true : false)

  async function updateUserInfo (token, user) {
    const userInfo = await getUserInfo(token)
    setUser({ ...user, ...userInfo })
  }

  async function saveUserdata (response, user) {
    setToken(response.accessToken)
    setIdToken(response.idToken)
    setExpires(new Date(response.expiresOn).getTime())
    await updateUserInfo(response.accessToken, user)
    setIsAuthenticated(true)
  }

  async function updateToken (user) {
    const response = await publicClient.acquireTokenSilent({ account: user.username, scopes: config.scopes })
    await saveUserdata(response, user)
  }

  useEffect(() => {
    if (isMock) {
      const now = new Date()
      now.setDate(now.getDate() + 24)
      setUser({
        displayName: 'Trine Testesen',
        givenName: 'Trine',
        name: 'Trine Testesen',
        onPremisesSamAccountName: null,
        surname: 'Testesen',
        tenantId: '08f3813c-9f29-482f-9aec-16ef7cbf477a',
        userPrincipalName: 'trine.testesen@vtfk.no',
        username: 'trine.testesen@vtfk.no'
      })
      setToken('12345')
      setIdToken('67890')
      setExpires(now.getTime())
      setIsAuthenticated(true)
      console.log('isMock', isMock)
    }
  }, [isMock])

  useEffect(() => {
    const pc = new msal.PublicClientApplication(config)
    setPublicClient(pc)
    // Første innlogging
    pc.handleRedirectPromise().then((response) => {
      setLoading(false)
      if (response) {
        const user = pc.getAllAccounts()[0]
        saveUserdata(response, user)
      }
    }).catch(error => {
      console.log(error)
      setLoginError(error)
    })

    // Dersom bruker er innlogget fra tidligere
    if (pc.getAllAccounts().length > 0) {
      const user = pc.getAllAccounts()[0]
      if (!token) {
        updateToken(user)
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
      setToken(response.accessToken)
    } catch (error) {
      try {
        setPopupOpen(true)
        const response = await publicClient.acquireTokenPopup(loginRequest)
        setToken(response.accessToken)
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

  const retry = async func => {
    if (isValid(idToken, expires)) {
      axios.defaults.headers.common.Authorization = `Bearer ${idToken}`
      try {
        const { data } = await func()
        return data
      } catch (error) {
        if (is401(error)) {
          await updateToken(user)
          axios.defaults.headers.common.Authorization = `Bearer ${idToken}`
          try {
            const { data } = await func()
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
      await updateToken(user)
      return func()
    }
  }

  const apiGet = url => retry(() => axios.get(url))
  const apiPost = (url, payload) => retry(() => axios.post(url, payload))
  const apiPut = (url, payload) => retry(() => axios.put(url, payload))

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
