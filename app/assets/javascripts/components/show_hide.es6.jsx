class ShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      childVisible: this.checkLocalStorage(),
      menuClasses: ""
    };

    this.registerClick = this.registerClick.bind(this);
  }

  registerClick() {
    var _childVisible = !this.state.childVisible
    
    this.setState({
        childVisible: _childVisible
    });

    this.setLocalStorage('childVisible' ,_childVisible);
  }

  checkLocalStorage() {
    var childVisible = JSON.parse(localStorage.getItem('childVisible'));

    if (childVisible == null) {
      childVisible = false
    }    

    return childVisible;
  }

  setLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  }

  render () {
    return(
      <div>
        {
          this.state.childVisible
            ? <Menu className={this.state.menuClasses} items={this.props.items} toggleMenu={this.registerClick}/>
            : <Button className="button" buttonAction={this.registerClick} buttonText="links"/>
        }
      </div>
    )
  }
}

