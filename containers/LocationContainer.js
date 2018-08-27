import { connect } from 'react-redux';

const LocationContainer = (props) => props.children(props);

const mapStateToProps = (state, props) => {
  const { location } = props;
  const { solitaire } = state;
  const cards = solitaire[location] || [];

  return ({
    ...props,
    cards,
  });
};

export default connect(mapStateToProps)(LocationContainer);
