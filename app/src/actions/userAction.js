import {LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_USER} from "../constants";

const VK = window.VK;

export const loginUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    });

    VK.Auth.login(r => {
      if (r.session) {
        const username = r.session.user.first_name
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
        })
      }
    }, 4)
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
      payload: '',
    });
    VK.Auth.logout();
    localStorage.removeItem('name')
  };
};
