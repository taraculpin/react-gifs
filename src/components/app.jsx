import React, { Component } from "react";
import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";
import giphy from 'giphy-api'; 

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        gifs: [],
        selectedGifId: "xUA7aOIFDR4ZgqLy8w"
      }
  }

  selectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    giphy("r3o3DD8ErjZWUXCpXCq70mWKTjnW33xL").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data,
        selectedGifId: result.data[0].id
      });
    });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
              <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectedGif={this.selectedGif}/>
        </div>
      </div>
    );
  }
}

export default App;
