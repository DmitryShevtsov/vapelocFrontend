import { GET_ONE_VAPESHOP, GET_VAPESHOPS, ADD_VAPESHOPS, ADD_VAPESHOP } from '../Constants/vapeshopsConstants';
import { URL } from '../Constants/urlsConstants';

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

export function addVapeshop(vapeshop) {
  return {
    type: ADD_VAPESHOP,
    vapeshop
  }
}

export function fetchVapeshops() {
  return (dispatch) => {
    return fetch(`${URL}/vapeshops`)
      .then(response => {
        return response.json();
      }).then(vapeshops => {
        console.log(vapeshops);
        dispatch(addVapeshops(vapeshops));
      });
  }
}

export function fetchSingleVapeshop(id) {
  return (dispatch) => {
    return fetch(`${URL}/vapeshops/${id}`)
      .then(response => {
        return response.json();
      }).then(vapeshop => {
        console.log(vapeshop);
        dispatch(addVapeshop(vapeshop));
      });
  }
}
