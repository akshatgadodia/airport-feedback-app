import React, { useEffect } from "react";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import NavigationBar from "./Components/NavigationBar";
import Feedback from "./Pages/Feedback" 
import FeedbackPage from "./Pages/FeedbackPage";
import {reducer,initialLoggedInDetails} from "./utils/Reducer"
import { useReducer } from "react";
import AdminLogin from "./Pages/AdminLogin";
import AdminRegister from "./Pages/AdminRegister";
import AdminFeedbackPage from "./Pages/AdminFeedbackPage";
import FeedbackDataDisplayCard from './Components/FeedbackDataDisplayCard';
import { useState } from "react";
export const Context=React.createContext()


function App() {
const [user,setuser]=useState({})
const [loggedInDetails,dispatch]=useReducer(reducer,initialLoggedInDetails)
useEffect(()=>{
  console.log(localStorage.getItem("UserName"));
  const loginData=JSON.parse(localStorage.getItem("UserName"))
  if(loginData)
  {
    setuser(loginData)
    dispatch({
      type: "UserLogin",
      payload:loginData,
    });
  }
},[])
  return (
    <BrowserRouter>
      <Context.Provider value={{loggedInDetails,dispatch,user,setuser}}>
        <NavigationBar/>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/dd" element={<FeedbackDataDisplayCard />}/>
            <Route path="/admin-signin" element={<AdminLogin />}/>
            <Route path="/admin-signup" element={<AdminRegister />}/>
            <Route path="/adminFeedback/:feedbackType" element={<AdminFeedbackPage />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/feedback/:feedbackType/:question" element={<FeedbackPage/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
          </Routes>
        <Footer/>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
