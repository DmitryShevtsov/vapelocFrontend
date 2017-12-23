import {ADD_USER, REMOVE_USER, ADD_USER_ERRORS, REMOVE_USER_ERRORS} from "../Constants/userConstants";

const DEFAULT_STATE = {
  errors: {phone: [], email: [], password: [], username: []},
  currentUser: JSON.parse(localStorage.getItem('currentUser'))
};

export default function user(state = DEFAULT_STATE, action) {
  switch (action.type) {

    case ADD_USER: {
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return {...state, currentUser: action.payload};
    }

    case ADD_USER_ERRORS: {
      return {
        ...state,
        errors: {
          phone: action.payload.phone? action.payload.phone: [],
          email: action.payload.email? action.payload.email: [],
          password: action.payload.password? action.payload.password: [],
          username: action.payload.username? action.payload.username: [],
          message: action.payload.message? action.payload.message: {}
        }
      }
    }

    case REMOVE_USER_ERRORS: {
      return {
        ...state,
        errors: {phone: [], email: [], password: [], username: []}
      }
    }

    case REMOVE_USER: {
      localStorage.removeItem('currentUser');
      return {...state, currentUser: null};
    }

    default:
      return state;
  }
}