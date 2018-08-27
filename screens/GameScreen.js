import React from 'react';
import { ScrollView } from 'react-native';
import Layout from './Layout';
import DeckContainer from '../containers/DeckContainer';

const GameScreen = () => <Layout>
  <ScrollView style={{ flex: 1 }} alwaysBounceVertical={false}>
    <DeckContainer />
  </ScrollView>
</Layout>

export default GameScreen;
