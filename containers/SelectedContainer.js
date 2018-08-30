import { connect } from 'react-redux';

const SelectedContainer = (props) => props.children(props);

const mapStateToProps = (state, props) => {
  const { solitaire } = state;
  const { selected } = solitaire;
  const selectedArray = Object.keys(selected)
    .map(key => selected[key])
    .sort((a, b) => a.order - b.order);

  return ({
    ...props,
    selected: selectedArray,
  });
};

export default connect(mapStateToProps)(SelectedContainer);
