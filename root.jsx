const HelloComponent = React.createClass({
  render(){
    return React.createElement('div', {},
    React.createElement('img', {src: this.props.avatar, alt: this.props.name, width: 100, height: 100}),
    React.createElement('h1', {}, `Hello one more! ${this.props.name}`)
   );
  }
});
ReactDOM.render (
  React.createElement(HelloComponent, {name: 'Ivan', avatar: '152.jpg'}),
  document.getElementById ('root')
)
