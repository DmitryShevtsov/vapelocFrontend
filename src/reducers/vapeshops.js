import {GET_VAPESHOPS, GET_ONE_VAPESHOP} from "../constants/action_types";

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'ADD_VAPESHOPS': {
      return action.vapeshops;
    }

    case GET_VAPESHOPS: {
      return [...state];
    }

    case GET_ONE_VAPESHOP: {
      return [...state];
    }

    default:
    return state;
  }
}

export function getVapeshops() {
  return (dispatch) => {
    return fetch('http://localhost:3001/vapeshops')
      .then(response => {
        return response.json();
      }).then(vapeshops => {
        console.log(vapeshops);
        dispatch({ type: 'ADD_VAPESHOPS', vapeshops });
      });
  }
}
