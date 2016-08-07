var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Button = ReactBootstrap.Button;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Thumbnail = ReactBootstrap.Thumbnail;
var Navbar = ReactBootstrap.Navbar;
var Jumbotron = ReactBootstrap.Jumbotron;
var Image = ReactBootstrap.Image;

var spotifyApi = new SpotifyWebApi();

// Main view 
const Main = React.createClass({
  getInitialState() {
    return {
      artists: []
    };
  },

  updateSelectedArtist(artist) {

  	var self = this;
  	spotifyApi.getArtistAlbums(artist.uri.split(":")[2])
		  .then(function(data) {

		  	self.refs['selectedArtist'].setState({albums: data.items, selectedArtist: artist, index: 0});

		  	window.scrollTo(0,0);
		  }, function(err) {
		    console.error(err);
		  });

  	
  },

  search(value) {

  	var self = this;

	spotifyApi.searchArtists(value)
		  .then(function(data) {
		    console.log('Search artists by ' + value , data);

		    self.setState({artists: data.artists.items});
			self.updateSelectedArtist(data.artists.items[0]);

		  }, function(err) {
		    console.error(err);
		  });
  	
  },


  render() {
    var self = this;
    return (
        <div id= "main">
        	<Header searchCallback = {this.search}></Header>

        	<SelectedArtist ref= "selectedArtist"/>
	      	
			<div id="artists">
		    {	
		    	this.state.artists.map(function(artist) {
	                return <Artist artist = {artist} selectedArtistCallback = {self.updateSelectedArtist}/>;
	        	})
	        }
	        </div>
        </div>
    );
  }
});


ReactDOM.render(
    <Main />,
    document.getElementById('app')
);
