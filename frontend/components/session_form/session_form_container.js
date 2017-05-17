import { connect } from 'react-redux';

import {
  login,
  signup,
  clearErrors,
  demoLogin
} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  errors: state.session.errors,
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    formType,
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: () => dispatch(demoLogin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);