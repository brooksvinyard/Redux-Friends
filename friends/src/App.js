import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Route, Link } from 'react-router-dom';

import Header from './components/Header/Header'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';
import FriendList from './components/Friends/FriendList';
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <div className="App">
          Login to see your friends!
        </div> */}
        <Route exact path="/" render={props => <Home {...props}  />} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Protected} />
        <PrivateRoute exact path="/friend-list" component={FriendList}  />
        {/* <Route exact path="/friend-list" render={props => <FriendList {...props} friends={this.state.friends} setUpdateForm={this.setUpdateForm}/>} /> */}
        {/* <Route path="/friend-form" render={props => <FriendForm {...props} addFriend={this.addFriend} activeFriend={this.state.activeFriend} updateFriend={this.updateFriend} />} /> */}
        {/* <Route path="/friend-list/:id" render={props =>  <FriendCard {...props} deleteFriend={this.deleteFriend} friends={this.state.friends} setUpdateForm={this.setUpdateForm} /> } /> */}

      </div>
    );
  }
}

export default App;
