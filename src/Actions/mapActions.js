import {ADD_ACTIVE_MARKER, HIDE_INFOWINDOW, REMOVE_ACTIVE_MARKER, SHOW_INFOWINDOW} from "../Constants/mapConstants";

export function addActiveMarker(payload) {
  return {
    type: ADD_ACTIVE_MARKER,
    payload: payload
  }
}

export function removeActiveMarker() {
  return {
    type: REMOVE_ACTIVE_MARKER
  }
}

export function showInfoWindow() {
  return {
    type: SHOW_INFOWINDOW
  }
}

export function hideInfoWindow() {
  return {
    type: HIDE_INFOWINDOW
  }
}