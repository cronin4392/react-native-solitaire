import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import DropZoneContainer from '../../containers/DropZoneContainer';
import LocationContainer from '../../containers/LocationContainer';
import PickupContainer from '../../containers/PickupContainer';

import SpreadPile from '../SpreadPile';
import StackedPile from '../StackedPile';
import Column from '../Column';

import {
  FOUNDATION_1,
  FOUNDATION_2,
  FOUNDATION_3,
  FOUNDATION_4,
  HORIZONTAL,
  WASTE } from '../../constants/cards';
import { PADDING } from '../../constants/styles';

export default class OffField extends React.PureComponent {
  render() {
    const { orientation } = this.props;
    const columnCount = orientation === 'portrait' ? 7 : 9;

    return (
      <View style={styles.offField}>
        <Column
          columns={columnCount}
          columnSpan={1}
          padding={PADDING}
        >
          {({ columnWidth }) =>
            <PickupContainer columnWidth={columnWidth} />
          }
        </Column>
        <Column
          columns={columnCount}
          columnSpan={2}
          padding={PADDING}
        >
          {({ columnWidth }) =>
            <LocationContainer location={WASTE}>
              {({ cards }) =>
                <SpreadPile
                  pile={cards.slice(-3)}
                  direction={HORIZONTAL}
                  columnWidth={columnWidth}
                  location={WASTE}
                />
              }
            </LocationContainer>
          }
        </Column>
        {[FOUNDATION_1, FOUNDATION_2, FOUNDATION_3, FOUNDATION_4].map(location =>
          <Column
            columns={columnCount}
            columnSpan={1}
            padding={PADDING}
            key={location}
          >
            {({ columnWidth }) =>
              <LocationContainer location={location}>
                {({ cards }) =>
                  <Fragment>
                    <DropZoneContainer location={location} />
                    <StackedPile
                      pile={cards}
                      columnWidth={columnWidth}
                      location={location}
                    />
                  </Fragment>
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
  offField: {
    backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
