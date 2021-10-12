import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Switch, Route } from 'react-router-dom';

import reducers from "./reducers";




const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

import history from './history';

import Layout from "./components/layout";
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Home from "./components/home/home";
import Products from "./components/uploaders/products";
import User from "./components/uploaders/user";
import ProductDetail from "./products/productDetail";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signin' exact component={SignIn} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/signup/user' exact component={User} />
            <Route path='/products/upload' exact component={Products} />
            <Route exact path="/product/:slug" exact component={ProductDetail} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

