import {ADD_ACTIVE_MARKER, HIDE_INFOWINDOW, REMOVE_ACTIVE_MARKER, SHOW_INFOWINDOW} from "../Constants/mapConstants";


const DEFAULT_STATE = {activeMarker: null, showingInfoWindow: false};

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case ADD_ACTIVE_MARKER: {
      return {...state,
      activeMarker: action.payload}
    }

    case REMOVE_ACTIVE_MARKER: {
      return {...state,
        activeMarker: null
      }
    }

    case SHOW_INFOWINDOW: {
      return {...state,
      showingInfoWindow: true}
    }

    case HIDE_INFOWINDOW: {
      return{...state,
      showingInfoWindow: false}
    }

    default:
      return state;
  }
}