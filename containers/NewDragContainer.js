import React from 'react';
import { Animated, PanResponder, View } from 'react-native';

class DragContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        Animated.spring(
          this.state.pan,
          {toValue:{x:0,y:0}}
        ).start();
      }
    });
  }

  render() {
    console.log(this.state.pan.getLayout());
    console.log(this.state.pan.getTranslateTransform());
    return (
      <Animated.View
        {...this._panResponder.panHandlers}
        style={{
          transform: this.state.pan.getTranslateTransform()
        }}
      >
        { this.props.children }
      </Animated.View>
    )
  }
}

export default DragContainer;