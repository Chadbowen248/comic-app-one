import React, { Component } from 'react';
import SearchResult from './SearchResult'

import './App.css';

class Search extends Component {
  state = {
    searchResults: [],
    searchTerm: ''
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const searchTerm = this.state.searchTerm;
    fetch(`/search/${searchTerm}`)
    .then(res => res.json())
    .then(res => this.setState({searchResults: res}))
  }

  render() {

    const movies = this.state.searchResults.map((movie, index) => (
      <SearchResult details={{...movie}} key={index} addMovie={this.props.addMovie}/>
    ));

    return (
  
     
      <div>
        <div className="search-wrapper">
          <input className="search-wrapper__input" type="text" onChange={this.handleChange}></input>
          <button className="button" onClick={this.handleSearch}>search</button>
        </div>   
       <div className="wrapper">
        {movies}
       </div>
      </div>
    );
  }
}

export default Search;