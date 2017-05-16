import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const nullState = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const { currentUser } = action;
      return merge({}, nullState, { currentUser });

    case RECEIVE_ERRORS:
      const { errors } = action;
      return merge({}, nullState, { errors })

    default:
      return state;
  }
};

export default SessionReducer;