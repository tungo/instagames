import { connect } from 'react-redux';

import { logout } from '../../../actions/session_actions';
import Nav from './nav';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Nav);