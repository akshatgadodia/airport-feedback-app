import React, { useContext } from "react";
import "../stylesheets/NavigationBar.css";
import { Context } from "../../App";
import { useNavigate, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const { loggedInDetails, dispatch } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(loggedInDetails);
  const onButtonClickHandler = () => {
    if (location.pathname === "/home") {
      navigate("/feedback");
    } else {
      navigate("/home");
    }
  };
  const LogoutHandler = () => {
    localStorage.removeItem("UserName");
    navigate("/");
    dispatch({
      type: "UserLogout",
    });
  };

  return (
    <div className={loggedInDetails.isLoggedIn ? "navbar" : "navbar-hidden"}>
      <i className="fa-sharp fa-solid fa-plane-departure"></i>
      <div className="navdiv">
        {loggedInDetails.userType && (
          <button onClick={onButtonClickHandler}>
            {location.pathname !== "/home" ? "Home" : "Feedback"}
          </button>
        )}
        {loggedInDetails.userType && (
          <button onClick={LogoutHandler}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
