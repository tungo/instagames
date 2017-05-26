import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
import ErrorsReducer from './errors_reducer';
import UserReducer from './user_reducer';
import PhotoDetailReducer from './photo_detail_reducer';
import LoadingReducer from './loading_reducer';
import SearchReducer from './search_reducer';
import UsersReducer from './users_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  errors: ErrorsReducer,
  user: UserReducer,
  photoDetail: PhotoDetailReducer,
  loading: LoadingReducer,
  search: SearchReducer,
  users: UsersReducer
});

export default RootReducer;