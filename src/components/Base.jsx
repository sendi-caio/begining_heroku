import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'

function Base() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Navigation />
    </BrowserRouter>
  )
}

export default Base
