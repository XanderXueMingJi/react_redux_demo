import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Counter extends Component {
  render() {
      const {value, onIncreaseClick} = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={onIncreaseClick}> + </button>
      </div>
    );
  }
}

Counter.propTypes  = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}



export default Counter;
