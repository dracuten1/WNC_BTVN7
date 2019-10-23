import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import GameCaro from './containers/GameCaro/GameCaro';
import User from './containers/user/user';
import './App.css';

class App extends Component {
  hello = () => {

  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/game" component={GameCaro} />
          <Route path="/" component={User} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
