import merge from 'lodash/merge';

import {
  RECEIVE_PHOTO_UPLOAD_ERRORS,
  CLEAR_PHOTO_UPLOAD_ERRORS
} from '../actions/error_actions';

const ErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PHOTO_UPLOAD_ERRORS:
      return merge({}, state, {photoUpload: action.errors});
    case CLEAR_PHOTO_UPLOAD_ERRORS:
      return merge({}, state, {photoUpload: action.errors});

    default:
      return state;
  }
};

export default ErrorsReducer;