import { LOGIN_START, FETCHING_FRIENDS, FETCHING_SUCCESS, FETCHING_FAILURE } from '../actions';

const initialState = {
    friends: [],
    // isLoading: false,
    error: null,
    // deletingFriend: false,
    fetchingFriends: false,
    loggingIn: false,
    // savingFriends: false,
    // updatingFriend: false,
};



  export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case LOGIN_START:
        return {
          ...state,
          error: '',
          loggingIn: true,
          fetchingFriends: false
        };

      case FETCHING_FRIENDS:
        return {
          ...state,
          error: '',
          fetchingFriends: true
        };
  
      case FETCHING_SUCCESS:
        return {
          ...state,
          error: '',
          fetchingFriends: false,
          friends: action.payload
        };
  
      case FETCHING_FAILURE:
        return {
          ...state,
          fetchingFriends: false,
          error: action.payload
        };
      
      default:
        return state;
    }
  };