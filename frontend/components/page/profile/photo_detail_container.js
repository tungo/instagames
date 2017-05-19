import { connect } from 'react-redux';

import PhotoDetail from './photo_detail';

const mapStateToProps = (state) => ({
  photo: state.photoDetail
});

export default connect(mapStateToProps)(PhotoDetail);