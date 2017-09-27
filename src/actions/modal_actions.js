import {OPEN_AUTHENTICATION_MODAL, CLOSE_AUTHENTICATION_MODAL} from './types';

export function openAuthenticationModal() {
  return {
    type: OPEN_AUTHENTICATION_MODAL
  }
}

export function closeAuthenticationModal() {
  console.log('in close modal action');
  return {
    type: CLOSE_AUTHENTICATION_MODAL
  }
}
