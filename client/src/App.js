import React from 'react';
import './App.css';
import Timer from './components/Timer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav.js';
import Puzzles from './components/Puzzles.js';
import PuzzlePage from './components/PuzzlePage.js'

function App() {

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/puzzles" component={Puzzles} />
          <Route path="/puzzle3" component={Timer} />
          <Route path="/puzzle/:id" component={PuzzlePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
