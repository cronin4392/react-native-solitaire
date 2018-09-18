import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import NewDragContainer from './NewDragContainer';

const NewPileSystem = () => (
  <NewDragContainer>
    <View style={{ padding: 50, backgroundColor: 'red', position: 'absolute' }}><Text>YO!</Text></View>
  </NewDragContainer>
);

const mapStateToProps = (state, props) => {
  return ({
    
  });
};

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPileSystem);