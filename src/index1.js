import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Asdf } from 'react-router-dom';
 
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <h2>Home</h2>} />
        <Route exact path="/about" render={() => 
          <div>
            <h2>About</h2>
            <a href="http://www.smithwebtek.com">smithWEBtek</a>
          </div>} />
        <Route exact path="/login" render={() => 
          <div>
            <fieldset><legend><h2>Login here:</h2></legend>
              <form>
                <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" placeholder="Username" />
                </div>
                <div>
                  <label htmlFor="password">Password </label>
                  <input type="password" name="password" placeholder="Password" />
                </div>
                <input type="submit" value="Login" />
              </form>
            </fieldset>
          </div>    
          } />
      </div>
    </Router>
  );
};
 
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
