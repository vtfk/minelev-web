import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import 'moment/locale/nb'

import { useSession } from '@vtfk/react-msal'
import { loginRequest } from './config/auth'

import * as Sentry from '@sentry/react'

import { Home } from './pages/Home'
import { ActivityLog } from './pages/ActivityLog'
import { Classes } from './pages/Classes'
import { Class } from './pages/Class'
import { Students } from './pages/Students'
import { Student } from './pages/Student'
import { Statistics } from './pages/Statistics'
import { Help } from './pages/Help'
import { PageNotFound } from './pages/PageNotFound'

import { ROUTES } from './config/constants'

const AppContent = () => {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path={`/${ROUTES.activityLog}`} element={<ActivityLog />} />
          <Route exact path={`/${ROUTES.classes}`} element={<Classes />} />
          <Route exact path={`/${ROUTES.classes}/:id`} element={<Class />} />
          <Route exact path={`/${ROUTES.students}`} element={<Students />} />
          <Route exact path={`/${ROUTES.students}/:id`} element={<Student />} />
          <Route exact path={`/${ROUTES.students}/:id/:docId`} element={<Student />} />
          <Route exact path={`/${ROUTES.statistics}`} element={<Statistics />} />
          <Route exact path={`/${ROUTES.help}`} element={<Help />} />

          <Route exact path='*' element={<PageNotFound />} />
        </Routes>

      </div>
    </Router>
  )
}

function App () {
  const { isAuthenticated, login, authStatus, user } = useSession()

  if (['pending'].includes(authStatus)) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    login(loginRequest)
    return <></>
  }

  if (isAuthenticated && authStatus === 'finished') {
    Sentry.setUser({
      email: user.userPrincipalName || undefined,
      username: user.onPremisesSamAccountName || undefined,
      ip_address: '{{auto}}'
    })

    return <AppContent />
  } else if (process.env.REACT_APP_IS_MOCK) {
    return <></>
  }
}

export default App
