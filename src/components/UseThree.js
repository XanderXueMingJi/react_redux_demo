import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
import UseFour from './UseFour'

class UseThree extends Component {
  
  
render() {
    const {val, onaddFn} = this.props;

    return (
      <div>
        我是Use33: {val}
        <UseFour />
      </div>
    );
  }
}

UseThree.propTypes = {
    val: PropTypes.number,
  //   onaddFn: PropTypes.func
  }

export default UseThree;
