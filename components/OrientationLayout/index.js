import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class OrientationLayout extends React.PureComponent {
  static propTypes = {
    portrait: PropTypes.func.isRequired,
    landscape: PropTypes.func.isRequired,
  };

  state = {
    height: null,
    width: null,
  };

  componentDidMount() {
    this.updateDimensions();
    Dimensions.addEventListener('change', this.updateDimensions);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateDimensions);
  }

  updateDimensions = () => {
    const { height, width } = Dimensions.get('window');
    this.setState({
      height,
      width,
    });
  }

  render() {
    const { width, height } = this.state;
    const { landscape, portrait } = this.props;

    return (height > width) ? portrait() : landscape();
  }
}