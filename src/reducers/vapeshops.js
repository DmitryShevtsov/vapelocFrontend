import {GET_VAPESHOPS, GET_ONE_VAPESHOP} from "../constants/action_types";


const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {


    case 'ADD_VAPESHOPS': {
      return state;
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
    return fetch('https://59d4eec7448f920011727284.mockapi.io/vapeshops', { headers: {
      Accept: 'application/json'
    }})
      .then(response => {
        console.log(response);
        response.json();
      }).then(json => {
        console.log(json);
        dispatch(json, { type: 'ADD_VAPESHOPS' })
      });
  }
}
