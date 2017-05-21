import { START_LOADING, STOP_LOADING } from '../actions/loading_actions';
import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO_DETAIL
} from '../actions/photo_actions';
import {
  RECEIVE_USER
} from '../actions/user_actions';

const LoadingReducer = (state = false, action) => {
  Object.freeze(state);

  switch(action.type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;

    case RECEIVE_PHOTO:
    case RECEIVE_PHOTOS:
    case RECEIVE_PHOTO_DETAIL:
    case RECEIVE_USER:
      return false;

    default:
      return state;
  }
};

export default LoadingReducer;