import {OPEN_NEW_VAPESHOP_MODAL, CLOSE_NEW_VAPESHOP_MODAL, CREATE_VAPESHOP} from "../Constants/modalsConstants";

const DEFAULT_STATE = {
  isOpen: false,
  name: [],
  description: []
};

export default function newVapeshopModal(state = DEFAULT_STATE, action) {

  switch (action.type) {
    case OPEN_NEW_VAPESHOP_MODAL: {
      return {
        ...state,
        isOpen: true
      }
    }

    case CLOSE_NEW_VAPESHOP_MODAL: {
      return {
        ...state,
        isOpen: false
      }
    }

    default:
      return state;
  }
}