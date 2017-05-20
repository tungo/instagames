import { connect } from 'react-redux';

import { fetchUser, updateUser } from '../../../actions/user_actions';
import { clearFormErrors } from '../../../actions/error_actions';
import PasswordForm from './password_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  errors: state.errors.accountPassword
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (user) => dispatch(updateUser(user)),
  clearErrors: () => dispatch(clearFormErrors('accountPassword'))
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForm);