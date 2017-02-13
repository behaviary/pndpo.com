class ShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        childVisible: false,
        menuClasses: ""
    }
    this.click = this.click.bind(this);
  }

  click () {
    this.state.menuClasses = "show";
    this.setState({
        childVisible: 
        !this.state.childVisible
    });
  }

  render () {
    return(
      <div>
        {
          this.state.childVisible
            ? <Menu className={this.state.menuClasses} items={this.props.items} toggleMenu={this.click}/>
            : <Button className="button" buttonAction={this.click} buttonText="links"/>
        }
      </div>
    )
  }
}

