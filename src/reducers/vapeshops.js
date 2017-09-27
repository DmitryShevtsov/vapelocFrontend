const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'VAPESHOPS_GET_ALL': {
      console.log(action);
      console.log('CALL THE ACTION');
      return [];
    }
    default:
      return state;
  }
}

