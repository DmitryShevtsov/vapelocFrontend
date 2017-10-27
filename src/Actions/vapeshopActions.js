import {ADD_VAPESHOPS, ADD_VAPESHOP, CLEAR_ACTIVE_VAPESHOP} from '../Constants/vapeshopsConstants';
import {URL} from '../Constants/urlsConstants';


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
        dispatch(addVapeshops(vapeshops));
      });
  }
}

export function fetchSingleVapeshop(id) {
  console.log(id);
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
 export function clearActiveVapeshop() {
   return {
     type: CLEAR_ACTIVE_VAPESHOP
   }
 }
