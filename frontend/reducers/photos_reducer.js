import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';
import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);

  const { photos, photo, comment } = action;
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, state, photos);

    case RECEIVE_PHOTO:
      return merge({}, state, {[photo.id]: photo});

    case REMOVE_PHOTO:
      delete nextState[action.id];
      return nextState;

    case RECEIVE_LIKE:
      if (nextState[action.photoId]) {
        nextState[action.photoId].likesCount++;
        nextState[action.photoId].currentUserLiked = true;
      }
      return nextState;

    case REMOVE_LIKE:
      if (nextState[action.photoId]) {
        nextState[action.photoId].likesCount--;
        nextState[action.photoId].currentUserLiked = false;
      }
      return nextState;

    case RECEIVE_COMMENT:
      if (nextState[comment.photoId]) {
        nextState = merge(nextState, {
          [comment.photoId]: {
            comments: {
              [comment.id]: comment
            }
          }
        });
      }
      return nextState;

    case REMOVE_COMMENT:
      if (nextState[comment.photoId]) {
        delete nextState[comment.photoId].comments[comment.id];
      }
      return nextState;

    case RECEIVE_CURRENT_USER:
      if (!action.currentUser) {
        nextState = {};
      }
      return nextState;

    default:
      return state;
  }
};

export default PhotosReducer;