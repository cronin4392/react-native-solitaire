import React, { Fragment } from 'react';
import Layout from './Layout';

import SetDragContainer from '../containers/SetDragContainer';

import Nav from '../components/Nav';
import OffField from '../components/OffField';
import PlayField from '../components/PlayField';
import SelectedCards from '../components/SelectedCards';

const GameScreen = ({ navigation }) =>
  <Fragment>
    <Layout>
      {/* <ScrollView style={{ flex: 1 }} alwaysBounceVertical={false}> */}
      <SetDragContainer>
        <Fragment>
          <Nav navigation={navigation} />
          <OffField />
          <PlayField />
        </Fragment>
      </SetDragContainer>
      {/* </ScrollView> */}
    </Layout>
    <SelectedCards />
  </Fragment>

export default GameScreen;
