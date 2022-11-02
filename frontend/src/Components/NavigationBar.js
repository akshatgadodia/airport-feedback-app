import React, { useContext } from 'react'
import './stylesheets/NavigationBar.css'
import {Context} from "../App"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {
  const {state}=useContext(Context)
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
    <div className='navbar'>
      <i className="fa-sharp fa-solid fa-plane-departure"></i>
      {state.user && <button onClick={btnclicked}>{clicked? "Home":"Feedback"}</button>}
    </div>
  )
}

export default NavigationBar