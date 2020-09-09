import React from 'react';
import './App.css';
import Timer from './components/Timer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav.js';
import Puzzles from './components/Puzzles.js';


function App() {

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/puzzles" component={Puzzles} />
          <Route path="/puzzle3" component={Timer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
