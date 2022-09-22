import React, { useContext, useState } from 'react'
import './Stylesheets/Login.css'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {Context} from "../App"
const Login= () => {
  const [state,setstate]=useState()
  const navigate=useNavigate()
  const {dispatch}=useContext(Context)
  const userdetails=(e)=>{
    setstate({...state,[e.target.id]:e.target.value})
  }
  const handleForm = async(event)=> {
    event.preventDefault();
    const data = await axios.post("/user",state)
    console.log(data);

    if(data.status===201)
    {
      alert("Successfully registered")
      dispatch({
        type:"Login"
      })
      navigate("/home")
    }
    else{
      alert("Some Error Occured. Retry")
    }
  }

  return (
    <div className='login'>
      <form onSubmit={handleForm}>
        <h1>Login</h1>
        <span><label>Name: <input type="text" id="name" onChange={(e)=>userdetails(e)}/></label></span>
        <span><label>Email: <input type="text" id="email" onChange={(e)=>userdetails(e)}/></label></span>
        <span><label>Mobile No.: <input type="text" id="mobileNumber" onChange={(e)=>userdetails(e)}/></label></span>
        <span><label>PNR: <input type="text" id="pnr" onChange={(e)=>userdetails(e)}/></label></span>
        <span><label><input type="submit" value="Submit"/></label></span>
      </form>
    </div>
  )
}

export default Login