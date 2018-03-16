import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import Counter from './components/Counter'
import Show from './components/Show'
import Use from './components/Use'

class App extends Component {
  
  
render() {
    
// Action 功能
const increaseAction = { type: 'increase' }

// Reducer 减速机
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store 商店
const store = createStore(counter)

    // Map Redux state to component props 将Redux状态映射到组件  值
function mapStateToProps(state) {
  return {
    value: state.count 
  }
}

// Map Redux actions to component props  将Redux的动作映射到组件上  动作
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}
    const Coun = connect(mapStateToProps, mapDispatchToProps)(Counter);
    const Sho = connect(mapStateToProps, mapDispatchToProps)(Show);
    return (
      <div>
        <Provider store={store}>
          <Coun />
        </Provider>
        <Provider store={store}>
          <Sho />
        </Provider>
        <Use />
      </div>
    );
  }
}

export default App;
