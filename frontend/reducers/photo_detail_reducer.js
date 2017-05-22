import merge from 'lodash/merge';

import {
  RECEIVE_PHOTO_DETAIL,
  REMOVE_PHOTO
} from '../actions/photo_actions';

const PhotoDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PHOTO_DETAIL:
      return merge({}, state, action.photoDetail);

    case REMOVE_PHOTO:
      return {};

    default:
      return state;
  }
};

export default PhotoDetailReducer;