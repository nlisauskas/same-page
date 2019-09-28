import {post} from 'axios';

export function signUp(info) {
  debugger
  const url = `api/users`
  return(dispatch) => {
    dispatch({type: 'REGISTERING'});
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then(() => {
        dispatch({type: 'REGISTER_SUCCESS'})
      })
    .catch(err => dispatch({type: 'REGISTER_ERROR', payload: err}));
  }
}

// export function loginUser(credentials) {
//   return(dispatch) => {
//     dispatch({type: 'LOGGING_IN'}); // alter to logging_in
//     post('/api/user_token', credentials)
//        .then(response => {
//          localStorage.setItem("jwt", response.data.token.token)
//          dispatch({type: 'LOG_IN_SUCCESS', payload: response.data.id})
//        })
//     .catch(err => dispatch({type: 'LOG_IN_ERROR', payload: err}));
//   }
// }
