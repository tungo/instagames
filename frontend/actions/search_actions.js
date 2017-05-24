import * as UserAPIUtil from '../util/user_api_util.js';

export const RECEIVE_SEARCH_USERS = 'RECEIVE_SEARCH_USERS';
export const CLEAR_SEARCH_USERS = 'CLEAR_SEARCH_USERS';


export const receiveSearchUsers = (users) => ({
  type: RECEIVE_SEARCH_USERS,
  users
});

export const clearSearchUsers = () => ({
  type: CLEAR_SEARCH_USERS
});


export const searchUsers = (query) => (dispatch) => (
  UserAPIUtil.searchUsers(query)
    .then((users) => {
      dispatch(receiveSearchUsers(users));
      return users;
    })
);