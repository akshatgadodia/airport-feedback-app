import React from 'react'
import "./Stylesheets/FeedbackOptions.css"
import {useNavigate} from "react-router-dom";

const FeedbackOptions = props => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/feedback/${props.feedbackType}/1`)
  }

  return (
    <div className='departments-div'>
        <button className='department' onClick={onClickHandler}>
            <img src={props.src} style={props.styles} alt={props.title}/>
        </button>
        <p>{props.title}</p>
    </div>
  )
}

export default FeedbackOptions