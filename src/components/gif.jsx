import react from "react";
import ReactDOM  from "react";
import React, { Component } from "react";

class Gif extends Component {
  handleClick = (event) => {
    this.props.selectedGif(this.props.id)
  }
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy/200w.gif`
    return (
        <img className="gif" src={src} onClick={this.handleClick}/>
    );
  }
}

export default Gif;
