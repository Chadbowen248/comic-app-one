import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class StarWrapper extends Component {
  render() {
    return (
         <FontAwesomeIcon className={this.props.selectedStar >= this.props.number ? 'selected' : ''}
                          icon={faStar} onClick={() => this.props.countStars(this.props.number)} />
    );
  }
}

export default StarWrapper;
