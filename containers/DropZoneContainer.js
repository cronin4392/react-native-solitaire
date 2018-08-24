import { connect } from 'react-redux';

import DropZone from '../components/DropZone';

import { moveSelectedToZone } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onDropzoneClick: zone => dispatch(moveSelectedToZone(zone))
});

export default connect(null, mapDispatchToProps)(DropZone);