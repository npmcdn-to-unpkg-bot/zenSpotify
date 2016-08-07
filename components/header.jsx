var Button = ReactBootstrap.Button;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;
var Navbar = ReactBootstrap.Navbar;

Header = React.createClass({
  getInitialState() {
    return {
    	value: ''
    };
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  handleSearch() {
  	if(this.state.value.length > 0)
  		this.props.searchCallback(this.state.value);
  },

  render() {
    return (
			<Navbar>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">Find your favorite Artists!</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Navbar.Form pullLeft>
			        <FormGroup>
			          <FormControl type="text" placeholder="Search" onChange={this.handleChange}/>
			        </FormGroup>
			        {' '}
			        <Button onClick={this.handleSearch}>Search</Button>
			      </Navbar.Form>
			    </Navbar.Collapse>
			</Navbar>
    );
  }
});






