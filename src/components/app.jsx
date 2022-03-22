import React, { Component } from "react";
import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";

class App extends Component {
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
              <Gif id="xUA7aOIFDR4ZgqLy8w" />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={gifs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
