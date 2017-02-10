class Menu extends React.Component {
  render () {
    return (
      <div>
        <div>Items: {this.props.items}</div>
      </div>
    );
  }
}

Menu.propTypes = {
  items: React.PropTypes.array
};
