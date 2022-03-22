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
    this.search("homer thinking")
  }

  search = (query) => {
    giphy("r3o3DD8ErjZWUXCpXCq70mWKTjnW33xL").search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }


  render() {
    const gifs = [
      {id: "xUA7aOIFDR4ZgqLy8w"},
      {id: "axu6dFuca4HKM"},
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
              <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
