class ShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        childVisible: false
    }
    this.click=this.click.bind(this);
  }

  click () {
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
            ? <Menu items={this.props.items}/>
            : <Button className="button" buttonAction={this.click} buttonText="links"/>
        }
      </div>
    )
  }

}

