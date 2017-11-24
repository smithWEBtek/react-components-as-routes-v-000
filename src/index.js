import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <fieldset>
      <NavLink 
        to='/'
        exact
        style={link}
        activeStyle={{background: 'darkblue'}}
      >Home</NavLink>

      <NavLink 
        to='/about'
        exact
        style={link}
        activeStyle={{background: 'darkblue'}}
      >About</NavLink>
  
      <NavLink 
        to='/login'
        exact
        style={link}
        activeStyle={{background: 'darkblue'}}
      >Login</NavLink>
  
      <NavLink 
        to='/signup'
        exact
        style={link}
        activeStyle={{background: 'darkblue'}}
      >Signup</NavLink>
  
      <NavLink 
        to='/messages'
        exact
        style={link}
        activeStyle={{background: 'darkblue'}}
      >Messages</NavLink>
  
      <NavLink 
        to='/new-message'
        exact
        style={link}
        activeStyle={{background: 'darkblue'}}
      >New Message</NavLink>
    </fieldset>
  </div>;
 

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
 
const Signup = () => 
  <div>
    <h1>Signup</h1>
    <form>
      <div>
        <input type="text" name="username" placeholder="Username" />
        <label htmlFor="username">Enter your desired Username</label>
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="password">Enter your desired Password</label>
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>;
 
 const NewMessage = () => 
  <div>
    <h1>New Message</h1>
    <form>
      <div>
        <label htmlFor="username">Message:</label>
        <input type="text" name="content" placeholder="..enter message..." />
      </div>
      <input type="submit" value="Submit message" />
    </form>
  </div>;
 
 const Messages = () => 
  <div>
    <h1>Messages</h1>
    <ul>
      <li>You are amazing!</li>
      <li>Lets eat!</li>
      <li>Is that tuna, or have you left your gym shoes on the heater?</li>
    </ul>
  </div>;
 
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/new-message" component={NewMessage} />
      </div>
    </Router>
  );
};
 
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);