import React, { useContext } from "react";
import "../stylesheets/FeedbackOptions.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";

const FeedbackOptions = (props) => {
  const navigate = useNavigate();
  const { loggedInDetails, user } = useContext(Context);

  const onClickHandler = () => {
    if (loggedInDetails.userType === "user" || user.type === "user")
      navigate(`/feedback/${props.feedbackType}/1`);
    else if (loggedInDetails.userType === "admin" || user.type === "admin") {
      navigate(`/adminFeedback/${props.feedbackType}`);
    }
  };

  return (
    <div className="departments-div">
      <button className="department" onClick={onClickHandler}>
        <img src={props.src} style={props.styles} alt={props.title} />
      </button>
      <p>{props.title}</p>
    </div>
  );
};

export default FeedbackOptions;
