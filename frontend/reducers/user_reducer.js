import merge from 'lodash/merge';

import {
  RECEIVE_USER,
  RECEIVE_USER_PHOTO,
  RECEIVE_USER_PHOTOS,
} from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.user);

    case RECEIVE_USER_PHOTO:
      const { photo } = action;
      return merge({}, state, {photos: {[photo.id]: photo}});
    case RECEIVE_USER_PHOTOS:
      const { photos } = action;
      return merge({}, state, {photos});

    default:
      return state;
  }
};

export default UserReducer;