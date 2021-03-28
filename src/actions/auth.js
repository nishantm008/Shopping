import { CREATE_USER } from './actions'
import { API_BASE_URL } from '../constants/apiConstants';

export const createUser = (user) => {
  return dispatch => {
    fetch(`${API_BASE_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: CREATE_USER,
          payload: result
        });
      });
  };
};
