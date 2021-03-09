import React from 'react';
import Registration from "./components/Registration";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#89279E",
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
