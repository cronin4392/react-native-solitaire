import React, { Fragment } from 'react';
import { Animated, ScrollView, View } from 'react-native';
import Layout from './Layout';

import SetDragContainer from '../containers/SetDragContainer';
import Nav from '../components/Nav';
import OffField from '../components/OffField';
import PlayField from '../components/PlayField';

const GameScreen = ({ navigation }) => 
  <Layout>
    {/* <ScrollView style={{ flex: 1 }} alwaysBounceVertical={false}> */}
    <SetDragContainer>
      {({ panStyle }) => (
        <Animated.View style={panStyle}>
          <Nav navigation={navigation} />
          <OffField />
          <PlayField />
        </Animated.View>
      )}
    </SetDragContainer>
    {/* </ScrollView> */}
  </Layout>

export default GameScreen;
