const JsxComponent = React.createClass ({
  render() {
    return(
      <div>
      <h2> Hello! {this.props.name}</h2>
      <img src={this.props.avatar } width={100} height={100}/>
      </div>
    );
  }
})
ReactDOM.render(
<JsxComponent name="Ivan" avatar="152.jpg"/>,
  document.getElementById('appjsx')
)
