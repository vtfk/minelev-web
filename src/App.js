// eslint-disable-line react-hooks/exhaustive-deps
import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { useSession } from './lib/auth-provider'
import { loginRequest } from "./config/auth"

import { ProtectedRoute } from "./config/ProtectedRoute"

import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { ActivityLog } from "./pages/ActivityLog"
import { Classes } from "./pages/Classes"
import { Class } from "./pages/Class"
import { Students } from "./pages/Students"
import { Student } from "./pages/Student"
import { Statistics } from "./pages/Statistics"
import { Help } from "./pages/Help"
import { PageNotFound } from "./pages/PageNotFound"

import { ROUTES } from "./config/constants"

const AppContent = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact={ true } path={ `/${ ROUTES.login }` } component={ Login } />

          <ProtectedRoute exact={ true } path={ `/${ ROUTES.activityLog }` } component={ ActivityLog } />          
          <ProtectedRoute exact={ true } path={ `/${ ROUTES.classes }` } component={ Classes } />          
          <ProtectedRoute exact={ true } path={ `/${ ROUTES.classes }/:id` } component={ Class } />          
          <ProtectedRoute exact={ true } path={ `/${ ROUTES.students }` } component={ Students } />          
          <ProtectedRoute exact={ true } path={ `/${ ROUTES.students }/:id` } component={ Student } />          
          <ProtectedRoute exact={ true } path={ `/${ ROUTES.statistics }` } component={ Statistics } />          
          <ProtectedRoute exact={ true } path={ `/${ ROUTES.help }` } component={ Help } />
          <ProtectedRoute exact={ true } path="/" component={ Home } />

          <Route exact={ true } path="*" component={ PageNotFound } />
        </Switch>
        
      </div>
    </Router>
  )
}

const LoginButton = ({login}) => {
  return (
    <button onClick={() => login(loginRequest, 'loginRedirect')}>Logg inn</button>
  )
}

function App () {
  const { loading, isAuthenticated, login } = useSession()

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <LoginButton login={login} />
  }

  if (isAuthenticated) {
    return <AppContent />
  }
}

export default App
