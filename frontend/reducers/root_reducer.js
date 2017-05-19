import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
import ErrorsReducer from './errors_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  errors: ErrorsReducer,
  user: UserReducer
});

export default RootReducer;