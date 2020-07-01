import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { ProtectedRoute } from "./config/ProtectedRoute";

import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { ActivityLog } from "./pages/ActivityLog"
import { ClassReports } from "./pages/ClassReports"
import { Statistics } from "./pages/Statistics"
import { Help } from "./pages/Help"
import { PageNotFound } from "./pages/PageNotFound"

import { ROUTES } from "./config/constants"

export default function App() {
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route exact={ true } path={ `/${ ROUTES.login }` } component={ Login } />

          <ProtectedRoute exact={ true } path={ `/${ ROUTES.activityLog }` } component={ ActivityLog } />          
          <ProtectedRoute exact={ true } path={ `/${ ROUTES.classReports }` } component={ ClassReports } />          
          <ProtectedRoute exact={ true } path={ `/${ ROUTES.statistics }` } component={ Statistics } />          
          <ProtectedRoute exact={ true } path={ `/${ ROUTES.help }` } component={ Help } />
          <ProtectedRoute exact={ true } path="/" component={ Home } />

          <Route exact={ true } path="*" component={ PageNotFound } />
        </Switch>
        
      </div>
    </Router>
  )
}
