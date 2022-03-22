import React, {Component} from "react";

class SearchBar extends Component {
  handleUpdate = (event) => {
    search(event.target.value)
  }

  render() {
    return (
      <input type="text" className ="form-search" onChange={this.handleUpdate}/>

    );
  }
}
export default SearchBar;
