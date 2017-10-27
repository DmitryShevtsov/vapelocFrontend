import {ADD_VAPESHOPS, ADD_VAPESHOP, CLEAR_ACTIVE_VAPESHOP} from '../Constants/vapeshopsConstants';

const DEFAULT_STATE = {vapeshopsList: [], activeVapeshop: null};

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

    default:
      return state;
  }
}
