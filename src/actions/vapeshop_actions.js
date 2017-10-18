import { GET_ONE_VAPESHOP, GET_VAPESHOPS } from "../constants/action_types";

export function getOneVapeshop() {
  return {
    type: GET_ONE_VAPESHOP
  }
}

export function getVapeshops() {
  return {
    type: GET_VAPESHOPS
  }
}