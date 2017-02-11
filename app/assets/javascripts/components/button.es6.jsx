class Button extends React.Component {
  render () {
    return (
      <button className="button" onClick={this.props.buttonAction}>
        {this.props.buttonText}
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: React.PropTypes.string,
  buttonAction: React.PropTypes.func
};
