import React, { Fragment } from 'react';
import Layout from './Layout';

import SetDragContainer from '../containers/SetDragContainer';

import Nav from '../components/Nav';
import OffField from '../components/OffField';
import PlayField from '../components/PlayField';
import SelectedCards from '../components/SelectedCards';

const GameScreen = ({ navigation }) => 
  <Layout>
    {/* <ScrollView style={{ flex: 1 }} alwaysBounceVertical={false}> */}
    <SetDragContainer>
      <Fragment>
        <Nav navigation={navigation} />
        <OffField />
        <PlayField />
        <SelectedCards />
      </Fragment>
    </SetDragContainer>
    {/* </ScrollView> */}
  </Layout>

export default GameScreen;
