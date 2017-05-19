import * as UserAPIUtil from '../util/user_api_util.js';
import { receiveFormErrors } from './error_actions';

export const RECEIVE_USER = 'RECEIVE_USER';


export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});


export const fetchUser = (userId) => (dispatch) => (
  UserAPIUtil.requestUser(userId)
    .then((user) => {
      dispatch(receiveUser(user));
      return user;
    })
    .fail((err) => console.log(err))
);

export const updateUser = (user) => (dispatch) => (
  UserAPIUtil.updateUser(user)
    .then((rspUser) => dispatch(receiveUser(rspUser)))
    .fail((err) =>
      dispatch(receiveFormErrors('accountEdit', err.responseJSON))
    )
);

export const updateAvatar = (user) => (dispatch) => (
  UserAPIUtil.updateAvatar(user)
    .then((rspUser) => dispatch(receiveUser(rspUser)))
    .fail((err) =>
      dispatch(receiveFormErrors('avatarUpload', err.responseJSON))
    )
);