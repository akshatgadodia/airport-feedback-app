import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import { reducer, initialLoggedInDetails } from "./utils/Reducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLogin from "./pages/UserLogin/UserLogin";
import HomePage from "./pages/HomePage/HomePage";
import NavigationBar from "./common/components/NavigationBar";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import FeedbackForm from "./pages/FeedbackForm/FeedbackForm";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AboutPage from "./pages/AboutPage/AboutPage";
import AdminFeedback from "./pages/AdminFeedback/AdminFeedback";

export const Context = React.createContext();

function App() {
  const [user, setUser] = useState({});
  const [loggedInDetails, dispatch] = useReducer(
    reducer,
    initialLoggedInDetails
  );

  useEffect(() => {
    //console.log(localStorage.getItem("UserName"));
    const setData = async () => {
      const loginData = JSON.parse(localStorage.getItem("UserName"));
      if (loginData) {
        if (loginData.type === "admin") {
          const date = new Date(loginData.tokenExpiry);
          const currentDate = new Date();
          if (currentDate - date >= 0) {
            localStorage.removeItem("UserName");
            return null;
          }
          setUser(loginData);
          dispatch({
            type: "UserLogin",
            payload: loginData
          });
        }
      }
    };
    setData();
  }, []);
  return (
    
    <BrowserRouter>
      <Context.Provider value={{ loggedInDetails, dispatch, user, setUser }}>
        <NavigationBar />
        <Routes>
          {/* <Route path="/" element={(user.type==="user" || user.type==="admin") ? <HomePage/> : <UserLogin />} />
          <Route path="/admin-signin" element={(user.type==="user" || user.type==="admin") ? <HomePage/> : <AdminLogin />} />
          <Route path="/about" element={(user.type==="user" || user.type==="admin") ? <AboutPage /> : <UserLogin/>} />
          <Route
            path="/adminFeedback/:feedbackType"
            element={(user.type==="admin") ? <AdminFeedback /> : (user.type==="user") ? <HomePage/> : <UserLogin/>}
          />
          <Route path="/home" element={(user.type==="user" || user.type==="admin") ? <HomePage /> : <UserLogin/>} />
          <Route
            path="/feedback/:feedbackType/:question"
            element={(user.type==="user") ? <FeedbackForm /> : (user.type==="admin") ? <HomePage/> : <UserLogin/>}
          />
          <Route path="/feedback" element={(user.type==="user" || user.type==="admin") ? <FeedbackPage /> : <UserLogin/>} /> */}
          <Route path="/" element={<UserLogin />} />
          <Route path="/admin-signin" element={<AdminLogin />} />
          <Route path="/about" element={<AboutPage />} />
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
