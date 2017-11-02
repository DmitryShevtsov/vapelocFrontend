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
    let data = new FormData();
    data.append('user[phone]', user.phone);
    data.append('user[password]', user.password);
    return fetch(`${URL}/session`, {method: 'POST', body: data})
      .then((response) => {
        if (response.status === 202) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((user) => {
        dispatch(addUser(user));
      })
      .catch((error) => {
        dispatch(addUser(null));
      });
  }
}

export function registrateUser(user) {
  return (dispatch) => {
    let data = new FormData();
    data.append('user[phone]', user.phone);
    data.append('user[password]', user.password);
    data.append('user[username]', user.username);
    return fetch(`${URL}/registration`, {method: 'POST', body: data})
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        dispatch(addUser(user));
      })
  }
}

export function logoutUser(user) {
  return (dispatch) => {
    return fetch(`${URL}/session`, {
      method: 'DELETE', headers: {
        'AUTH-TOKEN': user.token
      }
    })
      .then((response) => {
        dispatch(removeUser());
      })
  }
}