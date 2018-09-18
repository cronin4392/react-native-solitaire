import React, { Fragment } from 'react';

import Layout from './Layout';

import NewPileSystem from '../containers/NewPileSystem';

const GameScreen = () =>
  <Fragment>
    <Layout>
      <NewPileSystem />
    </Layout>
  </Fragment>

export default GameScreen;
