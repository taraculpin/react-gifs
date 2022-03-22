import react from "react";
import ReactDOM  from "react";
import React, { Component } from "react";

class Gif extends Component {
  // constructor(props) {
    // super(props);


  // }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy/200w.gif`
    return (
        <img className="gif" src={src}/>
    );
  }
}

export default Gif;
