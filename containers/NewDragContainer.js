import React from 'react';
import { Animated, PanResponder, View } from 'react-native';

class DragContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      position: new Animated.ValueXY(props.position),
      checkAnimation: false, // used so this.props.onRelease() can be called, update position, and then Animation Spring will occur
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.checkAnimation === true) {
      this.setState({
        checkAnimation: false
      });
      Animated.spring(
        this.state.position,
        {toValue:{x:this.props.position.x,y:this.props.position.y}}
      ).start();
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.position.setOffset({x: this.state.position.x._value, y: this.state.position.y._value});
        this.state.position.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.position.x, dy: this.state.position.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.position.flattenOffset();
        this.props.onRelease();
        this.setState({
          checkAnimation: true
        });
      }
    });
  }

  render() {
    return (
      <Animated.View
        {...this._panResponder.panHandlers}
        style={{
          transform: this.state.position.getTranslateTransform()
        }}
      >
        { this.props.children }
      </Animated.View>
    )
  }
}

export default DragContainer;