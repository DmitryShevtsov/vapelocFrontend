const DEFAULT_STATE = {
  isOpen: false,
  phone: null,
  password: null,
  username: null,
  isAuthModal: true
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'OPEN_AUTHENTICATION_MODAL': {
      return {
        ...state,
        isOpen: true
      };
    }
    case 'CLOSE_AUTHENTICATION_MODAL': {
      return {
        ...state,
        isOpen: false,
        isAuthModal: true
      }
    }
    case 'SHOW_REGISTRATION_MODAL' : {
      return {
        ...state,
        isAuthModal: false
      }
    }

    case 'SHOW_AUTHENTICATION_MODAL' : {
      return {
        ...state,
        isAuthModal: true
      }
    }

    default:
      return state;
  }
}
