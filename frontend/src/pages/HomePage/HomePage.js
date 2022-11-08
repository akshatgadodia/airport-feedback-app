import React, { useContext, useEffect } from "react";
import "./HomePage.css";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import FlightDetailsPage from "../FlightDetailsPage/FlightDetailsPage";

function HomePage() {
  const navigate = useNavigate();
  const { loggedInDetails } = useContext(Context);
  useEffect(() => {
    //console.log(loggedInDetails.userType==="");
    if (!loggedInDetails.userType) {
      navigate("/");
    }
  }, [loggedInDetails]);
  return (
    <div
      className="homepage-main-div"
      style={{
        backgroundImage:
          loggedInDetails.userType === "user"
            ? "url('Images/airport-2.jpg')"
            : "url('Images/airport-4.jpg')",
      }}
    >
      <h1>Welcome {loggedInDetails.userName}</h1>

      <div>{loggedInDetails.userType === "user" && <FlightDetailsPage />}</div>
    </div>
  );
}

export default HomePage;
