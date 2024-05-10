import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import TaskPage from './TaskPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/tasks/:taskType" component={TaskPage} />
      </Switch>
    </Router>
  );
}

export default App
