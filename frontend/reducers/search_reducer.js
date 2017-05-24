import {
  RECEIVE_SEARCH_USERS,
  CLEAR_SEARCH_USERS
} from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_USERS:
      return action.users;

    case CLEAR_SEARCH_USERS:
      return {};

    default:
      return state;
  }
};

export default SearchReducer;