class Menu extends React.Component {
  render () {
    const items = this.props.items;

    const listItems = items.map((item) =>
        <li key={item.id} className="item"><a href={item.link}>{item.name}</a></li>
    );

    return (
      <div className="menu">
        <ul className="list">
            {listItems}
            <li className="item" onClick={this.props.toggleMenu}>x</li>
        </ul>
      
      </div>
    );
  }
}

Menu.propTypes = {
  items: React.PropTypes.array,
  toggleMenu: React.PropTypes.func
};
