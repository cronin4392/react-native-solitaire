import { connect } from 'react-redux';

import DropZone from '../components/DropZone';

import { moveSelectedToLocation } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onDropzoneClick: zone => dispatch(moveSelectedToLocation(zone))
});

export default connect(null, mapDispatchToProps)(DropZone);
