import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import { reducer, initialLoggedInDetails } from "./utils/Reducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FooterComponent from "./common/components/FooterComponent";
import UserLogin from "./pages/UserLogin/UserLogin";
import HomePage from "./pages/HomePage/HomePage";
import NavigationBar from "./common/components/NavigationBar";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import FeedbackForm from "./pages/FeedbackForm/FeedbackForm";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminRegister from "./pages/AdminRegister/AdminRegister";
import AdminFeedback from "./pages/AdminFeedback/AdminFeedback";

export const Context = React.createContext();

function App() {
  const [user, setuser] = useState({});
  const [loggedInDetails, dispatch] = useReducer(
    reducer,
    initialLoggedInDetails
  );
  useEffect(() => {
    console.log(localStorage.getItem("UserName"));
    const loginData = JSON.parse(localStorage.getItem("UserName"));
    if (loginData) {
      setuser(loginData);
      dispatch({
        type: "UserLogin",
        payload: loginData,
      });
    }
  }, []);
  return (
    <BrowserRouter>
      <Context.Provider value={{ loggedInDetails, dispatch, user, setuser }}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/admin-signin" element={<AdminLogin />} />
          <Route path="/admin-signup" element={<AdminRegister />} />
          <Route
            path="/adminFeedback/:feedbackType"
            element={<AdminFeedback />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/feedback/:feedbackType/:question"
            element={<FeedbackForm />}
          />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
        {/* <FooterComponent /> */}
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
