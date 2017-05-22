import merge from 'lodash/merge';

import {
  RECEIVE_PHOTO_DETAIL,
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

const PhotoDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState = merge({}, state);

  const { comment } = action;

  switch(action.type) {
    case RECEIVE_PHOTO_DETAIL:
      return merge({}, state, action.photoDetail);

    case REMOVE_PHOTO:
      return {};

    case RECEIVE_LIKE:
      if (nextState.id === action.photoId) {
        nextState.likesCount++;
        nextState.currentUserLiked = true;
      }
      return nextState;

    case REMOVE_LIKE:
      if (nextState.id === action.photoId) {
        nextState.likesCount--;
        nextState.currentUserLiked = false;
      }
      return nextState;

    case RECEIVE_COMMENT:
      if (nextState.id === comment.photoId) {
        nextState = merge(nextState, {comments: {[comment.id]: comment}});
      }
      return nextState;

    case REMOVE_COMMENT:
      if (nextState.id === comment.photoId) {
        delete nextState.comments[comment.id];
      }
      return nextState;

    default:
      return state;
  }
};

export default PhotoDetailReducer;