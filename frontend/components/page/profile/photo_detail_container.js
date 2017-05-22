import { connect } from 'react-redux';

import { deletePhoto } from '../../../actions/photo_actions';
import PhotoDetail from './photo_detail';

const mapStateToProps = (state) => ({
  photo: state.photoDetail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  deletePhoto: (id) => dispatch(deletePhoto(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail);