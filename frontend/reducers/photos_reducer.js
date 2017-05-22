import merge from 'lodash/merge';

import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, state, action.photos);

    case RECEIVE_PHOTO:
      const { photo } = action;
      return merge({}, state, {[photo.id]: photo})

    case REMOVE_PHOTO:
      let nextState = merge({}, state);
      delete nextState[action.id];
      return nextState;

    default:
      return state;
  }
};

export default PhotosReducer;