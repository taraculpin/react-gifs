import react from "react";
import ReactDOM  from "react";
import React, { Component } from "react";

class Gif extends Component {
  // constructor(props) {
    // super(props);
    

  // }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy/200w.gif`
    // const src = `https://api.giphy.com/v1/gifs/search?api_key=r3o3DD8ErjZWUXCpXCq70mWKTjnW33xL&q=${query}`
    // const gif = src.f
    return (
        <img className="gif" src={src}/>
    );
  }
}

export default Gif;
