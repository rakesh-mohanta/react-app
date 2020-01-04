import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import SignIn from './sign-in/SignIn'
function App(props) {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signin" component={SignIn} />
      </div>
    </Router>
  );
}

export default App;
