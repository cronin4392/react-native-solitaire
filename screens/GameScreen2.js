import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import Layout from './Layout';

import NewPileSystem from '../containers/NewPileSystem';

import { startNewGame } from '../actions/solitaire2';

class GameScreen extends React.PureComponent {
  componentDidMount() {
    this.props.startNewGame();
  }

  render() {
    return (
        <Fragment>
        <Layout>
          <View>
            <NewPileSystem />
          </View>
        </Layout>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startNewGame: () => dispatch(startNewGame()),
});

export default connect(null, mapDispatchToProps)(GameScreen);
