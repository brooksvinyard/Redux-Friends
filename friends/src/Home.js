import React from 'react';
import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom';
// import Loader from 'react-loader-spinner';

// import { CharacterList } from "../components";
// import { getFriends } from './actions';


class Home extends React.Component {

  render() {
    // if (this.props.isLoading) {
    //   return (
    //     // <Loader type="Triangle" color="#7f7878" height="90" width="90" />
    //     <div>Loading...</div>
    //   )
    // }
    return (
    <div className="Home">
        Welcome to our awesome site! If you want to see your friends, login and click "Friend List"
    </div>
    );
  }
}


const mapStateToProps = state => ({
    friends: state.friendReducer.friends
    // fetchingFriends: 
});

export default connect(
    mapStateToProps,
    {  }
)(Home);