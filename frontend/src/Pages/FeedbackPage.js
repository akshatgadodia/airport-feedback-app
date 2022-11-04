import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormsData from "../Data/FormData";
import "./Stylesheets/Feedbackpage.css";
import { Rating } from "react-simple-star-rating";
import { useHttpClient } from "../hooks/useHttpClient";
import { Context } from "../App";

//http://localhost:3000/feedback/food/1
const FeedbackPage = () => {
  const { sendRequest } = useHttpClient();
  const { feedbackType, question } = useParams();
  const navigate = useNavigate();
  const data = FormsData[feedbackType][question];
  const [state, setState] = useState({});
  const [rating, setRating] = useState(0);
  const [types, settypes] = useState([]);

  useEffect(() => {
    if (data.ratingType === "dropdown") {
      const d = async () => {
        const type = await sendRequest(`/${feedbackType}s/`);
        settypes(type.data);
      };
      d();
    }
  }, []);

  useEffect(()=>{
    setRating(0)
  },[question])

  //console.log(dropdownData);

  const ratingChanged = (newRating) => {
    setState({ ...state, [data.ref]: newRating });
    setRating(newRating);
  };
  const textchanged = (e) => {
    console.log(e.target.value);
    setRating(e.target.value);
    setState({ ...state, [data.ref]: e.target.value });
    console.log(rating);
  };
  const onClickHandler = async () => {
    if (data.next) {
      if (!rating) {
        alert("Please select a rating");
      } else {
        navigate(`/feedback/${feedbackType}/${data.next}`);
      }
    } else {
      console.log(state);
      try {
        await sendRequest(`/${feedbackType}/`, "POST", JSON.stringify(state), {
          Accept: "application/json",
          "Content-Type": "application/json",
        });
        alert("Feedback submitted successfully!! Thank you for your Feedback");
        navigate("/feedback");
      } catch (err) {}
      //navigate(`/feedback/`)
    }
  };

  return (
    <div className="feedbackdiv">
      <h1>{feedbackType.toUpperCase()}</h1>
        <div className="Qdiv">
          <div>
            <div>{data.q}</div>
            {data.ratingType === "stars" && (
              <Rating
                onClick={ratingChanged}
                initialValue={rating}
                transition={true}
                allowFraction={true}
              />
            )}
            {data.ratingType === "text" && (
              <textarea
                onChange={(e) => textchanged(e)}
                width="fit-content"
                height="fit-content"
              />
            )}
            {data.ratingType === "dropdown" && (
              <select onChange={(e) => textchanged(e)}>
                <option selected="true" disabled="disabled">
                  Choose {feedbackType}
                </option>
                {types && types.map((type) => <option>{type.name}</option>)}
              </select>
            )}
          </div>
          <input
            type="button"
            value={data.next ? "Next" : "Submit"}
            onClick={onClickHandler}
          ></input>
        </div>
    </div>
  );
};

export default FeedbackPage;
