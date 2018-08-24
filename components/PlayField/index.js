import React, { Fragment } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

import DropZoneContainer from '../../containers/DropZoneContainer';
import SelectedContainer from '../../containers/SelectedContainer';

import Column from '../Column';
import SpreadPile from '../SpreadPile';

import { PILES } from '../../constants/cards';
import { PADDING } from '../../constants/layout';

export default class PlayField extends React.Component {
  render() {
    const { piles } = this.props;

    return (
      <View style={styles.playField}>
        {piles.map((pile, index) =>
          <Column
            key={index}
            columns={7}
            columnSpan={1}
            padding={PADDING}
          >
              {({ columnWidth }) =>
                <SelectedContainer>
                  {({ selected }) =>
                    <Fragment>
                      <DropZoneContainer selected={selected} location={PILES[index]} />
                      <SpreadPile
                        pile={pile}
                        columnWidth={columnWidth}
                        location={PILES[index]}
                      />
                    </Fragment>
                  }
                </SelectedContainer>
              }
          </Column>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playField: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
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