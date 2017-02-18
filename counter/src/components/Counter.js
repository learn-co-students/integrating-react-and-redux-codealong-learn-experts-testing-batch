import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.store.dispatch({type: 'INCREASE_COUNT'});
  }

  render(){
    return (
      <div>
        <button onClick={this.handleOnClick}>
          Click Me
        </button>
        <div>{this.props.store.getState().count}</div>
      </div>
    )
  }
}

export default Counter;
