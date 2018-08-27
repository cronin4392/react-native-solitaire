import { connect } from 'react-redux';

import {
  continueGame,
  pauseGame,
  startNewGame,
} from '../actions';

const GameStateContainer = (props) => props.children(props);

const mapStateToProps = (state, props) => {
  const { game } = state;
  const { gameState } = game;

  return ({
    ...props,
    gameState,
  });
};

const mapDispatchToProps = (dispatch) => ({
  continueGame: () => dispatch(continueGame()),
  pauseGame: () => dispatch(pauseGame()),
  startNewGame: () => dispatch(startNewGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameStateContainer);
