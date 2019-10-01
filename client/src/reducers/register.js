export default function registrationReducer(state = {
  loading: false,
  user:
    {
      id: 0,
      first_name: '',
      last_name: ''
    },
  registerError: false,
  registerSuccess: false,
  loggedIn: false,
  logInError: false
}, action) {
  switch (action.type) {

    case "REGISTERING":
      return {loading: true, user: state.user, registerError: state.registerError, registerSuccess: state.registerSuccess, loggedIn: state.loggedIn, logInError: state.logInError}

    case "REGISTER_SUCCESS":
      debugger // I think we return action.payload here.
      return {loading: true, user: action.payload, registerError: state.registerError, registerSuccess: true, loggedIn: state.loggedIn, logInError: state.logInError}

    case 'REGISTER_ERROR':
      return {loading: true, user: state.user, registerError: false, registerSuccess: state.registerSuccess, loggedIn: state.loggedIn, logInError: state.logInError}

    case 'LOGGING_IN':
      return {loading: true, user: state.user, registerError: state.registerError, registerSuccess: state.registerSuccess, loggedIn: state.loggedIn, logInError: state.logInError}

      case 'LOG_IN_SUCCESS':
        return {loading: false, user: state.user, registerError: state.registerError, registerSuccess: state.registerSuccess, loggedIn: true, logInError: state.logInError}

        case 'LOG_IN_ERROR':
          return {loading: false, user: state.user, registerError: state.registerError, registerSuccess: state.registerSuccess, loggedIn: state.loggedIn, logInError: true}

    default:
      return state;
  }
};
