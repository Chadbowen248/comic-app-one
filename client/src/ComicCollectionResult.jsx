import React from "react"
import styled from "styled-components";
import { shape, func, number } from "prop-types"

const SingleComic = styled.div`
width: 23%;
margin-left: 1%;
border: 1px solid #ccc;
padding: 1em;
margin-top: .5em;
margin-bottom: .5em;
margin-right: 1%;
`;
const ComicImage = styled.img`
  width: 100%;
  height: 85%;
`;
const ComicTitle = styled.p`
font-size: 1vw;
font-family: 'Fjalla One', sans-serif;
color: #333;
`;
const ComicCollectionResult = props =>
  // const addButton = props.details.count_of_issues === 1 ? 'Add Me' : 'disabled';
  <SingleComic>
    <ComicImage
      src={props.details.image.small_url}
      alt=""
      // onLoad={() => props.haveImagesLoaded("results")}
    />
    <ComicTitle>
      {props.details.name}
    </ComicTitle>
    <button
      className={props.isOnlyIssue === 1 ? "comic-results-add-button" : "comic-results-add-button__disabled"}
      onClick={() => props.addComic(props.details)}
    >
      Add Comic
    </button>

    <div className="comic-vine-info">
      <span className="comic-container__title">
        Issues in volume: {props.details.count_of_issues}
      </span>
    </div>
  </SingleComic>

export default ComicCollectionResult

// ComicCollectionResult.propTypes = {
//   details: shape({}).isRequired,
//   addComic: func.isRequired,
//   haveImagesLoaded: func.isRequired,
//   isOnlyIssue: number.isRequired
// }
