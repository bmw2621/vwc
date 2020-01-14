import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Counter from "./components/Counter";
import './App.css';

function App() {
  const tabs = [
    "Home",
    "About",
    "Projects",
    "Contact"
]
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Counter />
          </Route>
          <Route path="/projects">
            <Counter />
          </Route>
          <Route path="/contact">
            <Counter />
          </Route>
          <Route path="/">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
