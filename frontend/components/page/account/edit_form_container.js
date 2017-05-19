import { connect } from 'react-redux';

import { fetchUser, updateUser } from '../../../actions/user_actions';
import EditForm from './edit_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);