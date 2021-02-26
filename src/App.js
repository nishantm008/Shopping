import React from 'react';
import Registration from "./components/Registration";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Registration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
