// import { FETCHING, SUCCESS, FAILURE } from '../actions';

const initialState = {
    friends: [],
    // isLoading: false,
    // error: null
};

  export const friendReducer = (state = initialState, action) => {
    switch (action.type) {

    //   case FETCHING:
    //     return {
    //       ...state,
    //       error: '',
    //       isLoading: true
    //     };
  
    //   case SUCCESS:
    //     return {
    //       ...state,
    //       error: '',
    //       isLoading: false,
    //       ticker: action.payload
    //     };
  
    //   case FAILURE:
    //     return {
    //       ...state,
    //       isLoading: false,
    //       error: action.payload
    //     };
      
      default:
        return state;
    }
  };