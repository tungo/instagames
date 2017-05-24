import { connect } from 'react-redux';

import { followUser, unfollowUser } from '../../../actions/follow_actions';
import FollowItem from './follow_item';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  followUser: (userId) => dispatch(followUser(userId)),
  unfollowUser: (userId) => dispatch(unfollowUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowItem);