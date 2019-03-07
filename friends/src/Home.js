import React from 'react';
import { connect } from "react-redux";
// import Loader from 'react-loader-spinner';

// import { CharacterList } from "../components";
import { getFriends } from './actions';


class Home extends React.Component {
  // constructor() {
  //   super();

  // }

  componentDidMount() {
    // this.props.getTicker();
  }

  render() {
    if (this.props.isLoading) {
      return (
        // <Loader type="Triangle" color="#7f7878" height="90" width="90" />
        <div>Loading...</div>
      )
    }
    return (
    //   <div>
    //     {this.props.ticker.USD && <div className="price">{this.props.ticker.USD.symbol} {this.props.ticker.USD.last} </div>}
    //   </div>
    <div className="App">
        Login to see your friends!
    </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  
//   isLoading: state.blockchainReducer.isLoading,
//   ticker: state.blockchainReducer.ticker,
//   error: state.blockchainReducer.error
});

export default connect(
  mapStateToProps,
  { getFriends }
)(Home);
