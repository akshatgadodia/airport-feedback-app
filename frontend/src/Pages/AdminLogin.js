import React, { useContext, useEffect, useState } from "react";
import "./Stylesheets/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App";
import TitleLetterDisplay from "./../Components/TitleLetterDisplay";
import Swal from "sweetalert2";

import { useHttpClient } from "../hooks/useHttpClient";
const AdminLogin = () => {
  const { error, sendRequest } = useHttpClient();
  const [adminDetails, setAdminDetails] = useState();
  const navigate = useNavigate();
  const { loggedInDetails,dispatch} = useContext(Context);

  const onChangeHandler = (e) => {
    setAdminDetails({ ...adminDetails, [e.target.id]: e.target.value });
  };
  useEffect(()=>{
    if(loggedInDetails.userType)
    {
      navigate("/home")
    }
  },[loggedInDetails])
  const handleForm = async (event) => {
    event.preventDefault();
    // console.log(JSON.stringify(adminDetails));
    try {
      await sendRequest(
        "/admin/signin",
        "POST",
        JSON.stringify(adminDetails),
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      );
      if (!error) {
        Swal.fire("Welcome to Airport", "", "success");
        dispatch({
          type: "UserLogin",
          payload: { type: "admin" },
        });
        localStorage.setItem('UserName',JSON.stringify({ type: "admin" }));
        setAdminDetails({});
        navigate("/home");
      }
    } catch (err) {}
  };

  return (
    <div className="login">
      <div className="login-inside-border">
        <div className="login-form-div">
          <div className="login-head">
            <TitleLetterDisplay
              letter="A"
              styleProp={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <TitleLetterDisplay
              letter="D"
              styleProp={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <TitleLetterDisplay
              letter="M"
              styleProp={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <TitleLetterDisplay
              letter="I"
              styleProp={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <TitleLetterDisplay
              letter="M"
              styleProp={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
          </div>
          <div className="login-head">
            <TitleLetterDisplay
              letter="S"
              styleProp={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <TitleLetterDisplay
              letter="I"
              styleProp={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <TitleLetterDisplay
              letter="G"
              styleProp={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <TitleLetterDisplay
              letter="N"
              styleProp={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <TitleLetterDisplay
              letter="I"
              styleProp={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
            <TitleLetterDisplay
              letter="N"
              styleProp={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              }}
            />
          </div>
          <form onSubmit={handleForm} className="login-form">
            <input
              type="text"
              id="email"
              placeholder="E-Mail"
              onChange={(e) => onChangeHandler(e)}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => onChangeHandler(e)}
            />
            <input type="submit" value="SIGNIN" className="login-form-submit" />
            <Link to="/admin-signup">Don't have an account? Click to Register</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
