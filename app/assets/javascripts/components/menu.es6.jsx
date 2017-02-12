class Menu extends React.Component {
  render () {
    const items = this.props.items;

    const listItems = items.map((item) =>
        <li className="item"><a href={item.link}>{item.name}</a></li>
    );

    return (
      <div className="menu">
        <ul className="list">
            {listItems}
        </ul>
      
      </div>
    );
  }
}

Menu.propTypes = {
  items: React.PropTypes.array
};
