import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from "react-router-dom";
import FormsData from '../data/FormData'
import "./stylesheets/Feedbackpage.css"

import { Rating } from 'react-simple-star-rating'

import { useHttpClient } from '../hooks/useHttpClient';

//http://localhost:3000/feedback/food/1
const FeedbackPage = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const {feedbackType,question} = useParams();
    const navigate = useNavigate();
    const data = FormsData[feedbackType][question]
    const [state,setState]=useState({})
    const [rating,setRating]=useState(0)

    useEffect(()=>{
      if(data.ratingType==="dropdown"){
        console.log("Fetch Data From Backend")
      }
    }),[])

    useEffect(()=>{
      setRating(0)
    },[question])

    const ratingChanged = (newRating) => {
        setState({...state,[data.ref]:newRating})
        setRating(newRating)
      }
    const onClickHandler = async() =>{
        if(data.next){
            if(!rating)
            {
              alert("Please select a rating")
            }
            else
            {
              navigate(`/feedback/${feedbackType}/${data.next}`)
            }
        }
        else{
            try {
              await sendRequest(
                `/${feedbackType}/`,
                'POST',
                JSON.stringify(state),
                {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              )
              alert("Feedback submitted successfully!! Thank you for your Feedback")
            } catch (err) {}
            //navigate(`/feedback/`)
        }
    }

  return (
    <div className='feedbackdiv'>
      <h1>{feedbackType.toUpperCase()}</h1>
      <div className='Qdiv'>
        <div>
          <div>{data.q}</div>
          {
            (data.ratingType==="stars") &&
            <Rating onClick={ratingChanged} initialValue={rating} transition={true} allowFraction={true}/>
          }
          {
            (data.ratingType==="text") &&
            <Rating onClick={ratingChanged} initialValue={rating} transition={true} allowFraction={true}/>
          }
          {
            (data.ratingType==="dropdown") &&
            <Rating onClick={ratingChanged} initialValue={rating} transition={true} allowFraction={true}/>
          }
        </div>
        <input type="button" value={(data.next) ? 'Next' : 'Submit'} onClick={onClickHandler}></input>
      </div>
    </div>
  )
}

export default FeedbackPage