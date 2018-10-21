import React from 'react';


const SearchResult = props => 
      <div className="result-wrapper">
        <img src={`https://image.tmdb.org/t/p/original${props.details.img}`}
            alt={props.details.title}
            className="result-wrapper--image"/>
        <h1 className="result-wrapper--title">{props.details.title}</h1>
        <button className="button" onClick={() => props.addMovie(props.details)}>add</button>
      </div>

export default SearchResult;