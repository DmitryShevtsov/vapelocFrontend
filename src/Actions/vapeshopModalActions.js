import {OPEN_NEW_VAPESHOP_MODAL, CLOSE_NEW_VAPESHOP_MODAL, EDIT_VAPESHOP, OPEN_EDIT_VAPESHOP_MODAL,
CLOSE_EDIT_VAPESHOP_MODAL} from "../Constants/modalsConstants";
import {URL} from "../Constants/urlsConstants";
import {fetchVapeshops, addVapeshopErrors} from "./vapeshopActions";

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

export function createVapeshop(vapeshop) {
  return (dispatch) => {
    let data = new FormData();
    data.append('name', vapeshop.name);
    data.append('description', vapeshop.description);
    return fetch(`${URL}/vapeshops`, {method: 'POST', body: data}).then((response) => {
      if (response.status === 201) {
        return response.json();
      }
      else {
        throw response.json().then((res) => {
          return res;
        });
      }
    }).then(() => {
      fetchVapeshops();
    })
      .catch((error) => {
        Promise.resolve(error).then((value) => {
          dispatch(addVapeshopErrors(value));
        });
      });
  }

}

export function editVapeshop() {
  return {
    type: EDIT_VAPESHOP
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