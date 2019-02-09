import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../apis/unsplash';
import ImageList from './ImageList';


class App extends React.Component {
  state = {images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term, term: null},
    });
    this.setState({images: response.data.results});
    // console.log(this.state.images);
    console.log(term);
  }

  
  render() {
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.images.length} images
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;