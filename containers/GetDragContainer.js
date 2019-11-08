import { connect } from "react-redux";

const GetDragContainer = props => {
  if (props.dragger) {
    return props.children(props);
  }

  return null;
};

const mapStateToProps = (state, props) => {
  const { dragger } = state;

  return {
    ...props,
    dragger: dragger.dragger
  };
};

export default connect(mapStateToProps)(GetDragContainer);
