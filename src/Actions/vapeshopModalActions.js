import {
  OPEN_NEW_VAPESHOP_MODAL, CLOSE_NEW_VAPESHOP_MODAL, EDIT_VAPESHOP, OPEN_EDIT_VAPESHOP_MODAL,
  CLOSE_EDIT_VAPESHOP_MODAL
} from "../Constants/modalsConstants";
import {URL} from "../Constants/urlsConstants";
import {fetchVapeshops, addVapeshopErrors, removeVapeshopErrors, fetchSingleVapeshop} from "./vapeshopActions";
import {ADD_NEW_MARKER, REMOVE_NEW_MARKER} from "../Constants/vapeshopsConstants";

export function openNewVapeshopModal() {
  return {
    type: OPEN_NEW_VAPESHOP_MODAL
  }
}

export function closeNewVapeshopModal() {
  return {
    type: CLOSE_NEW_VAPESHOP_MODAL
  }
}

export function addNewMarker(payload) {
  return {
    type: ADD_NEW_MARKER,
    payload: payload
  }
}

export function removeNewMarker() {
  return {
    type: REMOVE_NEW_MARKER
  }
}

export function createVapeshop(vapeshop, user_id) {
  return (dispatch) => {
    return fetch(`${URL}/vapeshops`, {
      method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
        name: vapeshop.name,
        description: vapeshop.description,
        lat: vapeshop.lat,
        lng: vapeshop.lng,
        user_id: user_id
      })
    }).then((response) => {
      if (response.status === 201) {
        return response.json();
      }
      else {
        throw response.json().then((res) => {
          return res;
        });
      }
    }).then(() => {
      dispatch(fetchVapeshops());
      dispatch(removeVapeshopErrors());
      dispatch(closeNewVapeshopModal());
    })
      .catch((error) => {
        Promise.resolve(error).then((value) => {
          dispatch(addVapeshopErrors(value));
        });
      });
  }

}

export function editVapeshop(vapeshop) {
  return (dispatch) => {
    return fetch(`${URL}/vapeshops/${vapeshop.id}`, {
      method: 'PUT', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: vapeshop.name,
        description: vapeshop.description,
        lat: vapeshop.lat,
        lng: vapeshop.lng
      })
    }).then((res) => {
      if (res.status === 200) {
        dispatch(closeEditVapeshopModal());
        dispatch(fetchSingleVapeshop(vapeshop.id));

      }
      else {
        throw res.json().then((res) => {
          return res;
        })
      }
    })
      .catch((err) => {
        Promise.resolve(err).then((value) => {
          dispatch(addVapeshopErrors(value));
        });
      });
  }
}

export function openEditVapeshopModal() {
  return {
    type: OPEN_EDIT_VAPESHOP_MODAL
  }
}

export function closeEditVapeshopModal() {
  return {
    type: CLOSE_EDIT_VAPESHOP_MODAL
  }
}