import {
  OPEN_AUTHENTICATION_MODAL, CLOSE_AUTHENTICATION_MODAL,
  SHOW_AUTHENTICATION_MODAL, SHOW_REGISTRATION_MODAL
} from '../constants/action_types';

export function openAuthenticationModal() {
  return {
    type: OPEN_AUTHENTICATION_MODAL
  }
}

export function closeAuthenticationModal() {
  return {
    type: CLOSE_AUTHENTICATION_MODAL
  }
}

export function showAuthenticationModal() {
  return {
    type: SHOW_AUTHENTICATION_MODAL
  }

}

export function showRegistrationModal() {
  return {
    type: SHOW_REGISTRATION_MODAL
  }
}
