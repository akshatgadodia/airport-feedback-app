import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormsData from "../data/FormData";
import "./stylesheets/Feedbackpage.css";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

//http://localhost:3000/feedback/food/1
const FeedbackPage = () => {
  const { feedbackType, question } = useParams();
  const navigate = useNavigate();
  const data = FormsData[feedbackType][question];
  const [state, setState] = useState({});
  const [rating, setRating] = useState(0);
  const [dropdownData, setDropdownData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/${feedbackType}s`);
        const responseData = await response.data;
        if (!responseData.success) {
          throw new Error(responseData);
        }
        console.log(responseData.data);
        //setDropdownData(data.data.data)
        console.log(dropdownData);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.error,
        });
      }
    };
    if (data.ratingType === "dropdown") fetchData();
  }, [feedbackType]);

  useEffect(() => {
    setRating(0);
  }, [question]);

  const ratingChanged = (newRating) => {
    setState({ ...state, [data.ref]: newRating });
    setRating(newRating);
  };
  const onClickHandler = async () => {
    if (data.ratingType === "dropdown" && !rating) {
      //alert("Please select a rating");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Please select a ${feedbackType} name`,
      });
      return null;
    }
    if (data.ratingType === "stars" && !rating) {
      //alert("Please select a rating");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a rating",
      });
      return null;
    }
    if (data.next) {
        navigate(`/feedback/${feedbackType}/${data.next}`);
    } else {
      try {
        const response = await axios({
          method: "POST",
          url: `/${feedbackType}/`,
          data: state,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const responseData = await response.data;
        if (!responseData.success) {
          throw new Error(responseData);
        }
        console.log(responseData);
        //alert("Feedback submitted successfully!! Thank you for your Feedback")
        Swal.fire("Thank you for your Feedback", "", "success");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.error,
        });
      }
      navigate(`/feedback/`);
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
            <Rating
              onClick={ratingChanged}
              initialValue={rating}
              transition={true}
              allowFraction={true}
            />
          )}
          {data.ratingType === "dropdown" && (
            <Rating
              onClick={ratingChanged}
              initialValue={rating}
              transition={true}
              allowFraction={true}
            />
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
