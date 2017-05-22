import { connect } from 'react-redux';

import { likePhoto, unlikePhoto } from '../../../actions/like_actions';
import Like from './like';

const mapDispatchToProps = (dispatch) => ({
  likePhoto: (photoId) => dispatch(likePhoto(photoId)),
  unlikePhoto: (photoId) => dispatch(unlikePhoto(photoId))
});

export default connect(null, mapDispatchToProps)(Like);