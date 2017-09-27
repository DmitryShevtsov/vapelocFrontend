const DEFAULT_STATE = {
  isOpen: false,
  phone: null,
  password: null
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'OPEN_AUTHENTICATION_MODAL': {
      console.log('IN OPEN AUTH MODAL REDUCER');
      return {
        ...state,
        isOpen: true
      };
    }
    case 'CLOSE_AUTHENTICATION_MODAL': {
      return {
        ...state,
        isOpen: false
      }
    }
    default:
      return state;
  }
}
