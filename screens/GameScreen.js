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
        <Fragment>
          <Nav navigation={navigation} />
          <OffField />
          <PlayField />
          <Animated.View style={{
            ...panStyle,
            height: 100,
            width: 100,
            backgroundColor: 'red'
          }}>
          </Animated.View>
        </Fragment>
      )}
    </SetDragContainer>
    {/* </ScrollView> */}
  </Layout>

export default GameScreen;
