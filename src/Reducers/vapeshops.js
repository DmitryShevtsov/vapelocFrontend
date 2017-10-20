import {GET_VAPESHOPS, GET_ONE_VAPESHOP, ADD_VAPESHOPS} from '../Constants/vapeshopsConstants';

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_VAPESHOPS: {
      return action.vapeshops;
    }

    case GET_VAPESHOPS: {
      return [...state];
    }

    case GET_ONE_VAPESHOP: {
      return state.filter((item) => {
        item.id == action.id
      });
    }

    default:
    return state;
  }
}
