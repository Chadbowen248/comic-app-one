import React, { Component } from 'react';
import map from 'lodash/map'
import StarRating from './StarRating';
import firebase from "./firebase"

class Movie extends Component {
  constructor(props){
    super(props)
    this.state = {
      starNumber: 0,
      averageRating: null
    };
    this.moviesRef = firebase.database().ref('/movies');
    this.rating = firebase.database().ref(`/movies/${this.props.id}/ratings/${this.props.currentUser.uid}`);
    this.average = firebase.database().ref(`/movies/${this.props.id}/ratings`);
  }

  componentDidMount() {
    this.rating.on('value', snapshot => {
      this.setState({starNumber: snapshot.val()})
    })
    this.average.on('value', snapshot => {
      
      // console.log(snapshot.val())
      // map(snapshot.val(), (item) => {
      //   console.log(item)
      // })
      const ratings = Object.values(snapshot.val());
      const average = ratings.reduce((x , y) => {
        return Number(x) + Number(y);
      }, 0)
      this.setState({averageRating: average/ratings.length})
    })
  }

  countStars = number => {
    this.setState({ starNumber: number }, () => {
      this.handleSelect();
    });
  };

  handleSelect = () => {
    this.moviesRef.child(this.props.id)
                  .child('ratings')
                  .child(this.props.currentUser.uid)
                  .set(this.state.starNumber)
  }

render() {
  const chad = 'Aq7wqE6HORSHbtdutQyketPWZ5P2';
  const meghana = '3U8psXkA25dRY27zXzgK7WqTXts2';
  const isAllowed = (this.props.currentUser.uid === chad || this.props.currentUser.uid === meghana) ? '' : 'disabled'
  return(
      <div className="result-wrapper">
      <div className="content-overlay"></div>
        <img src={`https://image.tmdb.org/t/p/original${this.props.details.img}`}
            alt={this.props.details.title}
            className="result-wrapper--image"/>
        <div className="square">
  
        <p className="score">{this.state.averageRating}</p>
        
        </div>
        <div className={`stars--container ${isAllowed}`}>
          <StarRating countStars={this.countStars} selectedStar={this.state.starNumber} handleSelect={this.handleSelect}/>
        </div>
      </div>

  )
}
}

export default Movie;