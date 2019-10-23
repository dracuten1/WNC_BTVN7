import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import GameCaro from './containers/GameCaro/GameCaro';
import './App.css';

class App extends Component {
  hello = () => {

  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/login" Component=""/>
          <Route path="/register" Component=""/>
          <Route path="/" Component={GameCaro}/>
        </Switch>
        <GameCaro />
      </Layout>
    )
  }
}

export default App;
