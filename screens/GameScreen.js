import React, { Fragment } from "react";

import Layout from "./Layout";

import DragContainer from "../containers/DragContainer";
import DropZonesContainer from "../containers/DropZonesContainer";

import Nav from "../components/Nav";
import OffField from "../components/OffField";
import PlayField from "../components/PlayField";
import SelectedCards from "../components/SelectedCards";

const GameScreen = () => (
  <Fragment>
    <Layout>
      <Nav />
      <DropZonesContainer>
        {({ detectDropZoneRelease, registerDropZone }) => (
          <DragContainer detectDropZoneRelease={detectDropZoneRelease}>
            <OffField
              registerDropZone={registerDropZone}
              detectDropZoneRelease={detectDropZoneRelease}
            />
            <PlayField
              registerDropZone={registerDropZone}
              detectDropZoneRelease={detectDropZoneRelease}
            />
          </DragContainer>
        )}
      </DropZonesContainer>
    </Layout>
    <SelectedCards />
  </Fragment>
);

export default GameScreen;
