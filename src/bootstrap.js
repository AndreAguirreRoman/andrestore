import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { Router, Switch, Route } from 'react-router-dom';

import reducers from "./reducers";




const createStoreWithMiddleware = applyMiddleware(thunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));


import "./style/main.scss";

import history from './history';

import Layout from "./components/layout";
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Home from "./components/home/home";
import Products from "./components/uploaders/products";
import User from "./components/uploaders/user";
import ProductDetail from "./products/productDetail";
import Account from "./components/account/account";
import AllProducts from "./components/pages/allProducts";
import Headphones from "./components/pages/headphones";
import Tv from "./components/pages/tv";
import Computers from "./components/pages/computers";
import VideoGames from "./components/pages/videoGames";
import Phones from "./components/pages/phones";
import Cameras from "./components/pages/cameras";
import PurchaseHistory from "./components/account/purchaseHistory";
import AccountInformation from "./components/account/accountInformation";
import AddressPage from "./components/account/addressPage";
import Results from "./components/pages/results";


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products' exact component={AllProducts} />
            <Route path='/products/results' exact component={AllProducts} />
            <Route path='/products/headphones' exact component={Headphones} />
            <Route path='/products/tv' exact component={Tv} />
            <Route path='/products/computers' exact component={Computers} />
            <Route path='/products/video-games' exact component={VideoGames} />
            <Route path='/products/phones' exact component={Phones} />
            <Route path='/products/cameras' exact component={Cameras} />
            <Route path='/signin' exact component={SignIn} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/signup/user' exact component={User} />
            <Route path='/products/upload' exact component={Products} />
            <Route exact path="/product/:slug" exact component={ProductDetail} />
            <Route path='/account' exact component={AccountInformation} />
            <Route path='/orders' exact component={PurchaseHistory} />
            <Route path='/account/address' exact component={AddressPage} />
            <Route path='/products/search' exact component={Results} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

