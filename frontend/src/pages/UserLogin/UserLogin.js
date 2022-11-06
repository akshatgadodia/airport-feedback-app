import React, { useContext, useEffect, useState } from "react";
import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import TitleLetterDisplay from "../../common/components/TitleLetterDisplay";
import Swal from "sweetalert2";
import { useHttpClient } from "../../hooks/useHttpClient";

const UserLogin = () => {
  const { error, sendRequest } = useHttpClient();
  const [userDetails, setUserDetails] = useState();
  const navigate = useNavigate();
  const { loggedInDetails, dispatch } = useContext(Context);
  const onChangeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    console.log(!{});
    console.log(loggedInDetails.userType !== "");
    if (loggedInDetails.userType) {
      navigate("/home");
    }
  }, [loggedInDetails]);

  const handleForm = async (event) => {
    event.preventDefault();
    //console.log(JSON.stringify(userDetails))
    try {
      const data = await sendRequest(
        "/user",
        "POST",
        JSON.stringify(userDetails),
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      );
      if (!error) {
        Swal.fire("Welcome to Airport", "", "success");
        dispatch({
          type: "UserLogin",
          payload: {
            type: "user",
            flightNumber: data.data.flightNumber,
            gate: data.data.gate,
          },
        });
        localStorage.setItem(
          "UserName",
          JSON.stringify({
            type: "user",
            flightNumber: data.data.flightNumber,
            gate: data.data.gate,
          })
        );
        setUserDetails({});
        navigate("/home");
      }
    } catch (err) {}
  };

  return (
    <div
      className="login"
      style={{
        backgroundImage: "url('Images/login-page-background-03.jpg')",
      }}
    >
      <div className="login-inside-border">
        <div className="login-form-div">
          <div className="login-head">
          {['E','N','T','E','R'].map((letter,idx)=>{
            return(<TitleLetterDisplay key={idx} letter={letter} />)
          })}
          </div>
          <div className="login-head">
          {['D','E','T','A','I','L','S'].map((letter,idx)=>{
            return(<TitleLetterDisplay key={idx} letter={letter} />)
          })}
          </div>
          <form onSubmit={handleForm} className="login-form">
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={(e) => onChangeHandler(e)}
            />
            <input
              type="text"
              id="email"
              placeholder="E-Mail"
              onChange={(e) => onChangeHandler(e)}
            />
            <input
              type="text"
              id="mobileNumber"
              placeholder="Mobile Number"
              onChange={(e) => onChangeHandler(e)}
            />
            <input
              type="text"
              id="pnr"
              placeholder="PNR"
              onChange={(e) => onChangeHandler(e)}
            />
            <input type="submit" value="Submit" className="login-form-submit" />
            <Link to="/admin-signin" className="other-login">
              Are you an admin? Click to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;