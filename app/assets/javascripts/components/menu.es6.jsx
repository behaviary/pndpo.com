class Menu extends React.Component {
  render () {
    const items = this.props.items;

    const listItems = items.map((item) =>
        <li key={item.id} className="item">
            <a href={item.link} className="container link">
                <i className={item.icon}></i>
                <span className="label">{item.name}</span>
            </a>
        </li>
    );

    return (
      <div className="menu">
        <ul className="list">
            {listItems}
            <li className="item" onClick={this.props.toggleMenu}>
                <i className="fa fa-times"></i>
            </li>
        </ul>
      
      </div>
    );
  }
}

Menu.propTypes = {
  items: React.PropTypes.array,
  toggleMenu: React.PropTypes.func
};
