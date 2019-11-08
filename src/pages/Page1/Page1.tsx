import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../redux/actions";

export function Page1(props: any) {
  useEffect(() => {
    props.actions.getUser();
  }, []);

  return <div>xx</div>;
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log(state.todos.info);
  return {
    info: state.todos.info
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1);
