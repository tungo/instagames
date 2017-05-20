import { START_LOADING, END_LOADING } from '../actions/loading_actions';

const LoadingReducer = (state = false, action) => {
  switch(action.type) {
    case START_LOADING:
      return true;
    case END_LOADING:
      return false;

    default:
      return state;
  }
};

export default LoadingReducer;