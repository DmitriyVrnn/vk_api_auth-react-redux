import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER, GET_FRIENDS_SUCCESS, GET_FRIENDS } from "../constants";

const initialState = {
  name: '',
  error: '',
  isFetching: false,
  friendList: [],
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

    case GET_FRIENDS:
      return { ...state, error: '', isFetching: true };

    case GET_FRIENDS_SUCCESS:
      return { ...state, isFetching: false, error: '', friendList: action.payload };

    default:
      return state
  }
};
