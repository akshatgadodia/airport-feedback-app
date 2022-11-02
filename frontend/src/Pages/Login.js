import React, { useContext, useState } from 'react'
import './stylesheets/Login.css'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {Context} from "../App"
import TitleLetterDisplay from './../Components/TitleLetterDisplay';
const Login= () => {

  const [state,setState]=useState()
  const navigate=useNavigate()
  const {dispatch}=useContext(Context)

  const userdetails=(e)=>{
    setState({...state,[e.target.id]:e.target.value})
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
      <div className='login-inside-border'>
        <div className='login-form-div'>
        <div className='login-head'> 
                <TitleLetterDisplay letter='E' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='N' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='T' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='E' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='R' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
        </div>
        <div className='login-head'> 
                <TitleLetterDisplay letter='D' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='E' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='T' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='A' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='I' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='L' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
                <TitleLetterDisplay letter='S' styleProp={{color: 'white',backgroundColor: 'rgba(255, 255, 255, 0.25)'}}/>
        </div>
        <form onSubmit={handleForm} className="login-form">
          <input type="text" id="name" placeholder="Name" onChange={(e)=>userdetails(e)}/>
          <input type="text" id="email" placeholder="E-Mail" onChange={(e)=>userdetails(e)}/>
          <input type="text" id="mobileNumber" placeholder="Mobile Number" onChange={(e)=>userdetails(e)}/>
          <input type="text" id="pnr" placeholder="PNR" onChange={(e)=>userdetails(e)}/>
          <input type="submit" value="Submit" className='login-form-submit'/>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login