import React from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Burgers from "./pages/Burgers";
import Auth from "./shared/Auth";
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./shared/Header";

const authRedirect = currentUser => {
  if (!currentUser) {
    return (
        <>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect from="*" to="/Home" />
          </Switch>
        </>
    );
  }

  return (
      <>
        <Header />
        <Switch>
          <Route path="/burgers" exact component={Burgers} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
  );
};

const App = () => {
  return <Auth>{authRedirect}</Auth>;
};

export default App;
