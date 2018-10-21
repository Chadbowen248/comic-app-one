import React, { Component } from "react"
import Movie from "./Movie"

class Homepage extends Component {
  // state = {
  //   star: ""
  // }

  render() {
    return (
      <div className="wrapper">
        {!this.props.movies
          ? ""
          : Object.entries(this.props.movies)
          .map(item => <Movie details={item[1]} key={item[0]} currentUser={this.props.currentUser} id={item[0]}/>)}
      </div>
    )
  }
}

export default Homepage
