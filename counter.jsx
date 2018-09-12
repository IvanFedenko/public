const Counter = React.createClass({
  getInitialState (){
    return {
      value: 0
    };
  },
  handlDecrement() {
    this.setState({value: this.state.value -1})
  },
  handlIncrement() {
    this.setState({value: this.state.value +1})
  },
  render() {
    return (
      <div>
      <button onClick={this.handlDecrement}>-</button>
      <h1>{this.state.value}</h1>
      <button onClick={this.handlIncrement}>+</button>
      </div>
    )
  }
});

ReactDOM.render(
  <Counter/>,
  document.getElementById('counter')
);
