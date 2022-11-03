import React, { useContext,useState } from 'react'
import './stylesheets/NavigationBar.css'
import {Context} from "../App"
import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {
  const {state} = useContext(Context)
  const [clicked,setclicked]=useState(false)

  const navigate=useNavigate()
  
  console.log(state);
  const btnclicked=()=>{
    setclicked(!clicked)
    console.log(clicked);
    if(!clicked)
    {
    navigate("/feedback")
    }
    else{
    navigate("/home")
    }
  }
  return (
    <div className={(state.isLoggedIn) ? "navbar" : "navbar-hidden"}>
      <i className="fa-sharp fa-solid fa-plane-departure"></i>
      {state.user && <button onClick={btnclicked}>{clicked? "Home":"Feedback"}</button>}
    </div>
  )
}

export default NavigationBar