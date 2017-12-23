import {EDIT_VAPESHOP, CLOSE_EDIT_VAPESHOP_MODAL, OPEN_EDIT_VAPESHOP_MODAL} from "../Constants/modalsConstants";

const DEFAULT_STATE = {
  isOpen: false,
  name: [],
  description: []
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {

    case EDIT_VAPESHOP: {
      return {
        ...state,
        name: action.payload.name,
        description: action.payload.description
      }
    }

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