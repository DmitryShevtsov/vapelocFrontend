import {ADD_USER, REMOVE_USER} from "../Constants/userConstants";

const DEFAULT_STATE = JSON.parse(localStorage.getItem('currentUser'));

export default function user(state = DEFAULT_STATE, action) {
  switch (action.type) {

    case ADD_USER: {
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return action.payload;
    }

    case REMOVE_USER: {
      localStorage.removeItem('currentUser');
      return null;
    }

    default: return state;
  }
}