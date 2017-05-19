import merge from 'lodash/merge';

import {
  RECEIVE_FORM_ERRORS,
  CLEAR_FORM_ERRORS
} from '../actions/error_actions';

const nullState = Object.freeze({
  photoUpload: [],
  avatarUpload: []
});

const ErrorsReducer = (state = nullState, action) => {
  Object.freeze(state);
  const { form } = action;

  switch(action.type) {
    case RECEIVE_FORM_ERRORS:
      return merge({}, state, {[form]: action.errors});

    case CLEAR_FORM_ERRORS:
      return Object.assign({}, state, {[form]: []});

    default:
      return state;
  }
};

export default ErrorsReducer;