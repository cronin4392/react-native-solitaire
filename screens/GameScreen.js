import React from 'react';
import { ScrollView } from 'react-native';
import Layout from './Layout';

import OffField from '../components/OffField';
import PlayField from '../components/PlayField';

const GameScreen = () => <Layout>
  <ScrollView style={{ flex: 1 }} alwaysBounceVertical={false}>
    <OffField />
    <PlayField />
  </ScrollView>
</Layout>

export default GameScreen;
