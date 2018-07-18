import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  const request = axios.get('/api/current_user');

  return dispatch => {
    request.then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const handleToken = token => {
  const request = axios.post('/api/stripe', token);
  // we responded to this request with the current user

  return dispatch => {
    request.then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};
