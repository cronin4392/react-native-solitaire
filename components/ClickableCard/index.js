import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Card from '../Card';

export default class ClickableCard extends React.PureComponent {
  static propTypes = {
    card: PropTypes.shape({
      suit: PropTypes.string.isRequired,
      pip: PropTypes.string.isRequired,
    }).isRequired,
    isSelected: PropTypes.bool,
    isFaceUp: PropTypes.bool,
    columnWidth: PropTypes.number.isRequired,
    onCardClick: PropTypes.func,
    location: PropTypes.string.isRequired,
  };

  static defaultProps = {
    onCardClick: () => {},
    location: null,
  };

  constructor(props) {
    super(props);

    this.cardRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { id, isSelected, updateSelectedPosition } = this.props;
    const node = this.cardRef.current;

    /* if card becomes selected measure it */
    if (!prevProps.isSelected && isSelected) {
      if (!isSelected.px) {
        node.measure( (fx, fy, width, height, px, py) => {
          updateSelectedPosition({
            id,
            width,
            height,
            px,
            py,
          });
        });
      }
    }
  }

  _onClick = () => {
    const { id, location, onCardClick } = this.props;
    const node = this.cardRef.current;

    node.measure( (fx, fy, width, height, px, py) => {
      onCardClick({
        id,
        location,
        width,
        height,
        px,
        py,
      });
    });
  }

  render() {
    const {
      card,
      columnWidth,
      isFaceUp,
      isSelected,
    } = this.props;

    const selectedStyles = [
      styles.selectedOverlay,
      {
        opacity: isSelected ? 0.2 : 0
      }
    ];

    return (
      <TouchableOpacity onPressIn={this._onClick} activeOpacity={1} ref={this.cardRef}>
        <View style={selectedStyles}></View>
        <Card card={card} isFaceUp={isFaceUp} columnWidth={columnWidth} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  selectedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    opacity: 0,
    zIndex: 2,
  }
});
