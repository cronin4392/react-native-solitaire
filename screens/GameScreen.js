import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import Layout from './Layout';

import SetDragContainer from '../containers/SetDragContainer';

import Column from '../components/Column';
import OrientationLayout from '../components/OrientationLayout';
import Nav from '../components/Nav';
import OffField from '../components/OffField';
import PlayField from '../components/PlayField';
import SelectedCards from '../components/SelectedCards';

import { PADDING } from '../constants/styles';

const renderLandscape = () =>
  <Fragment>
    <Layout>
      <Nav />
      <SetDragContainer>
        <View style={styles.landscapeContainer}>
          <Column
            columns={9}
            columnSpan={2}
            padding={0}
          >
            {({ columnWidth }) =>
              <OffField orientation={'landscape'} />
            }
          </Column>
          <Column
            columns={9}
            columnSpan={7}
            padding={0}
          >
            {({ columnWidth }) =>
              <PlayField />
            }
          </Column>
        </View>
      </SetDragContainer>
    </Layout>
    <SelectedCards />
  </Fragment>

const renderPortrait = () =>
  <Fragment>
    <Layout>
      <Nav />
      <SetDragContainer>
        <Fragment>
          <OffField orientation={'portrait'} />
          <PlayField />
        </Fragment>
      </SetDragContainer>
    </Layout>
    <SelectedCards />
  </Fragment>

const GameScreen = () =>
  <OrientationLayout landscape={renderLandscape} portrait={renderPortrait} />

const styles = StyleSheet.create({
  landscapeContainer: {
    flexDirection: 'row',
  },
});

export default GameScreen;
