import { connect } from 'react-redux';

import PlayField from '../components/PlayField';

const mapStateToProps = (state, props) => {
  const { solitaire } = state;
  const { piles } = solitaire;

  return ({
    ...props,
    piles,
  });
};

export default connect(mapStateToProps)(PlayField);