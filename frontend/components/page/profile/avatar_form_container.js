import { connect } from 'react-redux';

import { updateUser } from '../../../actions/user_actions';
import { clearFormErrors } from '../../../actions/error_actions';

import AvatarForm from './avatar_form';

const mapStateToProps = (state) => ({
  errors: state.errors.avatarUpload
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
  clearErrors: () => dispatch(clearFormErrors('avatarUpload'))
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarForm);