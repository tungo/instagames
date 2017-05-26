import merge from 'lodash/merge';

import {
  RECEIVE_USERS
} from '../actions/user_actions';
import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  const { users, userId } = action;
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_USERS:
      return users;

    case RECEIVE_FOLLOW:
      if (nextState[userId]) {
        nextState = merge(nextState, {[userId]: {currentUserFollowed: true}});
      }
      return nextState;

    case REMOVE_FOLLOW:
      if (nextState[userId]) {
        nextState = merge(nextState, {[userId]: {currentUserFollowed: false}});
      }
      return nextState;

    default:
      return state;
  }
};

export default UsersReducer;