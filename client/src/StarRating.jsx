import React, { Component } from "react";
import StarWrapper from './StarWrapper'

class StarRating extends Component {
//   state = {
//     starNumber: null,
//     numberOfStars: 5
//   };

//   countStars = number => {
//     this.setState({ starNumber: number });
//   };

  render() {
    return (
      <div className="star-rating">
        <StarWrapper countStars={this.props.countStars} number='1' selectedStar={this.props.selectedStar} handleSelect={this.props.handleSelect} />
        <StarWrapper countStars={this.props.countStars} number='2' selectedStar={this.props.selectedStar} handleSelect={this.props.handleSelect} />
        <StarWrapper countStars={this.props.countStars} number='3' selectedStar={this.props.selectedStar} handleSelect={this.props.handleSelect} />
        <StarWrapper countStars={this.props.countStars} number='4' selectedStar={this.props.selectedStar} handleSelect={this.props.handleSelect} />
        <StarWrapper countStars={this.props.countStars} number='5' selectedStar={this.props.selectedStar} handleSelect={this.props.handleSelect} />
      </div>
    );
  }
}

export default StarRating;
// onClick = { e => this.countStars(e) }
