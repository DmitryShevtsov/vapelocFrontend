import {GET_VAPESHOPS, GET_ONE_VAPESHOP, ADD_VAPESHOPS, ADD_VAPESHOP} from '../Constants/vapeshopsConstants';

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
    case ADD_VAPESHOP: {
      let vapeshops = state.filter((vapeshop) => {
        vapeshop.id === action.vapeshop.id
      });

      if (vapeshops.length > 0){
        return state;
      } else {
        return [
          ...state,
          action.vapeshop
        ]
      }
    }

    default:
    return state;
  }
}
