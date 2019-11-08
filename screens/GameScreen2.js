import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";

import Layout from "./Layout";
import PlayField from "../components/PlayField2";
import CardsContainer from "../containers/CardsContainer2";

import { startNewGame } from "../actions/solitaire2";

class GameScreen extends React.PureComponent {
  componentDidMount() {
    this.props.startNewGame();
  }

  render() {
    return (
      <Fragment>
        <Layout>
          <View>
            <CardsContainer>{props => <PlayField {...props} />}</CardsContainer>
          </View>
        </Layout>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startNewGame: () => dispatch(startNewGame())
});

export default connect(
  null,
  mapDispatchToProps
)(GameScreen);
