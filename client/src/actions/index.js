import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  const request = axios.get('/api/current_user');

  return dispatch => {
    request.then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};
