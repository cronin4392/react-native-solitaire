import { connect } from 'react-redux';

const GetDragContainer = (props) => props.children(props);

const mapStateToProps = (state, props) => {
  const { dragger } = state;

  return ({
    ...props,
    dragger: dragger.dragger,
  });
};

export default connect(mapStateToProps)(GetDragContainer);