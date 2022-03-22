import react from "react";
import ReactDOM  from "react";
import { Component } from "react";

class GifList extends Component {
  constructor(props) {
    super(props);
    gifList = `https://api.giphy.com/v1/gifs/search?api_key=r3o3DD8ErjZWUXCpXCq70mWKTjnW33xL&q=${query}`
  }

  renders() {
    <div>
      {this.gifList}
    </div>

  }
}

export default GifList;
