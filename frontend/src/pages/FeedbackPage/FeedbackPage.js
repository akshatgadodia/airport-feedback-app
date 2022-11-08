import React, { useContext } from "react";
import "./FeedbackPage.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";

function FeedbackPage() {
  const navigate = useNavigate();
  const { loggedInDetails, user } = useContext(Context);

  function onLinkClick(type) {
    if (loggedInDetails.userType === "user" || user.type === "user")
      navigate(`/feedback/${type}/1`);
    else if (loggedInDetails.userType === "admin" || user.type === "admin") {
      navigate(`/adminFeedback/${type}`);
    }
  }

  return (
    <div className="feedback-page-main-div">
      <div className="feedback-page-inside-div">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("foodcourt");
          }}
        >
          <div
            className="feedback-page-elements-div-2"
            style={{
              backgroundImage: "url('Images/FeedbackPage/food-court.jpg')"
            }}
          >
            <p>Food Court</p>
          </div>
        </a>

        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("checkin");
          }}
        >
          <div
            className="feedback-page-elements-div-2"
            style={{
              backgroundImage: "url('Images/FeedbackPage/check-in.jpg')"
            }}
          >
            <p>Check In</p>
          </div>
        </a>

        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("helpdesk");
          }}
        >
          <div
            className="feedback-page-elements-div-2"
            style={{
              backgroundImage: "url('Images/FeedbackPage/help-desk.jpeg')"
            }}
          >
            <p>Help Desk</p>
          </div>
        </a>
      </div>
      <div className="feedback-page-inside-div">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("airline");
          }}
        >
          <div
            className="feedback-page-elements-div-1"
            style={{
              backgroundImage: "url('Images/FeedbackPage/airline.jpg')"
            }}
          >
            <p>Airline</p>
          </div>
        </a>

        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("lounge");
          }}
        >
          <div
            className="feedback-page-elements-div-1"
            style={{
              backgroundImage: "url('Images/FeedbackPage/lounge.jpg')"
            }}
          >
            <p>Lounge</p>
          </div>
        </a>

        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("store");
          }}
        >
          <div
            className="feedback-page-elements-div-1"
            style={{
              backgroundImage: "url('Images/FeedbackPage/store.jpg')"
            }}
          >
            <p>Store</p>
          </div>
        </a>

        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("washroom");
          }}
        >
          <div
            className="feedback-page-elements-div-1"
            style={{
              backgroundImage: "url('Images/FeedbackPage/washroom.jpg')"
            }}
          >
            <p>Washroom</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default FeedbackPage;
