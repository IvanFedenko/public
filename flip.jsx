const FlippingCards = React.createClass ({
  getInitialState() {
    return {

      src: '152.jpg'

    };
  },
  handleClick (e) {
        this.setState ({
          src: '155.jpeg'
        });
  },
  render() {
    return(
      <div>
      <img className="flip" src={this.state.src} onClick={this.handleClick} />
      </div>
    );
  }
});
ReactDOM.render(
  <FlippingCards/>,
  document.getElementById('flip')
);
