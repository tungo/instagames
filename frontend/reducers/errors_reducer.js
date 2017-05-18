import merge from 'lodash/merge';

import {
  RECEIVE_FORM_ERRORS,
  CLEAR_FORM_ERRORS
} from '../actions/error_actions';

const ErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FORM_ERRORS:
      const { form, errors } = action;
      return merge({}, state, {[form]: errors});

    case CLEAR_FORM_ERRORS:
      const { form } = action;
      return merge({}, state, {[form]: []});

    default:
      return state;
  }
};

export default ErrorsReducer;