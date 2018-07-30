import {CLOSE_EDIT_VAPESHOP_MODAL, OPEN_EDIT_VAPESHOP_MODAL} from "../Constants/modalsConstants";

const DEFAULT_STATE = {
  isOpen: false
}

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {

    case OPEN_EDIT_VAPESHOP_MODAL: {
      return {
        ...state,
        isOpen: true
      }
    }

    case CLOSE_EDIT_VAPESHOP_MODAL: {
      return {
        ...state,
        isOpen: false
      }
    }

    default:
      return state;

  }
}