import React from 'react';
import { Text, View } from 'react-native';

import NewDragContainer from './NewDragContainer';

class NewPileSystem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      position: {
        x: 0,
        y: 300
      },
    };
  }

  onRelease = () => {
    this.setState({
      position: {
        x: 100,
        y: 100,
      },
    });
  }

  render() {
    return (
      <NewDragContainer position={this.state.position} onRelease={this.onRelease}>
        <View style={{ padding: 50, backgroundColor: 'red', position: 'absolute' }}><Text>YO!</Text></View>
      </NewDragContainer>
    );
  }
};

export default NewPileSystem;