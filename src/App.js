import React from 'react';
import Register from "./containers/Register";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Home from './components/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux'
import store from './redux/store'

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
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
