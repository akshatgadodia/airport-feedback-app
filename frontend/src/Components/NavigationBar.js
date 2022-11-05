import React, { useContext, useState } from "react";
import "./Stylesheets/NavigationBar.css";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const { loggedInDetails,dispatch } = useContext(Context);
  const [ onHomePage, setOnHomePage] = useState(false);

  const navigate = useNavigate();
  console.log(loggedInDetails);
  const onButtonClickHandler = () => {
    setOnHomePage(!onHomePage);
    // console.log(onHomePage);
    if (!onHomePage) {
      navigate("/feedback");
    } else {
      navigate("/home");
    }
  };
  const LogoutHandler=()=>{
    localStorage.removeItem("UserName")
    navigate("/")
    dispatch({
      type: "UserLogout",
    });
  }
  return (
    <div className={loggedInDetails.isLoggedIn ? "navbar" : "navbar-hidden"}>
      <i className="fa-sharp fa-solid fa-plane-departure"></i>
      <div className="navdiv">
      {(loggedInDetails.userType) && (
        <button onClick={onButtonClickHandler}>
          {onHomePage ? "Home" : "Feedback"}
        </button>
      )}
      {(loggedInDetails.userType==="admin") && <button onClick={LogoutHandler}>
          Logout
        </button>}
      </div>
    </div>
  );
};

export default NavigationBar;
