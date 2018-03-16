import React, { Component } from 'react';
import {PropTypes} from 'prop-types'

class UseFour extends Component {
  
  
render() {
    const {val, onaddFn} = this.props;

    return (
      <div>
        <h1>我是four：{val}</h1>
        {/* <button onClick={onaddFn}> + 6 </button> */}
        {/* <UseThree /> */}
      </div>
    );
  }
}

UseFour.propTypes = {
  val: PropTypes.number,
//   onaddFn: PropTypes.func
}

export default UseFour;
