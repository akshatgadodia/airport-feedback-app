import "./AdminLogin.css";
import React, { useContext, useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { Context } from "../../App";
import TitleLetterDisplay from "../../common/components/TitleLetterDisplay";
import Swal from "sweetalert2";
import { useHttpClient } from "../../hooks/useHttpClient";

const AdminLogin = () => {
  const { error, sendRequest } = useHttpClient();
  const [adminDetails, setAdminDetails] = useState();
  const navigate = useNavigate();
  const { loggedInDetails, dispatch } = useContext(Context);

  const onChangeHandler = (e) => {
    setAdminDetails({ ...adminDetails, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    if (loggedInDetails.userType) {
      navigate("/home");
    }
  }, [loggedInDetails]);
  const handleForm = async (event) => {
    event.preventDefault();
    // console.log(JSON.stringify(adminDetails));
    try {
      const data = await sendRequest(
        "/admin/signin",
        "POST",
        JSON.stringify(adminDetails),
        {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      );
      console.log(data);
      if (!error) {
        Swal.fire("Welcome to Airport", "", "success");
        dispatch({
          type: "UserLogin",
          payload: { type: "admin", userName: data.data.name },
        });
        localStorage.setItem("UserName", JSON.stringify({ type: "admin" }));
        setAdminDetails({});
        navigate("/home");
      }
    } catch (err) {}
  };

  return (
    <div
      className="login"
      style={{
        backgroundImage: "url('Images/airport-1.jpg')"
      }}
    >
      <div className="login-inside-border">
        <div className="login-form-div">
          <div className="login-head">
            {["A", "D", "M", "I", "N"].map((letter, idx) => {
              return <TitleLetterDisplay key={idx} letter={letter} />;
            })}
          </div>
          <div className="login-head">
            {["L", "O", "G", "I", "N"].map((letter, idx) => {
              return <TitleLetterDisplay key={idx} letter={letter} />;
            })}
          </div>
          <form onSubmit={handleForm} className="login-form">
            <div className="login-admin-input">
              <input
                type="email"
                id="email"
                placeholder="E-Mail"
                onChange={(e) => onChangeHandler(e)}
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => onChangeHandler(e)}
                required
              />
            </div>
            <input type="submit" value="Login" className="login-form-submit" />
            <a href="/" className="other-login">
              Are you a passenger? Click to Login
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
