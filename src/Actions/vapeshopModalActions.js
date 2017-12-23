import {OPEN_NEW_VAPESHOP_MODAL, CLOSE_NEW_VAPESHOP_MODAL, CREATE_VAPESHOP, EDIT_VAPESHOP, OPEN_EDIT_VAPESHOP_MODAL,
CLOSE_EDIT_VAPESHOP_MODAL} from "../Constants/modalsConstants";

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
  return {
    type: CREATE_VAPESHOP,
    payload: vapeshop
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