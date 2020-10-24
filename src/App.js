import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { useSession } from './lib/auth-provider'
import { loginRequest } from './config/auth'

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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={`/${ROUTES.activityLog}`} component={ActivityLog} />
          <Route exact path={`/${ROUTES.classes}`} component={Classes} />
          <Route exact path={`/${ROUTES.classes}/:id`} component={Class} />
          <Route exact path={`/${ROUTES.students}`} component={Students} />
          <Route exact path={`/${ROUTES.students}/:id`} component={Student} />
          <Route exact path={`/${ROUTES.statistics}`} component={Statistics} />
          <Route exact path={`/${ROUTES.help}`} component={Help} />

          <Route exact path='*' component={PageNotFound} />
        </Switch>

      </div>
    </Router>
  )
}

const LoginButton = ({ login }) => {
  return (
    <button onClick={() => login(loginRequest, 'loginRedirect')}>Logg inn</button>
  )
}

function App () {
  const { loading, isAuthenticated, login } = useSession()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <LoginButton login={login} />
  }

  if (isAuthenticated) {
    return <AppContent />
  }
}

export default App
