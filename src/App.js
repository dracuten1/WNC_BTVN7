import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import GameCaro from './containers/GameCaro/GameCaro';
// import User from './containers/User/user';
import Auth from './containers/Auth/Auth';
import Menu from './containers/Menu/Menu';
import './App.css';

class App extends Component {
  hello = () => {

  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/game" component={GameCaro} />
          <Route path="/menu" component={Menu} />
          <Route path="/" component={Auth} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
