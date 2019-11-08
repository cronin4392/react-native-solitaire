import { connect } from "react-redux";

const SelectedContainer = props => props.children(props);

const mapStateToProps = (state, props) => {
  const { dragger } = state;
  const { selected } = dragger;
  const selectedArray = Object.keys(selected)
    .map(key => selected[key])
    .sort((a, b) => a.order - b.order);

  return {
    ...props,
    selected: selectedArray
  };
};

export default connect(mapStateToProps)(SelectedContainer);
