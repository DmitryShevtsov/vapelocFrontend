import { GET_ONE_VAPESHOP, GET_VAPESHOPS, ADD_VAPESHOPS } from "../constants/actionTypes";

export function getOneVapeshop(id) {
  return {
    type: GET_ONE_VAPESHOP,
    id
  }
}

export function getVapeshops() {
  return {
    type: GET_VAPESHOPS
  }
}

export function addVapeshops(vapeshops) {
  return {
    type: ADD_VAPESHOPS,
    vapeshops
  }
}

export function fetchVapeshops() {
  return (dispatch) => {
    return fetch('http://localhost:3001/vapeshops')
      .then(response => {
        return response.json();
      }).then(vapeshops => {
        console.log(vapeshops);
        dispatch(addVapeshops(vapeshops));
      });
  }
}
