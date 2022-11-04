import React from "react";
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
export const Context=React.createContext()

function App() {
const [loggedInDetails,dispatch]=useReducer(reducer,initialLoggedInDetails)
  return (
    <BrowserRouter>
      <Context.Provider value={{loggedInDetails,dispatch}}>
        <NavigationBar/>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/adminSignin" element={<AdminLogin />}/>
            <Route path="/adminSignup" element={<AdminRegister />}/>
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
