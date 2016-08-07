var Button = ReactBootstrap.Button;
var Image = ReactBootstrap.Image;
var Jumbotron = ReactBootstrap.Jumbotron;
var Carousel = ReactBootstrap.Carousel;

SelectedArtist = React.createClass({
	getInitialState() {
	    return {
	    	selectedArtist: null,
	    	index: 0,
      		direction: null,
      		albums: []
	    };
	},

  	handleSelect(selectedIndex, e) {
	    this.setState({
	      index: selectedIndex,
	      direction: e.direction
	    });
  	},


  	render() {

    	return (
			
			<div id="artistDetail">
				{this.state.selectedArtist ? 
					<Jumbotron className="row">
						<div className="col-md-6">
							{this.state.selectedArtist.images.length > 0 ? 
							<Image src={this.state.selectedArtist.images[0].url} thumbnail />
							: null}
						</div>
						<div className="col-md-6">
							<h1>{this.state.selectedArtist.name}</h1>
						    <p>Followers: {this.state.selectedArtist.followers.total}</p>
						    <p>Albums: </p>
							{this.state.albums.length > 0 ?
								
							    <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
								   	{
								        
								   			this.state.albums.map(function(album) {
								                return <Carousel.Item>
									              <img width={300} height={300} alt="900x500" src={album.images[1].url}/>
									              <Carousel.Caption>
									                <h3>{album.name}</h3>
									              </Carousel.Caption>
									            </Carousel.Item>;
								        	})
								    }
							    </Carousel>
							    : null
							}

						    <p></p>
						    <p><Button bsStyle="primary" href={this.state.selectedArtist.external_urls.spotify}>Learn more</Button></p>
						</div>

				  	</Jumbotron>
				: <p></p>}
	      	</div>
	      	
    	);
  	}
});






