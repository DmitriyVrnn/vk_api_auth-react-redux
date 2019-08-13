import {LOGIN_REQUEST,
        LOGIN_FAIL,
        LOGIN_SUCCESS,
        LOGOUT_USER,
        GET_FRIENDS_SUCCESS } from "../constants";

const VK = window.VK;

export const loginUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    });

    VK.Auth.login(r => {
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
        })
      }
    }, 4)
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER
    });
    VK.Auth.logout()
    localStorage.removeItem('name')
  };
};

export const getFriendsFromVK = (count) => {
  return (dispatch) => {
    VK.Api.call('friends.get', {fields: 'photo_200', count, v: '5.80'}, r => {
      const friendItems = r.response.items;
      console.log(r)
      if(!r.error){
        dispatch({
          type: GET_FRIENDS_SUCCESS,
          payload: friendItems
        })
      }
    })
  }
};
