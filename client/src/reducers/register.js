export default function registrationReducer(state = {
  loading: false,
  user:
    {
      id: 0,
      first_name: '',
      last_name: ''
    },
  registerError: false,
  registerSuccess: false
}, action) {
  switch (action.type) {

    case "REGISTERING":
      return {loading: true, user: state.user, registerError: state.registerError, registerSuccess: state.registerSuccess}

    case "REGISTER_SUCCESS":
      debugger // I think we return action.payload here.
      return {loading: true, user: state.user, registerError: state.registerError, registerSuccess: true}

    case 'REGISTER_ERROR':
      return {loading: true, user: state.user, registerError: false, registerSuccess: state.registerSuccess}

    default:
      return state;
  }
};
