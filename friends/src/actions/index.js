import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('http://localhost:5000/api/login', creds).then(res => {
    localStorage.setItem('token', res.data.payload);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload });
    getData();
  });
};

export const getData = () => {
  axios
    .get('http://localhost:5000/api/data', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    // .get('http://localhost:5000/api/friends')
    .get('http://localhost:5000/api/friends', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
        console.log(res)
        dispatch({ 
            type: FETCHING_SUCCESS, 
            payload: res.data 
        });
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_FAILURE,
            payload: err.response
      });
    });
};