import { connect } from 'react-redux';

import { fetchUser, updateUser } from '../../../actions/user_actions';
import { clearFormErrors } from '../../../actions/error_actions';
import EditForm from './edit_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  errors: state.errors.accountEdit
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (user) => dispatch(updateUser(user)),
  clearErrors: () => dispatch(clearFormErrors('accountEdit'))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);