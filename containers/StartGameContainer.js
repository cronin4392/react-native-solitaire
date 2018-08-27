import { connect } from 'react-redux';

import {
  startNewGame,
} from '../actions';

const StartGameContainer = (props) => props.children(props);

const mapDispatchToProps = (dispatch) => ({
  startNewGame: () => dispatch(startNewGame()),
});

export default connect(null, mapDispatchToProps)(StartGameContainer);
