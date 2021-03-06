import merge from 'lodash/merge';

import {
  RECEIVE_USER,
  UPDATE_USER
} from '../actions/user_actions';
import {
  RECEIVE_USER_PHOTO,
  RECEIVE_USER_PHOTOS,
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
import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);

  const { photo, photos, comment, userId } = action;
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_USER:
      return action.user;

    case UPDATE_USER:
      return merge(nextState, action.user);

    case RECEIVE_USER_PHOTO:
      if (nextState.id === window.currentUserId) {
        nextState =  merge(nextState, {photos: {[photo.id]: photo}});
        nextState.photosCount++;
      }
      return nextState;

    case RECEIVE_USER_PHOTOS:
      return merge(nextState, {photos});

    case REMOVE_PHOTO:
      if (nextState.photos && nextState.photos[action.id]) {
        delete nextState.photos[action.id];
      }
      return nextState;

    case RECEIVE_LIKE:
      if (nextState.photos && nextState.photos[action.photoId]) {
        nextState.photos[action.photoId].likesCount++;
      }
      return nextState;

    case REMOVE_LIKE:
      if (nextState.photos && nextState.photos[action.photoId]) {
        nextState.photos[action.photoId].likesCount--;
      }
      return nextState;

    case RECEIVE_COMMENT:
      if (nextState.photos && nextState.photos[comment.photoId]) {
        nextState.photos[comment.photoId].commentsCount++;
      }
      return nextState;

    case REMOVE_COMMENT:
      if (nextState.photos && nextState.photos[comment.photoId]) {
        nextState.photos[comment.photoId].commentsCount--;
      }
      return nextState;

    case RECEIVE_FOLLOW:
      if (nextState.id === userId) {
        nextState = merge(nextState, {currentUserFollowed: true});
        nextState.followersCount++;
      }
      if (nextState.followers && nextState.followers[userId]) {
        nextState.followers[userId].currentUserFollowed = true;
      }
      if (nextState.following && nextState.following[userId]) {
        nextState.following[userId].currentUserFollowed = true;
      }

      if (nextState.id === window.currentUserId) {
        nextState.followingCount++;
      }

      return nextState;

    case REMOVE_FOLLOW:
      if (nextState.id === userId) {
        nextState = merge(nextState, {currentUserFollowed: false});
        nextState.followersCount--;
      }
      if (nextState.followers && nextState.followers[userId]) {
        nextState.followers[userId].currentUserFollowed = false;
      }
      if (nextState.following && nextState.following[userId]) {
        nextState.following[userId].currentUserFollowed = false;
      }

      // current user page
      if (nextState.id === window.currentUserId) {
        nextState.followingCount--;
      }

      return nextState;

    default:
      return state;
  }
};

export default UserReducer;