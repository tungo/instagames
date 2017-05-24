import { connect } from 'react-redux';

import { selectAllFollows } from '../../../reducers/selectors';
import FollowIndex from './follow_index';

const mapStateToProps = (state, ownProps) => ({
  follows: (ownProps.followType === 'followers')
           ? selectAllFollows(state.user.followers)
           : selectAllFollows(state.user.following)
});

export default connect(mapStateToProps)(FollowIndex);