import { connect } from 'react-redux';

import { selectAllPhotos } from '../../../reducers/selectors';
import { feedPhotos } from '../../../actions/photo_actions';
import Feed from './feed';

const mapStateToProps = (state) => ({
  photos: selectAllPhotos(state.photos)
});

const mapDispatchToProps = (dispatch) => ({
  feedPhotos: (data) => dispatch(feedPhotos(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);