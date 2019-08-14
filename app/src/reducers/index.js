import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_USER,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_REQUEST,
  GET_FRIENDS_ERROR,
} from '../constants';

const initialState = {
  name: '',
  error: '',
  friendList: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, error: '' };

    case LOGIN_SUCCESS:
      return { ...state, name: action.payload };

    case LOGIN_FAIL:
      return { ...state, error: action.payload.message };

    case LOGOUT_USER:
      return {
        ...state, error: '', name: action.payload,
      };

    case GET_FRIENDS_REQUEST:
      return { ...state, isLoading: true };

    case GET_FRIENDS_SUCCESS:
      return {
        ...state, isLoading: false, friendList: action.payload,
      };

    case GET_FRIENDS_ERROR:
      return { ...state, isLoading: false, error: action.payload.message };

    default:
      return state;
  }
};
