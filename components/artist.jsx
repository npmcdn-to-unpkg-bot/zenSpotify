var Button = ReactBootstrap.Button;
var Thumbnail = ReactBootstrap.Thumbnail;

var spotifyApi = new SpotifyWebApi();

var audio;

Artist = React.createClass({
  	
  	getInitialState() {

	    return {
	      artist: this.props.artist,
	      soundUrl: ''
	    };
  	},

  	playMusic() {

  		this.stopMusic();

  		var self = this;
  		spotifyApi.getArtistTopTracks(this.props.artist.uri.split(":")[2], 'US')
  			.then(function(data) {
		    	console.log("getArtistTopTracks", data);
		    	self.setState({soundUrl: data.tracks[0].preview_url});
		    	audio= new Audio(data.tracks[0].preview_url);
		    	audio.play();

		  	}, function(err) {
		    	console.error(err);
		  	});
  		

  	},

  	stopMusic() {
  		//stop the music
  		if(audio) {
  			audio.pause();
			audio.currentTime = 0;
  		}
  	},

  	getImageUrl(artist){
  		//get better size of image
		var imageUrl = 'spotify.png';
		if(artist.images.length > 0) {
			var image = artist.images[0];
			var picLoc = 1;
			
			while(picLoc < artist.images.length && image.height > 450) {
				image = artist.images[picLoc];
				picLoc++;
			}
			imageUrl = image.url;
		} 
		return imageUrl;
  	},

  	getType(artist) {
  		//get artist music type
		var genres = artist.genres[0];
		for(var i = 1; i < artist.genres.length; i++) {
		    genres += ', ' + artist.genres[i];
		}
		return genres;
  	},

  	selectArtist() {
  		this.props.selectedArtistCallback(this.props.artist);
  	},

  	render() {

  		var artist = this.props.artist;

  		return (
  			<div className="artist">
		      	<Thumbnail src={this.getImageUrl(artist)} alt={artist.name}>
			        <h3>{artist.name}</h3>
			        <p>{this.getType(artist)}</p>
			        <p>
			        	<Button bsStyle="primary" onClick= {this.selectArtist}>Detail</Button>&nbsp;
			          	<Button bsStyle="default" onClick= {this.playMusic}>
			          		Play <span className="glyphicon glyphicon-music" aria-hidden="true"></span>
			          	</Button>
			        </p>
		      	</Thumbnail>
	      	</div>
  		);
  	}

});