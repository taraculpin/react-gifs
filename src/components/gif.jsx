import react from "react";
import ReactDOM  from "react";
import React, { Component } from "react";

class Gif extends Component {
  constructor() {
    query = "homer"
    giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=r3o3DD8ErjZWUXCpXCq70mWKTjnW33xL&q=${query}`
  }

  render() {
    return (
      <div className="gif">
        <img src={giphyUrl.first}/>
      </div>
    );
  }
}

export default Gif;
