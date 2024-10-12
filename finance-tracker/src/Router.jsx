// src/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; // Import your main App component
import Login from './components/Login'; // Create and import Login component
import Signup from './components/Signup'; // Create and import Signup component

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={App} /> {/* Main app */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
