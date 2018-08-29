import React from 'react';
import { Animated, PanResponder, View } from 'react-native';
import { connect } from 'react-redux';

import {
  createDragger,
  draggerReleased,
} from '../actions';

class SetDragContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    const { createDragger } = this.props;

    this.state = {
      panResponder: null,
    };
    createDragger(new Animated.ValueXY());
  }

  componentDidUpdate(prevProps) {
    // Create a new PanResponder instance if one didn't exist
    // Cannot happen on componentDidMount since createDragger hasn't updated values yet
    if (!prevProps.dragger && this.props.dragger) {
      this._animatedValueX = 0;
      this._animatedValueY = 0;

      this.props.dragger.x.addListener((value) => this._animatedValueX = value.value);
      this.props.dragger.y.addListener((value) => this._animatedValueY = value.value);

      const panResponder = PanResponder.create({
        // onMoveShouldSetResponderCapture: () => true, //Tell iOS that we are allowing the movement
        // onMoveShouldSetPanResponderCapture: () => true, // Same here, tell iOS that we allow dragging
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          this.props.dragger.setOffset({x: this._animatedValueX, y: this._animatedValueY});
          this.props.dragger.setValue({x: 0, y: 0});
        },
        onPanResponderMove: Animated.event([
          null, { dx: this.props.dragger.x, dy: this.props.dragger.y }
        ]),
        onPanResponderRelease: (evt, gestureState) => {
          const { moveX, moveY } = gestureState;
          this.props.draggerReleased({
            x: moveX,
            y: moveY,
          });
          this.props.dragger.flattenOffset();
          Animated.spring(
            this.props.dragger,
            {toValue:{x:0,y:0}}
          ).start();
        }
      });

      this.setState({ panResponder });
    }
  }

  render() {
    const { panResponder } = this.state;

    if (!panResponder) {
      return null;
    }

    const panStyle = {
      transform: this.props.dragger.getTranslateTransform()
    };

    return (
      <View
        {...panResponder.panHandlers}
        style={{ backgroundColor: 'transparent', flex: 1 }} /* TODO: move these styles out of the component? */
      >
        { this.props.children }
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { dragger } = state;

  return ({
    ...props,
    dragger: dragger.dragger,
  });
};

const mapDispatchToProps = (dispatch) => ({
  createDragger: dragger => dispatch(createDragger(dragger)),
  draggerReleased: position => dispatch(draggerReleased(position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetDragContainer);