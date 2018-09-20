import React from 'react';
import { Animated, PanResponder } from 'react-native';

import Card from '../Card';

export default class DraggableCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: new Animated.ValueXY(props.position),
      isDragging: false,
      checkAnimation: false, // used so this.props.onRelease() can be called, update position, and then Animation Spring will occur
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.position.x !== this.props.position.x ||
      prevProps.position.y !== this.props.position.y ||
      this.state.checkAnimation === true
    ) {
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
        this.setState({
          isDragging: true,
        });
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.position.x, dy: this.state.position.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.position.flattenOffset();
        this.props.onRelease(this.props.card.id);
        this.setState({
          checkAnimation: true,
          isDragging: false,
        });
      }
    });
  }

  render() {
    const dragZPosition = this.state.isDragging ? 500 : 0;
    return (
      <Animated.View
        {...this._panResponder.panHandlers}
        style={{
          transform: this.state.position.getTranslateTransform(),
          position: 'absolute',
          zIndex: this.props.card.locationIndex + dragZPosition
        }}
      >
        <Card card={this.props.card} isFaceUp={this.props.card.faceUp} columnWidth={this.props.columnWidth} />
      </Animated.View>
    )
  }
}