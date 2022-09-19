import React from 'react'
import {useParams,useNavigate} from "react-router-dom";
import FormsData from '../Data/FormData'
import FeedbackQuestions from './../Components/FeedbackQuestions';

const FeedbackPage = () => {
    const {feedbackType,question} = useParams();
    const navigate = useNavigate();
    const data = FormsData[feedbackType][question]
    console.log(data)

    const onClickHandler = () =>{
        if(data.next){
            navigate(`/feedback/${feedbackType}/${data.next}`)
        }
        else{
            console.log("Submitted");
        }
    }

  return (
    <div>
        <h1>{feedbackType}</h1>
        <FeedbackQuestions question={data.q}/>
        <input type="button" value={(data.next) ? 'Next' : 'Submit'} onClick={onClickHandler}></input>
    </div>
  )
}

export default FeedbackPage