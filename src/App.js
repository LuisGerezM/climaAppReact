import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavbarComponent from "./components/navbar/NavbarComponent";
import Dashboard from "./views/dashboard/Dashboard";
import AuthContext from "./contexts/firebase/AuthProvider";
import Login from "./views/login/Login";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthContext>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </AuthContext>
  );
}

export default App;
