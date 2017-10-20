export function authenticateUser() {
  return (dispatch) => {
    return fetch('URL', {
        method: 'POST'
      })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
      });
  }
}

export function getCurrentUser() {

}

export function permitCurrentUser() {
}
