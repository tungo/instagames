import { connect } from 'react-redux';

import { selectAllPhotos } from '../../../reducers/selectors';
import { fetchUser } from '../../../actions/user_actions';
import { fetchPhotoDetail } from '../../../actions/photo_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  userId: ownProps.match.params.userId,
  photos: selectAllPhotos(state.user.photos)
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchPhotoDetail: (id) => dispatch(fetchPhotoDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);