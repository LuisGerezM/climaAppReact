import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Login from "./views/login/Login";
import Dashboard from "./views/dashboard/Dashboard";
import AuthContext from "./contexts/firebase/AuthProvider";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthContext>
      <Router>
        <NavbarComponent />
        <div className="App">
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Redirect from="/" to="/login" />
          </Switch>
        </div>
      </Router>
    </AuthContext>
  );
}

export default App;
