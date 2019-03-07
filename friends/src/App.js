import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import FriendList from './components/Friends/FriendList';
import FriendCard from './components/Friends/FriendCard';
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friend-list" component={FriendList}  />
        <PrivateRoute exact path="/friend-list/:id" component={FriendCard}  />
        
      </div>
    );
  }
}

export default App;
