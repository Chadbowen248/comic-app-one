import React from "react";
import styled from "styled-components";
import { object, func } from "prop-types";
import ComicCollectionComic from "./ComicCollectionComic";

const ComicWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 1.5em;
margin-bottom: 1.5em;
justify-content: flex-start;
`;

// const ComicSearch = styled.input`
// margin-top: 1.5em;
// width: 90%;
// height: 50px;
// text-align: center;
// `

class ComicCollection extends React.Component {
  state = {
    searchTerm: ""
  };

  handleSearchTermChange = event => {
    event.preventDefault()
    this.setState({ searchTerm: event.target.value });
  };


  render() {
    return (
      <div>
        <input className="collection-search"
          type="text"
          placeholder="Search"
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
        <div className="collection-wrapper">
          {Object.entries(this.props.collection)
            .sort((a, b) => {
              if (
                a[1].finalName.replace(/^Absolute /, "") <
                b[1].finalName.replace(/^Absolute /, "")
              )
                return -1;
              if (
                a[1].finalName.replace(/^Absolute /, "") >
                b[1].finalName.replace(/^Absolute /, "")
              )
                return 1;
              return 0;
            })
            .filter(
              comic =>
                comic[1].finalName
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(comic => (
              <ComicCollectionComic
                details={comic[1]}
                key={comic[1].id}
                removeComic={this.props.removeComic}
              />
            ))}
        </div>
      </div>
    );
  }
}
ComicCollection.propTypes = {
  collection: object.isRequired,
  removeComic: func.isRequired
};

export default ComicCollection;

// this should be comics collection page
