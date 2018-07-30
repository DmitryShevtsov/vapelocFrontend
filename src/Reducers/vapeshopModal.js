import {OPEN_NEW_VAPESHOP_MODAL, CLOSE_NEW_VAPESHOP_MODAL} from "../Constants/modalsConstants";
import {ADD_NEW_MARKER, REMOVE_NEW_MARKER} from "../Constants/vapeshopsConstants";

const DEFAULT_STATE = {
  isOpen: false,
  markerPosition: null
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

    case ADD_NEW_MARKER: {
      return {
        ...state,
        markerPosition: {
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      }
    }

    case REMOVE_NEW_MARKER: {
      return {
        ...state,
        markerPosition: null
      }
    }

    default:
      return state;
  }
}