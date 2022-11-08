import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormsData from "../../data/FormData";
import "./FeedbackForm.css";
import { Rating } from "react-simple-star-rating";
import { useHttpClient } from "../../hooks/useHttpClient";
import Swal from "sweetalert2";

const FeedbackForm = () => {
  const { sendRequest } = useHttpClient();
  const { feedbackType, question } = useParams();
  const navigate = useNavigate();
  const data = FormsData[feedbackType][question];
  const [feedbackData, setFeedbackData] = useState({});
  const [rating, setRating] = useState(0);
  const [dropdownData, setDropdownData] = useState([]);

  useEffect(() => {
    const fetchDropdownData = async () => {
      const type = await sendRequest(`/${feedbackType}s/`);
      setDropdownData(type.data);
    };
    if (data.ratingType === "dropdown") fetchDropdownData();
  }, [feedbackType]);

  useEffect(() => {
    setRating(0);
  }, [question]);

  const ratingChanged = (newRating) => {
    setFeedbackData({ ...feedbackData, [data.ref]: newRating });
    setRating(newRating);
  };
  const textValueChangedHandler = (e) => {
    // console.log(e.target.value);
    setRating(e.target.value);
    setFeedbackData({ ...feedbackData, [data.ref]: e.target.value });
    // console.log(feedbackData);
  };
  const onClickHandler = async () => {
    if (data.ratingType === "stars" && !rating) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a rating",
      });
      return null;
    }
    if (data.ratingType === "dropdown" && !feedbackData.name) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Please select a ${feedbackType}`,
      });
      return null;
    }
    if (data.ratingType === "text" && !feedbackData.feedbackMessage) {
      /*Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Please enter a message, if not enter NA`,
      });*/
      setRating(0);
      setFeedbackData({ ...feedbackData, feedbackMessage: "NA" });
      // return null;
    }
    if (data.next) {
      navigate(`/feedback/${feedbackType}/${data.next}`);
    } else {
      // console.log(feedbackData);
      try {
        await sendRequest(
          `/${feedbackType}/`,
          "POST",
          JSON.stringify(feedbackData),
          {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        );
        //alert("Feedback submitted successfully!! Thank you for your Feedback");
        Swal.fire("Thank you for your Feedback", "", "success");
        navigate("/feedback");
      } catch (err) {}
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
              onChange={(e) => textValueChangedHandler(e)}
              width="fit-content"
              height="fit-content"
            />
          )}
          {data.ratingType === "dropdown" && (
            <select onChange={(e) => textValueChangedHandler(e)}>
              <option> Choose {feedbackType} </option>
              {dropdownData &&
                dropdownData.map((type, idx) => (
                  <option key={idx}>{type.name}</option>
                ))}
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

export default FeedbackForm;
