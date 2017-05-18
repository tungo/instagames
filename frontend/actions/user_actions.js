import * as UserAPIUtil from '../util/user_api_util.js';

export const RECEIVE_USER = 'RECEIVE_USER';


export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});


export const fetchUser = (username) => (dispatch) => (
  UserAPIUtil.requestUser(username)
    .then((user) => dispatch(receiveUser(user)))
    .fail((err) => console.log(err))
);