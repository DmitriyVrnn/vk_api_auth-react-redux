import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { loginUser, logoutUser, getFriendsFromVK } from '../../actions/userAction';
import UserPage from '../../components/UserPage';

import './styles.css';

const EntranceController = ({
  user, loginUserConnect, logoutUserConnect, getFriendsFromVKConnect, friendList, isLoading,
}) => {
  const getStorageName = localStorage.getItem('name');
  if (user || getStorageName) {
    return (
      <UserPage
        isLoading={isLoading}
        name={user}
        storageName={getStorageName}
        logoutUser={logoutUserConnect}
        friendList={friendList}
        getFriendsFromVK={getFriendsFromVKConnect}
      />
    );
  } return (
    <div className="btn-wrapped">
      <button
        type="button"
        className="btn-login"
        onClick={loginUserConnect}
      >
        <span><i className="fab fa-vk" /></span>
            Войти
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.name,
  friendList: state.friendList,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginUserConnect: loginUser,
  logoutUserConnect: logoutUser,
  getFriendsFromVKConnect: getFriendsFromVK,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EntranceController);

EntranceController.propTypes = {
  user: PropTypes.string,
  loginUserConnect: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  logoutUserConnect: PropTypes.func.isRequired,
  getFriendsFromVKConnect: PropTypes.func,
  friendList: PropTypes.arrayOf(PropTypes.any),
};

EntranceController.defaultProps = {
  user: '',
  getFriendsFromVKConnect: () => {},
  friendList: [],
};
