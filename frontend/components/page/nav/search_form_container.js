import { connect } from 'react-redux';

import { selectAllUsers } from '../../../reducers/selectors';
import {
  searchUsers,
  clearSearchUsers
} from '../../../actions/search_actions';
import SearchForm from './search_form';

const mapStateToProps = (state) => ({
  users: selectAllUsers(state.search)
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => dispatch(searchUsers(query)),
  clearSearchUsers: () => dispatch(clearSearchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);