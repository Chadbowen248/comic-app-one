import React from "react";
import Axios from "axios";
import styled from "styled-components";
import { string, func } from "prop-types";
import ComicCollectionResult from "./ComicCollectionResult";
import ManComic from "./manComic";

const ComicWrapper = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
margin-top: 1.5em;
margin-bottom: 1.5em;
justify-content: flex-start;
padding-right: .5em;
padding-left: .5em;
`;

const ComicSearchComicVine = styled.input`
margin: 0 auto;
margin-top: 10px;
display: block;
width: 95%;
padding: 5px;
height: 40px;
text-align: center;
`;
const SubmitButton = styled.input`
background-color: transparent;
margin:30px auto;
width: 200px;
display: block;
padding: 5px;
`;

const h1 = {
  marginLeft: "35px",
  fontFamily: "Oswald",
  textTransform: "uppercase",
  fontSize: "16px"
};

class Search extends React.Component {
  state = {
    searchTerm: "",
    results: []
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  searchForComic = () => {
    const searchTerm = this.state.searchTerm;
    Axios.get(
      `http://localhost:7777/comicvine_api?search_term=${searchTerm}`
    ).then(results => this.setState({ results: results.data }));
  };
  render() {
    const firstSearch = this.state.results.map(comic => (
      <ComicCollectionResult
        key={comic.id}
        details={comic}
        addComic={this.props.addComic}
        isOnlyIssue={comic.count_of_issues}
        deeperSearch={this.deeperSearch}
        // haveImagesLoaded={this.haveImagesLoaded}
        // modal={this.state.modal}
      />
    ));

    return (
      <div>
        <h1 style={h1}>Add a comic</h1>
        <ManComic
          handleTitleInput={this.props.handleTitleInput}
          title={this.props.title}
          handleImagePath={this.props.handleImagePath}
          image={this.props.image}
          addComicManually={this.props.addComicManually}
        />
        <h1 style={h1}>Search ComicVine</h1>
        <ComicSearchComicVine
          name="search"
          type="text"
          onChange={this.handleChange}
          placeholder="Comicvine"
        />
        <SubmitButton type="submit" onClick={this.searchForComic} />
        <ComicWrapper>
          {firstSearch}
        </ComicWrapper>

      </div>
    );
  }
}

Search.propTypes = {
  title: string.isRequired,
  image: string.isRequired,
  handleTitleInput: func.isRequired,
  handleImagePath: func.isRequired,
  addComicManually: func.isRequired,
  addComic: func.isRequired
};

export default Search;
