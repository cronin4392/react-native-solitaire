import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import LocationContainer from '../../containers/LocationContainer';
import PickupContainer from '../../containers/PickupContainer';
import WasteContainer from '../../containers/WasteContainer';

import StackedPile from '../StackedPile';

import Column from '../Column';

import { FOUNDATION_1, FOUNDATION_2, FOUNDATION_3, FOUNDATION_4 } from '../../constants/cards';
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
            <WasteContainer columnWidth={columnWidth} />
          }
        </Column>
        <Column
          columns={7}
          columnSpan={1}
          padding={PADDING}
        >
          {({ columnWidth }) =>
            <LocationContainer location={FOUNDATION_1}>
              {({ cards }) =>
                <StackedPile
                  pile={cards}
                  columnWidth={columnWidth}
                  location={FOUNDATION_1}
                />
              }
            </LocationContainer>
          }
        </Column>
        <Column
          columns={7}
          columnSpan={1}
          padding={PADDING}
        >
          {({ columnWidth }) =>
            <LocationContainer location={FOUNDATION_2}>
              {({ cards }) =>
                <StackedPile
                  pile={cards}
                  columnWidth={columnWidth}
                  location={FOUNDATION_2}
                />
              }
            </LocationContainer>
          }
        </Column>
        <Column
          columns={7}
          columnSpan={1}
          padding={PADDING}
        >
          {({ columnWidth }) =>
            <LocationContainer location={FOUNDATION_3}>
              {({ cards }) =>
                <StackedPile
                  pile={cards}
                  columnWidth={columnWidth}
                  location={FOUNDATION_3}
                />
              }
            </LocationContainer>
          }
        </Column>
        <Column
          columns={7}
          columnSpan={1}
          padding={PADDING}
        >
          {({ columnWidth }) =>
            <LocationContainer location={FOUNDATION_4}>
              {({ cards }) =>
                <StackedPile
                  pile={cards}
                  columnWidth={columnWidth}
                  location={FOUNDATION_4}
                />
              }
            </LocationContainer>
          }
        </Column>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  offField: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
  },
});
