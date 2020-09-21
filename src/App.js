import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import Login from './Views/Login'
import Screen1 from './Views/Screen1'
import Screen2 from './Views/Screen2'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/screen2">
            <Header />
            <Screen2 />
            <Footer />
          </Route>
          <Route path="/screen1">
            <Header />
            <Screen1 />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
