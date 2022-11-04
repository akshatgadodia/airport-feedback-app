import React, { useContext, useState } from 'react'
import './Stylesheets/Login.css'
import {useNavigate} from "react-router-dom"
import {Context} from "../App"
import TitleLetterDisplay from '../Components/TitleLetterDisplay';
import Swal from 'sweetalert2'

import { useHttpClient } from '../hooks/useHttpClient';
const AdminRegister= () => {
  const { error, sendRequest } = useHttpClient();
  const [userDetails,setUserDetails] = useState()
  const navigate=useNavigate()
  const {dispatch}=useContext(Context)
  
  const onChangeHandler=(e)=>{
    setUserDetails({...userDetails,[e.target.id]:e.target.value})
  }

  const handleForm = async(event)=> {
    event.preventDefault();
    console.log(JSON.stringify(userDetails))
    try {
      const data = await sendRequest(
        "/admin/signup",
        'POST',
        JSON.stringify(userDetails),
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      )
      if(!error)
      {
        Swal.fire(
          'Welcome to Airport',
          "",
          'success'
        )
        dispatch({
          type:"UserLogin",
          payload : {type:"admin"}
        })
        setUserDetails({})
        navigate("/home")
      }
    } catch (err) {}
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
          <input type="text" id="name" placeholder="Name" onChange={(e)=>onChangeHandler(e)}/>
          <input type="text" id="email" placeholder="E-Mail" onChange={(e)=>onChangeHandler(e)}/>
          <input type="password" id="password" placeholder="Password" onChange={(e)=>onChangeHandler(e)}/>
          <input type="submit" value="Submit" className='login-form-submit'/>
          <a href="/adminSignin">Already have an account? Click to Login</a>
        </form>
        </div>
      </div>
    </div>
  )
}

export default AdminRegister