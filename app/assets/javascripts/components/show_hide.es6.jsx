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
        <Button buttonAction={this.click} buttonText="Links"/>
        {
          this.state.childVisible
            ? <Menu items={this.props.items}/>
            : null
        }
      </div>
    )
  }

}

