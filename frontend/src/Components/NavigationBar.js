import React, { useContext, useState } from "react";
import "./Stylesheets/NavigationBar.css";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const { loggedInDetails } = useContext(Context);
  const [ onHomePage, setOnHomePage] = useState(false);

  const navigate = useNavigate();

  // console.log(loggedInDetails);
  const onButtonClickHandler = () => {
    setOnHomePage(!onHomePage);
    // console.log(onHomePage);
    if (!onHomePage) {
      navigate("/feedback");
    } else {
      navigate("/home");
    }
  };
  return (
    <div className={loggedInDetails.isLoggedIn ? "navbar" : "navbar-hidden"}>
      <i className="fa-sharp fa-solid fa-plane-departure"></i>
      {loggedInDetails.userType && (
        <button onClick={onButtonClickHandler}>
          {onHomePage ? "Home" : "Feedback"}
        </button>
      )}
    </div>
  );
};

export default NavigationBar;
