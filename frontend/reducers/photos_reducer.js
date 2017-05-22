import merge from 'lodash/merge';

import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';
import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, state, action.photos);

    case RECEIVE_PHOTO:
      const { photo } = action;
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

    default:
      return state;
  }
};

export default PhotosReducer;