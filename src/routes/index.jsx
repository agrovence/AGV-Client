import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthInterceptor from 'hooks/authInterceptor';
import Login from 'pages/Login';
import Product from 'pages/Product';
import Home from 'pages/Home';
import Products from 'pages/Products';

const Routes = () => {
    AuthInterceptor();

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/login" component={Login} />
        </Switch>
    );
};

export default Routes;
