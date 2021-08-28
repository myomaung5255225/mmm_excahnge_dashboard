import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { SignupPage } from './pages/signup'
import { Dashboard } from './pages/dashboard'
import { PageNotFound } from './pages/404'
export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <Route path='/signup' exact component={SignupPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/404' exact component={PageNotFound} />
        <Redirect to='/404' />
      </Switch>
    </Router>
  )
}