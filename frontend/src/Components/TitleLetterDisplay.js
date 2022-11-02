import React from 'react'
import './stylesheets/TitleLetterDisplayCSS.css';

const TitleLetterDisplay = (props) => {
  return (
    <div className='title-letter-display' style={props.styleProp}>
        {props.letter}
    </div>
  )
}

export default TitleLetterDisplay