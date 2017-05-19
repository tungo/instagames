import * as UserAPIUtil from '../util/user_api_util.js';

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
    .fail((err) => console.log(err))
);

export const updateAvatar = (user) => (dispatch) => (
  UserAPIUtil.updateAvatar(user)
    .then((rspUser) => dispatch(receiveUser(rspUser)))
    .fail((err) => console.log(err))
);