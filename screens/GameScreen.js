import React from 'react';
import { ScrollView } from 'react-native';
import Layout from './Layout';

import Nav from '../components/Nav';
import OffField from '../components/OffField';
import PlayField from '../components/PlayField';

const GameScreen = ({ navigation }) => <Layout>
  <ScrollView style={{ flex: 1 }} alwaysBounceVertical={false}>
    <Nav navigation={navigation} />
    <OffField />
    <PlayField />
  </ScrollView>
</Layout>

export default GameScreen;
