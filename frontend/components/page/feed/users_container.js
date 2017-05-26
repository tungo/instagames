import { connect } from 'react-redux';

import { selectAllUsers } from '../../../reducers/selectors';
import { fetchUsers } from '../../../actions/user_actions';
import { followUser, unfollowUser } from '../../../actions/follow_actions';
import Users from './users';

const mapStateToProps = (state) => ({
  users: selectAllUsers(state.users),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (query) => dispatch(fetchUsers(query)),
  followUser: (userId) => dispatch(followUser(userId)),
  unfollowUser: (userId) => dispatch(unfollowUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);