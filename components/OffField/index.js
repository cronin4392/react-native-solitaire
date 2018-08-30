import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import DropZoneContainer from '../../containers/DropZoneContainer';
import LocationContainer from '../../containers/LocationContainer';
import PickupContainer from '../../containers/PickupContainer';
import SelectedContainer from '../../containers/SelectedContainer';

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
    return (
      <View style={styles.offField}>
        <Column
          columns={7}
          columnSpan={1}
          padding={PADDING}
        >
          {({ columnWidth }) =>
            <PickupContainer columnWidth={columnWidth} />
          }
        </Column>
        <Column
          columns={7}
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
            columns={7}
            columnSpan={1}
            padding={PADDING}
            key={location}
          >
            {({ columnWidth }) =>
              <LocationContainer location={location}>
                {({ cards }) =>
                  <SelectedContainer>
                    {({ selected }) =>
                      <Fragment>
                        <DropZoneContainer active={selected.length > 0} location={location} />
                        <StackedPile
                          pile={cards}
                          columnWidth={columnWidth}
                          location={location}
                        />
                      </Fragment>
                    }
                  </SelectedContainer>

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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
