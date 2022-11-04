import React, { useContext, useEffect, useState } from "react";
import { useParams} from "react-router-dom";
// import FormsData from "../Data/FormData";
import "./Stylesheets/Feedbackpage.css";
import { useHttpClient } from "../hooks/useHttpClient";

//http://localhost:3000/feedback/food/1
const FeedbackPage = () => {
  const { sendRequest } = useHttpClient();
  const { feedbackType} = useParams();
  const [feedback, setfeedback] = useState([]);
  const [showmsgs, setshowmsgs] = useState(false);
  const [feedbackmsgs, setfeedbackmsgs] = useState([]);
  const[dropdownflag,setdropdownflag]=useState(false)
  useEffect(() => {
    if(["airline","lounge","store"].includes(feedbackType))
    {
        setdropdownflag(true)
    }})

   useEffect(()=>{
    const d=async () => {
        const t = await sendRequest(`/${feedbackType}/`);
        console.log(t);
        console.log("helloooo",dropdownflag);
        if(["airline","lounge","store"].includes(feedbackType)) {
          const typedetails = {};
          t.data.map((obj) => {
            let name = obj["name"];
            if (!(name in typedetails))
              typedetails[name] = { feedbackMessage: [] };
            for (let i in obj) {
              if (i === "feedbackMessage") {
                typedetails[name][i].push(obj[i]);
              } else if (i !== "_id" && i !== "__v" && i !== "name") {
                if (i in typedetails[name]) typedetails[name][i] += obj[i];
                else typedetails[name][i] = 0;
              }
            }
            console.log(typedetails);
            const l=[...Object.entries(typedetails)];
            setfeedback([...l]);
            console.log(feedback);
          });
        } else {
          const details = { feedbackMessage: [] };
          t.data.map((obj) => {
            for (let i in obj) {
              if (i === "feedbackMessage") {
                details[i].push(obj[i]);
              } else if (i !== "_id" && i !== "__v") {
                if (i in details) details[i] += obj[i];
                else details[i] = 0;
              }
            }
          });
          setfeedbackmsgs([...details.feedbackMessage]);
          setfeedback([...Object.entries(details)]);
        }
      }
      d();
  }, []);
    

  const showfeedbackmsgs = () => {
    setshowmsgs(!showmsgs);
  };

  return (
    <div className="feedbackdiv">
      <h1>{feedbackType.toUpperCase()}</h1>
      {(!dropdownflag)?(
      <div>
        {feedback &&
            feedback.map((feild) => {
              if (feild[0] !== "feedbackMessage")
                return (
                  <p>
                    {feild[0]} :{" "}
                    <span>{Math.ceil(feild[1] / (feedback.length * 5))}</span>
                  </p>
                );
        })}
        {showmsgs ? (
            <div>
              {feedbackmsgs && feedbackmsgs.map((msg) => <p>{msg}</p>)}
              <button onClick={showfeedbackmsgs}>Close Messages</button>
            </div>
          ) : (
            (
              <button onClick={showfeedbackmsgs}>Feedback Message</button>
            )
          )}
        
      </div>):
      (<div>
        {feedback &&
            feedback.map((type) => {
              return (
                <div style={{ border: "2px solid black" }}>
                  <h1>{type[0]}</h1>
                  {Object.entries(type[1]).map((feild, ind) => {
                    if (feild[0] !== "feedbackMessage")
                      return (
                        <p key={ind}>
                          {feild[0]}:
                          <span>
                            {Math.ceil(
                              type[1]["feedbackMessage"].length!==0? (feild[1] / (type[1]["feedbackMessage"].length * 5)):feild[1]
                            )}
                          </span>
                        </p>
                      );
                  })}
                    {showmsgs ? (
                    <div>
                      {type[1]["feedbackMessage"].map((msg, ind) => (
                        <p key={ind}>{msg}</p>
                      ))}
                      <button onClick={showfeedbackmsgs}>Close Messages</button>
                    </div>
                  ) : (
                    <button onClick={showfeedbackmsgs}>Feedback Message</button>
                  )}
                </div>
              );
            })}
      </div>)}
    </div>
    )
};

export default FeedbackPage;
