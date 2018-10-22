import React from "react";
import { string, func } from "prop-types";

const inputStyle = {
  margin: '0 auto',
  marginTop: '10px',
  display: 'block',
  padding: '5px',
  width: '95%',
  height: '40px',
  textAlign: 'center'
};

const addBtn = {
  backgroundColor: 'transparent',
  marginLeft: '30px',
  marginTop: '10px',
  width: '170px',
  padding: '5px'
}

const wrapper = {
  borderBottom: '.25px solid #ccc',
  paddingBottom: '20px'
}

const ManComic = props => {
  const manualEntryComic = {
    finalName: props.title,
    image: { small_url: props.image },
    id: `man-${Date.now()}`
  };
  return (
    <div style={wrapper}>

      <input
        placeholder="Title"
        style={inputStyle}
        type="text"
        value={props.title}
        onChange={props.handleTitleInput}
      />

      <input placeholder="Image URL" style={inputStyle} type="text" value={props.image} onChange={props.handleImagePath} />

      <button style={addBtn} onClick={() => props.addComicManually(manualEntryComic)}>
        Add
      </button>


    </div>
  );
};

ManComic.propTypes = {
  title: string.isRequired,
  image: string.isRequired,
  handleTitleInput: func.isRequired,
  handleImagePath: func.isRequired,
  addComicManually: func.isRequired
};

export default ManComic;
