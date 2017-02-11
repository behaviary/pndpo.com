class Menu extends React.Component {
  render () {
    const items = this.props.items;

    const listItems = items.map((item) =>
        <li class="menu-item">{item}</li>
    );

    return (
      <div class="menu">
        <ul>
            {listItems}
        </ul>
      
      </div>
    );
  }
}

Menu.propTypes = {
  items: React.PropTypes.array
};
