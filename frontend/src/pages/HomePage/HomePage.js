import React, { useContext} from "react";
import "./HomePage.css";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import FlightDetailsPage from "../FlightDetailsPage/FlightDetailsPage";

function HomePage() {
  const navigate = useNavigate();
  const { loggedInDetails } = useContext(Context);
  return (
    <div
      className="homepage-main-div"
      style={{
        backgroundImage:
          loggedInDetails.userType === "user"
            ? "url('Images/airport-2.jpg')"
            : "url('Images/airport-4.jpg')",

        backgroundPosition:
          loggedInDetails.userType === "user" ? "0 -100px" : "0 -200px",
      }}
    >
      <div>{loggedInDetails.userType === "user" && <FlightDetailsPage />}</div>
    </div>
  );
}

export default HomePage;
