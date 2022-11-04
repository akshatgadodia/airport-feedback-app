import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormsData from "../Data/FormData";
import "./Stylesheets/Feedbackpage.css";
import { Rating } from "react-simple-star-rating";
import { useHttpClient } from "../hooks/useHttpClient";
import Swal from "sweetalert2";
//http://localhost:3000/feedback/food/1

const FeedbackPage = () => {
  const { sendRequest } = useHttpClient();
  const { feedbackType, question } = useParams();
  const navigate = useNavigate();
  const data = FormsData[feedbackType][question];
  const [state, setState] = useState({});
  const [rating, setRating] = useState(0);
  const [dropdownData, setDropdownData] = useState([]);
  const [typeName, setTypeName] = useState("");

  useEffect(() => {
    setRating(0);
  }, [question]);

  useEffect(() => {
    const fetchDropdownData = async () => {
      const type = await sendRequest(`/${feedbackType}s/`);
      setDropdownData(type.data);
    };

    // sendRequest(
    //   `/${feedbackType}s/`,
    // ).then((t)=>{
    //   setDropdownData(t.data)
    // }).catch((err)=>{})
    if (data.ratingType === "dropdown") fetchDropdownData();
  }, [feedbackType]);

  //console.log(dropdownData);

  const ratingChanged = (newRating) => {
    setState({ ...state, [data.ref]: newRating });
    setRating(newRating);
  };

  const onTextDataChanged = (e) => {
    //console.log(e.target.value);
    setRating(e.target.value);
    setState({ ...state, [data.ref]: e.target.value });
    //console.log(rating);
  };

  const onClickHandler = async () => {
    if (data.ratingType === "dropdown" && typeName === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Please select a ${feedbackType} name`,
      });
      return null;
    }
    if (data.ratingType === "stars" && !rating) {
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
        await sendRequest(`/${feedbackType}/`, "POST", JSON.stringify(state), {
          Accept: "application/json",
          "Content-Type": "application/json",
        });
        Swal.fire("Thank you for your Feedback", "", "success");
        navigate("/feedback");
      } catch (err) {}
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
            <textarea
              onChange={(e) => onTextDataChanged(e)}
              width="fit-content"
              height="fit-content"
            />
          )}
          {data.ratingType === "dropdown" && (
            <select
              onChange={(e) => {
                setTypeName(e.target.value);
                onTextDataChanged(e);
              }}
            >
              <option selected={true} disabled="disabled">
                Choose {feedbackType}
              </option>
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

export default FeedbackPage;
