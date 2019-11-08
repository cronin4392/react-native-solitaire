import React, { Fragment } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

import Card from "../Card";

import CardContainer from "../../containers/CardContainer";
import GetDragContainer from "../../containers/GetDragContainer";
import SelectedContainer from "../../containers/SelectedContainer";

class SelectedCard extends React.PureComponent {
  render() {
    const { id, width, px, py } = this.props;
    if (!px || !py || !width) {
      return null;
    }

    return (
      <View
        style={{
          position: "absolute",
          left: px,
          top: py
        }}
      >
        <CardContainer id={id}>
          {cardData => <Card {...cardData} columnWidth={width} />}
        </CardContainer>
      </View>
    );
  }
}

const SelectedCards = () => (
  <GetDragContainer>
    {({ dragger }) => (
      <Animated.View
        pointerEvents="none"
        style={[
          styles.container,
          { transform: dragger.getTranslateTransform() }
        ]}
      >
        <SelectedContainer>
          {({ selected }) => (
            <Fragment>
              {selected.map(data => (
                <SelectedCard key={data.id} {...data} />
              ))}
            </Fragment>
          )}
        </SelectedContainer>
      </Animated.View>
    )}
  </GetDragContainer>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  }
});

export default SelectedCards;
