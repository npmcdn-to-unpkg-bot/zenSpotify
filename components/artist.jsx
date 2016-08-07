var Button = ReactBootstrap.Button;
var Thumbnail = ReactBootstrap.Thumbnail;

Artist = React.createClass({

    getInitialState() {

        return {
            artist: this.props.artist,
            soundUrl: ''
        };
    },

    getImageUrl(artist) {
        //get better size of image
        var imageUrl = 'spotify.png';
        if (artist.images.length > 0) {
            var image = artist.images[0];
            var picLoc = 1;

            while (picLoc < artist.images.length && image.height > 450) {
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
        for (var i = 1; i < artist.genres.length; i++) {
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
			        	<Button bsStyle="primary" onClick= {this.selectArtist}>Check Detail</Button>&nbsp;
			        </p>
		      	</Thumbnail>
	      	</div>
        );
    }

});
