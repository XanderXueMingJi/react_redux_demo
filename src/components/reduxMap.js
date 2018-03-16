
const addAction = {type: 'add'};
function mapStateToProps(state) {
    return {
      val: state.count
    }
  };

  function mapDispatchToProps(dispatch) {
    return {
      onaddFn: () => dispatch(addAction)
    }
  }

 export  {mapStateToProps, mapDispatchToProps};