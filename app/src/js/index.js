import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import {store} from "./config/store";
import {history} from "./config/history";

import "./requests/fetchIntercept";

import "../styles/index.scss";

import StartPage from "./Components/StartPage";
import NewProductPage from "./Components/NewProductPage";
import LoginPage from "./Components/LoginPage";

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path='/' component={StartPage}/>
            <Route path="/new-product" component={NewProductPage}/>
            <Route path="/login" component={LoginPage}/>
        </Switch>
    </ConnectedRouter>
</Provider>
    ,document.getElementById("app"));