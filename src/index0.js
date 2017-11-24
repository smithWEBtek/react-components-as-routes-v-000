import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/brad'>Brad</Link>____
      <Link to='/about'>About</Link>____
      <Link to='/login'>Login</Link>
    </div>
  );
};

const Brad = () => {
  return (
    <div>
      <p>You gonna eat that?</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <p>This site helps feed hungry people in Baltimore.</p>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <p>Please enter your username and password: ___ ___</p>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/brad" component={Brad} />
      <Route exact path="/about" component={About} />
      <Route path="/login" component={Login} />
    </div>
  </Router>, 
  document.getElementById('root')
);