import { connect } from 'react-redux';

import Loading from './loading';

const mapStateToProps = (state) => ({
  loading: state.loading
});

export default connect(mapStateToProps)(Loading);