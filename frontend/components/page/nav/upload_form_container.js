import { connect } from 'react-redux';

import { createPhoto } from '../../../actions/photo_actions';

import UploadForm from './upload_form';

const mapDispatchToProps = (dispatch) => ({
  createPhoto: (photo) => dispatch(createPhoto(photo))
});

export default connect(null, mapDispatchToProps)(UploadForm);