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
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState = merge({}, state);

  const { comment } = action;

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

    default:
      return state;
  }
};

export default PhotosReducer;