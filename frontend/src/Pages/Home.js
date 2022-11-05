import React, { useContext, useEffect } from "react";
import "./Stylesheets/Home.css";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const { loggedInDetails} = useContext(Context);
  useEffect(()=>{
    //console.log(loggedInDetails.userType==="");
      if(!loggedInDetails.userType)
      {
        navigate("/")
      }
    },[loggedInDetails])
  return (
    <div className="home">
      <div>
        <h1>Welcome To Our Website</h1>
      </div>
      <div>
        <img src="/Images/pexels-martin-dickson-2366581.jpg" alt="home"></img>
      </div>
    </div>
  );
}

export default Home;
