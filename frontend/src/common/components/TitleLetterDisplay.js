import React from "react";
import "../stylesheets/TitleLetterDisplayCSS.css";

const TitleLetterDisplay = (props) => {
  return (
    <div className="title-letter-display" style={props.styleProp}>
      <p>{props.letter}</p>
    </div>
  );
};

export default TitleLetterDisplay;
