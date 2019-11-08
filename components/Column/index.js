import React from "react";
import { Dimensions, View } from "react-native";
import PropTypes from "prop-types";
import OnLayout from "react-native-on-layout";

export default class Column extends React.Component {
  static propTypes = {
    columns: PropTypes.number.isRequired,
    columnSpan: PropTypes.number,
    padding: PropTypes.number
  };

  static defaultProps = {
    padding: 0,
    columnSpan: 1
  };

  state = {
    windowWidth: null
  };

  componentDidMount() {
    this.updateWindowWidth();
    Dimensions.addEventListener("change", this.updateWindowWidth);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateWindowWidth);
  }

  updateWindowWidth = () => {
    this.setState({
      windowWidth: Dimensions.get("window").width
    });
  };

  render() {
    const { windowWidth } = this.state;
    const { columns, columnSpan, padding, ...props } = this.props;

    const columnWidth = windowWidth / columns - 0.000001;

    const styles = {
      ...props.style,
      width: columnWidth * columnSpan,
      padding: padding / 2
    };

    return (
      <View {...props} style={styles}>
        <OnLayout>
          {({ width }) =>
            this.props.children({
              columnWidth: (width - padding * (columnSpan - 1)) / columnSpan
            })
          }
        </OnLayout>
      </View>
    );
  }
}
