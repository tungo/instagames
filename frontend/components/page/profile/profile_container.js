import { connect } from 'react-redux';

import { selectAllPhotos } from '../../../reducers/selectors';
import { fetchUser } from '../../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state) => ({
  user: state.user,
  photos: selectAllPhotos(state.user.photos)
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);