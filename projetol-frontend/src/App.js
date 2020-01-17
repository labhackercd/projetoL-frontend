import React from 'react';
import logo from './logo.svg';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from './pages/main'
import Historico from './pages/historico'

function App() {
  return (
    <Router>
      <nav class="navbar">
        <img class="logo"></img>
        <div class="menu">
          <Link to="/">Inicio</Link>
          <Link to="/conta">Minha Conta</Link>
          <Link to="/historico">Historico</Link>
          <Link to="/LGPD">Sobre a LGPD</Link>
          <Link to="/termos">Termos de uso</Link>
        </div>
        <div class="logout">
          <Link to="/">Logout</Link>
        </div>
      </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/historico">
              <Historico />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
