import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { AuthorizationContextComponent } from './AuthorizationContext';
import PrivateRoute from './components/PrivateRoute';
import Account from './pages/Account';
import AdForm from './pages/AdForm';
import Logout from './pages/Logout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <AuthorizationContextComponent>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/newad' component={AdForm} />
          <PrivateRoute exact path='/account' component={Account} />
          <PrivateRoute exact path='/logout' component={Logout} />
        </Layout>
      </AuthorizationContextComponent>
    );
  }
}
