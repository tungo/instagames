import { connect } from 'react-redux';

import { createPhoto } from '../../../actions/photo_actions';
import { clearFormErrors } from '../../../actions/error_actions';

import UploadForm from './upload_form';

const mapStateToProps = (state) => ({
  errors: state.errors.photoUpload
});

const mapDispatchToProps = (dispatch) => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  clearErrors: () => dispatch(clearFormErrors('photoUpload'))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);