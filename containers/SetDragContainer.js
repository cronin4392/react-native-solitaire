import React from 'react';
import { Animated, PanResponder, View } from 'react-native';
import { connect } from 'react-redux';

import {
  createDragger,
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
    if (!prevProps.dragger && this.props.dragger) {
      this._animatedValueX = 0;
      this._animatedValueY = 0;

      this.props.dragger.x.addListener((value) => this._animatedValueX = value.value);
      this.props.dragger.y.addListener((value) => this._animatedValueY = value.value);

      const panResponder = PanResponder.create({
        onMoveShouldSetResponderCapture: () => true, //Tell iOS that we are allowing the movement
        onMoveShouldSetPanResponderCapture: () => true, // Same here, tell iOS that we allow dragging
        onPanResponderGrant: () => {
          this.props.dragger.setOffset({x: this._animatedValueX, y: this._animatedValueY});
          this.props.dragger.setValue({x: 0, y: 0});
        },
        onPanResponderMove: Animated.event([
          null, {dx: this.props.dragger.x, dy: this.props.dragger.y}
        ]),
        onPanResponderRelease: () => {
          this.props.dragger.flattenOffset();
          Animated.spring(
            this.props.dragger,
            {toValue:{x:0,y:0}}
          ).start();
        }
      });

      this.setState({ panResponder })
    }
  }

  render() {
    const { panResponder } = this.state;

    if (!panResponder) {
      return null;
    }

    const panStyle = true ? {
      transform: this.props.dragger.getTranslateTransform()
    } : this.props.dragger.getLayout();

    return (
      <View
        {...panResponder.panHandlers}
      >
        { this.props.children({ panStyle }) }
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SetDragContainer);
// export default SetDragContainer;