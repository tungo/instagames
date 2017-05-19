import merge from 'lodash/merge';

import {
  RECEIVE_PHOTO_DETAIL
} from '../actions/photo_actions';

const PhotoDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PHOTO_DETAIL:
      return merge({}, state, action.photoDetail);

    default:
      return state;
  }
};

export default PhotoDetailReducer;