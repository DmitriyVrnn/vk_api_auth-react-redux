import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER } from "../constants";

const initialState = {
  name: '',
  error: '',
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, name: action.payload };

    case LOGIN_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    case LOGOUT_USER:
      return { ...state, isFetching: false, error: '', name: action.payload};

    default:
      return state
  }
};
