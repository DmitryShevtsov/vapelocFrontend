import {ADD_USER, REMOVE_USER, ADD_USER_ERRORS, REMOVE_USER_ERRORS} from '../Constants/userConstants';
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

export function removeUserErrors() {
  return {
    type: REMOVE_USER_ERRORS
  }
}

export function addUserErrors(payload) {
  return {
    type: ADD_USER_ERRORS,
    payload: payload
  }
}


export function loginUser(user) {
  return (dispatch) => {
    return fetch(`${URL}/session`, {method: 'POST',headers: {'Content-Type':'application/json'}, body: JSON.stringify({
        phone: user.phone,
        password: user.password
      })})
      .then((response) => {
        if (response.status === 202) {
          return response.json();
        } else {
          throw response.json().then((res) => {
            return res;
          });
        }
      })
      .then((user) => {
        dispatch(addUser(user));
        dispatch(removeUserErrors());
      })
      .catch((error) => {
        Promise.resolve(error).then((value) => {
          dispatch(addUserErrors(value));
        });
        dispatch(addUser(null));
      });
  }
}

export function registrateUser(user) {
  return (dispatch) => {
    return fetch(`${URL}/registration`, {method: 'POST',headers: {'Content-Type':'application/json'}, body: JSON.stringify({
        phone: user.phone,
        password: user.password,
        username: user.username
      })})
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } else {
          throw response.json().then((res) => {
            return res;
          });
        }
      })
      .then((user) => {
        dispatch(addUser(user));
        dispatch(removeUserErrors());
      })
      .catch((error) => {
        Promise.resolve(error).then((value) => {
          dispatch(addUserErrors(value));
        });
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
      .then(() => {
        dispatch(removeUser());
      })
  }
}