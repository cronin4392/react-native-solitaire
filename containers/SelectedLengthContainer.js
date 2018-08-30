import { connect } from 'react-redux';

const SelectedLengthContainer = (props) => props.children(props);

const mapStateToProps = (state, props) => {
  const { solitaire } = state;
  const { selected } = solitaire;
  const selectedArray = Object.keys(selected);

  return ({
    ...props,
    length: selectedArray.length,
  });
};

export default connect(mapStateToProps)(SelectedLengthContainer);
