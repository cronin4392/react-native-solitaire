import React, { Fragment } from 'react';
import { Animated } from 'react-native';

import GetDragContainer from '../../containers/GetDragContainer';
import SelectedContainer from '../../containers/SelectedContainer';
import SpreadPile from '../SpreadPile';

const SelectedCards = () => (
    <SelectedContainer>
      {({ selected }) => (
        <GetDragContainer>
          {({ dragger }) => (
            <Animated.View style={{
              transform: dragger.getTranslateTransform(),
            }}>
              <SpreadPile
                pile={selected}
                columnWidth={44}
                location={'SELECTED'}
              />
            </Animated.View>
          )}
        </GetDragContainer>
      )}
    </SelectedContainer>
);

export default SelectedCards;