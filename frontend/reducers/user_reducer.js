import merge from 'lodash/merge';

import {
  RECEIVE_USER,
  RECEIVE_USER_PHOTO,
  RECEIVE_USER_PHOTOS,
} from '../actions/user_actions';
import { REMOVE_PHOTO } from '../actions/photo_actions';
import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);

  const { photo, photos, comment } = action;
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_USER:
      return action.user;

    case RECEIVE_USER_PHOTO:
      return merge({}, state, {photos: {[photo.id]: photo}});
    case RECEIVE_USER_PHOTOS:
      return merge({}, state, {photos});

    case REMOVE_PHOTO:
      delete nextState.photos[action.id];
      return nextState;

    case RECEIVE_LIKE:
      if (nextState.photos[action.photoId]) {
        nextState.photos[action.photoId].likesCount++;
      }
      return nextState;

    case REMOVE_LIKE:
      if (nextState.photos[action.photoId]) {
        nextState.photos[action.photoId].likesCount--;
      }
      return nextState;

    case RECEIVE_COMMENT:
      if (nextState.photos[comment.photoId]) {
        nextState.photos[comment.photoId].commentsCount++;
      }
      return nextState;

    case REMOVE_COMMENT:
      if (nextState.photos[comment.photoId]) {
        nextState.photos[comment.photoId].commentsCount--;
      }
      return nextState;

    default:
      return state;
  }
};

export default UserReducer;