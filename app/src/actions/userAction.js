import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  GET_FRIENDS_SUCCESS, GET_FRIENDS_ERROR, GET_FRIENDS_REQUEST,
} from '../constants';

const { VK } = window;

// авторизация
export const loginUser = () => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  VK.Auth.login((r) => {
    if (r.session) {
      const username = r.session.user.first_name;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: username,
      });
      localStorage.setItem('name', username);
    } else {
      dispatch({
        type: LOGIN_FAIL,
        error: true,
        payload: new Error('Ошибка авторизации'),
      });
    }
  }, 4);
};

// выход
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  VK.Auth.logout();
  localStorage.removeItem('name');
};

// получение друзей
export const getFriendsFromVK = (count) => (dispatch) => {
  dispatch({
    type: GET_FRIENDS_REQUEST,
  });
  VK.Api.call('friends.get', { fields: 'photo_200', count, v: '5.80' }, (r) => {
    const friendItems = r.response.items;
    if (!r.error) {
      dispatch({
        type: GET_FRIENDS_SUCCESS,
        payload: friendItems,
      });
    } else {
      dispatch({
        type: GET_FRIENDS_ERROR,
        payload: new Error('Ошибка при получении списка друзей'),
      });
    }
  });
};
