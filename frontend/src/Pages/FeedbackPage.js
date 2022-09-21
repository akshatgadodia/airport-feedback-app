import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from "react-router-dom";
import FormsData from '../Data/FormData'
import FeedbackQuestions from './../Components/FeedbackQuestions';
import ReactStars from 'react-rating-stars-component'
import axios from 'axios'
import "./Stylesheets/Feedbackpage.css"
const FeedbackPage = () => {
    const {feedbackType,question} = useParams();
    const navigate = useNavigate();
    const data = FormsData[feedbackType][question]
    const [state,setstate]=useState({})
    const [rating,setrating]=useState(0)
    useEffect(()=>{
      console.log("hello");
      setrating(0)
    },[data.next])
    const ratingChanged = (newRating) => {
        // console.log(data.ref,newRating);
        setstate({...state,[data.ref]:newRating})
        setrating(newRating)
        // console.log(state);
      }
    const onClickHandler = async() =>{
        if(data.next){
            if(!rating)
            {
              alert("Please select a rating")
              setrating(0)
            }
            else
            {
              navigate(`/feedback/${feedbackType}/${data.next}`)
            }
        }
        else{
            try{
            const data=await axios.post("/foodcourt",state)
            console.log(data);
            alert("Feedback submitted successfully!! Thank you for your Feedback")
            }
            catch(err){
                console.log(err);
                alert("Error! Try Again Later")
            }

        }
    }

  return (
    <div className='feedbackdiv'>
        <h1>{feedbackType.toUpperCase()}</h1>
        <div className='Qdiv'>
         <div>
        <FeedbackQuestions question={`${data.q}: `}/>
        <ReactStars count={5} onChange={ratingChanged} size={40} activeColor={'#ffd700'} value={rating}/>
        </div>
        <input type="button" value={(data.next) ? 'Next' : 'Submit'} onClick={onClickHandler}></input>
        </div>
    </div>
  )
}

export default FeedbackPage