import React from 'react';
import { connect } from 'react-redux';

import { incrementSecondsPassed } from '../actions';

class TimeContainer extends React.Component {
  state = {
    interval: null
  };

  componentDidMount() {
    this.setState({
      interval: setInterval(this.incrementSecondsPassed, 1000)
    });
  }

  componentWillUnmount() {
    const { interval } = this.state;
    clearInterval(interval);
  }

  incrementSecondsPassed = () => {
    const { gameState, incrementSecondsPassed } = this.props;

    if (gameState === 'PLAYING') {
      incrementSecondsPassed();
    }
  }

  render() {
    return (this.props.children(this.props));
  }
}

const mapStateToProps = (state, props) => {
  const { game } = state;
  const { secondsPassed, gameState } = game;

  return ({
    ...props,
    gameState,
    secondsPassed,
  });
};

const mapDispatchToProps = (dispatch) => ({
  incrementSecondsPassed: () => dispatch(incrementSecondsPassed()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeContainer);
