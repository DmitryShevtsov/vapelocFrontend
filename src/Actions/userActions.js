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

export function createUser(user) {

}

export function loginUser(user) {
  return (dispatch) => {
    let data = new FormData();
    data.append('user[phone]', user.phone);
    data.append('user[password]', user.password);
    return fetch(`${URL}/session`, {method: 'POST', body: data})
      .then((response) => {
        if(response.status === 202) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((user) => {
        console.log(user);
        dispatch(addUser(user));
      })
      .catch((error) => {
        console.log("THIS IS ERROR");
        console.log(error);
        dispatch(addUser(null));
      });
  }
}