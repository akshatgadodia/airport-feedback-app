import React, { useContext, useEffect } from "react";
import "./HomePage.css";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
// import FlightDetailsPage from '../FlightDetailsPage/FlightDetailsPage'

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
    <div className="home">
      <div>
        <h1>Welcome {loggedInDetails.userName}</h1>
      </div>
      <div>
        <img src="/Images/pexels-martin-dickson-2366581.jpg" alt="home"></img>
      </div>
      {/* {
        loggedInDetails.userType==="user" && <FlightDetailsPage/>
      } */}
    </div>
  );
}

export default HomePage;
