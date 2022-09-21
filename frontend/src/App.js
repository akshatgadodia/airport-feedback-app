import React from "react";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import NavigationBar from "./Components/NavigationBar";
import Feedback from "./Pages/Feedback" 
import FeedbackPage from "./Pages/FeedbackPage";
import {reducer,initialState} from "./Pages/reducer"
import { useReducer } from "react";
export const Context=React.createContext()
function App() {
const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <BrowserRouter>
    <Context.Provider value={{state,dispatch}}>
    <NavigationBar/>
      <Routes>
        <Route path="/" element={<Login />}/>
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
