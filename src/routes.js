import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Form from './pages/Form'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/form' component={Form} />
      </Switch>
    </Router>
  )
}

export default Routes
