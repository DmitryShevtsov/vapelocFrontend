import {
  ADD_VAPESHOPS, ADD_VAPESHOP, CLEAR_ACTIVE_VAPESHOP, ADD_VAPESHOP_ERRORS,
  REMOVE_VAPESHOP_ERRORS
} from '../Constants/vapeshopsConstants';

const DEFAULT_STATE = {vapeshopsList: [], activeVapeshop: null, vapeshopErrors: {}};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {

    case ADD_VAPESHOPS: {
      return {...state, vapeshopsList: action.vapeshops};
    }

    case ADD_VAPESHOP: {
      return {...state, activeVapeshop: action.vapeshop};
    }
    case CLEAR_ACTIVE_VAPESHOP: {
      return {...state, activeVapeshop: null};
    }

    case ADD_VAPESHOP_ERRORS: {
      return {...state,
      vapeshopErrors: action.payload}
    }

    case REMOVE_VAPESHOP_ERRORS: {
      return {...state,
      vapeshopErrors: {}}
    }


    default:
      return state;
  }
}
