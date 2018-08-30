import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import DropZoneContainer from '../../containers/DropZoneContainer';
import LocationContainer from '../../containers/LocationContainer';
import SelectedLengthContainer from '../../containers/SelectedLengthContainer';

import Column from '../Column';
import SpreadPile from '../SpreadPile';

import { PILES } from '../../constants/cards';
import { PADDING } from '../../constants/styles';

export default class PlayField extends React.PureComponent {
  render() {
    return (
      <View style={styles.playField}>
        {PILES.map(location =>
          <Column
            key={location}
            columns={7}
            columnSpan={1}
            padding={PADDING}
          >
            {({ columnWidth }) =>
              <LocationContainer location={location}>
                {({ cards }) =>
                  <SelectedLengthContainer>
                    {({ length }) =>
                      <Fragment>
                        <DropZoneContainer active={length > 0} location={location} />
                        <SpreadPile
                          pile={cards}
                          columnWidth={columnWidth}
                          location={location}
                        />
                      </Fragment>
                    }
                  </SelectedLengthContainer>
                }
              </LocationContainer>
            }
          </Column>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playField: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dropZone: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    // backgroundColor: '#f00',
  },
  dropZoneButton: {
    ...StyleSheet.absoluteFillObject,
  },
});
