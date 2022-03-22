import ReactDOM  from "react";
import React, { Component } from "react";
import Gif from "./gif";

class GifList extends Component {
  // constructor(props) {
  //   super(props);
  //   gifList = `https://api.giphy.com/v1/gifs/search?api_key=r3o3DD8ErjZWUXCpXCq70mWKTjnW33xL&q=${query}`
  // }

  render() {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} />
    })
  }
}

export default GifList;
