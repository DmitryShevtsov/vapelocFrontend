import {ADD_USER, REMOVE_USER} from '../Constants/userConstants';
import {URL} from '../Constants/urlsConstants';

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  }
}

export function removeUser() {
  return {
    type: REMOVE_USER
  }
}

export function loginUser(user) {
  return (dispatch) => {
    return fetch(`${URL}/session`)
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        dispatch(addUser(user));
      })
      .catch((error) => {

      });
  }
}