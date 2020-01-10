import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './App';
import Dasboard from './dashboard/Dashboard';
import Signin from './sign-in/SignIn';
import Register from './register/Register';
import Account from './account/Account';
import Header from './partial/header';
import Footer from './partial/footer';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/dashboard" component={Dasboard} />
          <Route path="/login" component={Signin} />
          <Route path="/register" component={Register} />
          <Route path="/account" component={Account} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
  
  ReactDOM.render(routing, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
