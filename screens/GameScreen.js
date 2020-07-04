import React, { Fragment } from 'react';

import Layout from './Layout';

import SetDragContainer from '../containers/SetDragContainer';
import DropZonesContainer from '../containers/DropZonesContainer';

import Nav from '../components/Nav';
import OffField from '../components/OffField';
import PlayField from '../components/PlayField';
import SelectedCards from '../components/SelectedCards';
import { connect } from 'react-redux'
const GameScreen = () =>
  <Fragment>
    <Layout>
      <Nav />
      <DropZonesContainer>
        {({ detectDropZoneRelease, registerDropZone }) => (
          <SetDragContainer detectDropZoneRelease={detectDropZoneRelease}>
            <OffField registerDropZone={registerDropZone} detectDropZoneRelease={detectDropZoneRelease} />
            <PlayField registerDropZone={registerDropZone} detectDropZoneRelease={detectDropZoneRelease} />
          </SetDragContainer>
        )}
      </DropZonesContainer>
    </Layout>
    <SelectedCards />
  </Fragment>
const mapStateToProps = state => {return {}}
const mapDispatchToProps = dispatch => {return {dispatch: dispatch}}
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
