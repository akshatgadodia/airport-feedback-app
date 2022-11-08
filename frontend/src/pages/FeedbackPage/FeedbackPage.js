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
      <div style={{ flex: 1 }} className="feedback-page-container-div">
        <a
          href="/"
          style={{ flex: 1 }}
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("foodcourt");
          }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/food-court.jpg')",
            }}
          >
            <div className="elements-title">Food Court</div>
          </div>
        </a>

        <a
          href="/"
          style={{ flex: 1 }}
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("checkin");
          }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/check-in.jpg')",
            }}
          >
            <div className="elements-title">Check In</div>
          </div>
        </a>

        <a
          href="/"
          style={{ flex: 1 }}
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("helpdesk");
          }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/help-desk.jpeg')",
            }}
          >
            <div className="elements-title">Help Desk</div>
          </div>
        </a>
      </div>

      <div style={{ flex: 1 }} className="feedback-page-container-div">
        <a
          href="/"
          style={{ flex: 1 }}
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("airline");
          }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/airline.jpg')",
            }}
          >
            <div className="elements-title">Airline</div>
          </div>
        </a>

        <a
          href="/"
          style={{ flex: 1 }}
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("lounge");
          }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/lounge.jpg')",
            }}
          >
            <div className="elements-title">Lounge</div>
          </div>
        </a>

        <a
          href="/"
          style={{ flex: 1 }}
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("store");
          }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/store.jpg')",
            }}
          >
            <div className="elements-title">Store</div>
          </div>
        </a>

        <a
          href="/"
          style={{ flex: 1 }}
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("washroom");
          }}
        >
          <div
            className="feedback-page-elements-div"
            style={{
              backgroundImage: "url('Images/FeedbackPage/washroom.jpg')",
            }}
          >
           <div className="elements-title">Washroom</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default FeedbackPage;
