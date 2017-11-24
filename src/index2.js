import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
 
const Home = () => <h1>Home</h1>;
 
const About = () => <h1>About</h1>;
 

const Login = () => 
  <div>
    <h1>Login</h1>
    <form>
      <div>
        <input type="text" name="username" placeholder="Username" />
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="password">Password</label>
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>;
 
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
};
 
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);