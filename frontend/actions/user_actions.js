import * as UserAPIUtil from '../util/user_api_util.js';
import { receiveFormErrors } from './error_actions';
import { receiveCurrentUser } from './session_actions';
import { startLoading, stopLoading } from './loading_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';


export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});



export const fetchUser = (userId) => (dispatch) => {
  dispatch(startLoading());

  return UserAPIUtil.requestUser(userId)
    .then((user) => {
      dispatch(receiveUser(user));
      return user;
    })
    .fail((err) => dispatch(stopLoading()));
};

export const updateProfile = (user) => (dispatch) => (
  UserAPIUtil.updateUser(user)
    .then((rspUser) => {
      dispatch(updateUser(rspUser));
      dispatch(receiveCurrentUser(rspUser));
      return rspUser;
    })
    .fail((err) =>
      dispatch(receiveFormErrors('accountEdit', err.responseJSON))
    )
);

export const updateAvatar = (user) => (dispatch) => {
  dispatch(startLoading());

  return UserAPIUtil.updateAvatar(user)
    .then((rspUser) => dispatch(updateUser(rspUser)))
    .fail((err) =>
      dispatch(receiveFormErrors('avatarUpload', err.responseJSON))
    );
};

export const deleteAvatar = () => (dispatch) => {
  dispatch(startLoading());

  return UserAPIUtil.deleteAvatar()
    .then((rspUser) => dispatch(updateUser(rspUser)))
    .fail((err) =>
      dispatch(receiveFormErrors('avatarUpload', err.responseJSON))
    );
};

export const updatePassword = (user) => (dispatch) => (
  UserAPIUtil.updateUser(user)
    .fail((err) =>
      dispatch(receiveFormErrors('accountPassword', err.responseJSON))
    )
);

export const fetchUsers = (query) => (dispatch) => (
  UserAPIUtil.requestUsers(query)
    .then((users) => dispatch(receiveUsers(users)))
);