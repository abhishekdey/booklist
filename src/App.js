import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AuthButton from './functionalComp/AuthButton.component';
import HomePage from "./functionalComp/Home.component";
import LoginPage from './functionalComp/LoginPage.component';

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />

        <header>
          <h1>Company A</h1>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
          <form target="/search">
            <input name="q" type="search" />
            <input type="submit" />
          </form>
        </header>

        <div className="outer-div" >
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
          <div className="inner-div"></div>
        </div>

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}