import { connect } from 'react-redux';

import { fetchUser, updatePassword } from '../../../actions/user_actions';
import { receiveFormErrors, clearFormErrors } from '../../../actions/error_actions';
import PasswordForm from './password_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  errors: state.errors.accountPassword
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updatePassword: (user) => dispatch(updatePassword(user)),
  receiveErrors: (err) => dispatch(receiveFormErrors('accountPassword', err)),
  clearErrors: () => dispatch(clearFormErrors('accountPassword'))
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForm);