import React, { useContext, useEffect, useState } from 'react'
import {useParams,useNavigate} from "react-router-dom";
import FormsData from '../Data/FormData'
import "./Stylesheets/Feedbackpage.css"
import { Rating } from "react-simple-star-rating";
import { useHttpClient } from '../hooks/useHttpClient';
import { Context } from '../App';

//http://localhost:3000/feedback/food/1
const FeedbackPage = () => {
    const {sendRequest} = useHttpClient();
    const {feedbackType,question} = useParams();
    const {loggedInDetails}=useContext(Context)
    const navigate = useNavigate();
    const data = FormsData[feedbackType][question]
    const [state,setState]=useState({})
    const [rating,setRating]=useState(0)
    const [types,settypes]=useState([])
    const [feedback,setfeedback]=useState([])
    const [showmsgs,setshowmsgs]=useState(false)
    const [feedbackmsgs,setfeedbackmsgs]=useState([])
  
    useEffect(()=>{
      if(data.ratingType==="dropdown"){
        const d=async()=>{
          const type=await sendRequest(`/${feedbackType}s/`)
          settypes(type.data)
        }
        d();
      }
      if(loggedInDetails.userType==="admin")
      {
        (async()=>{
          const t=await sendRequest(`/${feedbackType}/`)
          console.log(t);
          if(data.ratingType==="dropdown")
          {
            const typedetails={}
            t.data.map((obj)=>{
              let name=obj["name"]
              if (!(name in typedetails))
              typedetails[name]={feedbackMessage:[]}
              for (let i in obj)
              {
                if(i==="feedbackMessage")
                {
                  typedetails[name][i].push(obj[i])
                }
                else if(i!=="_id" && i!=="__v" && i!=="name")
                {
                  if(i in typedetails[name])
                  typedetails[name][i]+=obj[i]
                  else
                    typedetails[name][i]=0
                }
              }
              console.log(typedetails);
              console.log([...Object.entries(typedetails)]);
              setfeedback([...Object.entries(typedetails)])
              console.log(feedback);
            })
          }
          else{
          const details={feedbackMessage:[]}
          t.data.map((obj)=>{
            for (let i in obj)
            {
              if(i==="feedbackMessage")
              {
                details[i].push(obj[i])
              }
              else if(i!=="_id" && i!=="__v")
              {
                if(i in details)
                details[i]+=obj[i]
                else
                  details[i]=0
              }
            }
          })
        setfeedbackmsgs([...details.feedbackMessage])
        setfeedback([...Object.entries(details)])
        }
        })();
      }
    },[])

  //console.log(dropdownData);

    const ratingChanged = (newRating) => {
        setState({...state,[data.ref]:newRating})
        setRating(newRating)
      }
    const showfeedbackmsgs=()=>{
      setshowmsgs(!showmsgs)
    }
    const textchanged = (e) => {
      console.log(e.target.value);
      setRating(e.target.value)
        setState({...state,[data.ref]:e.target.value})
        console.log(rating);
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
              navigate("/feedback")
            } catch (err) {}
            //navigate(`/feedback/`)
        }
    }

  return (
    <div className="feedbackdiv">
      <h1>{feedbackType.toUpperCase()}</h1>
      {(loggedInDetails && loggedInDetails.userType==="user")?(
      <div className='Qdiv'>
        <div>
          <div>{data.q}</div>
          {
            (data.ratingType==="stars") &&
            <Rating onClick={ratingChanged} initialValue={rating} transition={true} allowFraction={true}/>
          }
          {
            (data.ratingType==="text") &&
            <textarea onChange={(e)=>textchanged(e)} width="fit-content" height="fit-content"/>
          }
          {
            (data.ratingType==="dropdown") &&
            <select onChange={(e)=>textchanged(e)}>
              <option selected="true" disabled="disabled">Choose {feedbackType}</option>
              {types && types.map((type)=>
              <option>{type.name}</option>)}
            </select>
            
          }
        </div>
        <input type="button" value={(data.next) ? 'Next' : 'Submit'} onClick={onClickHandler}></input>
      </div>):
      (
        <div>

        {data.ratingType!=="dropdown" && feedback && feedback.map((i)=>{
          if(i[0]!=="feedbackMessage")
          return <p>{i[0]} : <span>{Math.ceil(i[1]/(feedback.length*5))}</span></p>
        })}

        {data.ratingType==="dropdown" && feedback && feedback.map((i)=>{
          return(
          <div style={{border:"2px solid black"}}>
            <h1>{i[0]}</h1>
          {Object.entries(i[1]).map((val,ind)=>{
            if(val[0]!=="feedbackMessage")
           return <p key={ind}>{val[0]}:<span>{Math.ceil(val[1]/(i[1]["feedbackMessage"].length*5))}</span></p>
          })}
          {showmsgs?(
          <div>
            {i[1]["feedbackMessage"].map((msg,ind)=>(
              <p key={ind}>{msg}</p>
            ))}
            <button onClick={showfeedbackmsgs}>Close Messages</button>
          </div>
          ):(
          <button onClick={showfeedbackmsgs}>Feedback Message</button>
          )}
          </div>)
        })}

        {data.ratingType!=="dropdown" && showmsgs?(
          <div>
            {feedbackmsgs && feedbackmsgs.map((msg)=>(
              <p>{msg}</p>
            ))}
        <button onClick={showfeedbackmsgs}>Close Messages</button>
          </div>
        ):(
        data.ratingType!=="dropdown" && <button onClick={showfeedbackmsgs}>Feedback Message</button>
         )}

      </div>
      )}
    </div>
  );
};

export default FeedbackPage;
