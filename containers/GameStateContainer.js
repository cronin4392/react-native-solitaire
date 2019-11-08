import { connect } from "react-redux";

import { setGameState, startNewGame } from "../actions";

const GameStateContainer = props => props.children(props);

const mapStateToProps = (state, props) => {
  const { game } = state;
  const { gameState } = game;

  return {
    ...props,
    gameState
  };
};

const mapDispatchToProps = dispatch => ({
  startNewGame: () => dispatch(startNewGame()),
  setGameState: state => dispatch(setGameState(state))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStateContainer);
