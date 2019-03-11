import React from 'react';
import Friend from './Friend'
import { connect } from "react-redux";
import { getFriends } from '../../actions';

class FriendList extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        if (this.props.fetchingFriends) {
            return (
                // <Loader type="Triangle" color="#7f7878" height="90" width="90" />
                <div>Loading...</div>
            )
        }
        return (
            <div className="friend-list">
                {/* {this.props.friends.map(e => (<Friend friends={e} key={e.name} setUpdateForm={props.setUpdateForm} /> ))} */}
                {this.props.friends.map(e => (<Friend friends={e} key={e.name} /> ))}
            </div>
        );
    }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
    friends: state.friendReducer.friends
    // fetchingFriends: 
});

export default connect(
    mapStateToProps,
    { getFriends }
)(FriendList);