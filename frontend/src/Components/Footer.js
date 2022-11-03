import React, {useContext}  from 'react'
import './stylesheets/Footer.css'

import {Context} from "../App"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Footer = () => {
  const {state} = useContext(Context)
  return (
    <div className={(state.isLoggedIn) ? "" : "footer-hidden"}>
    <div className='footer'>
      <div className='footer-content'>
        <h1>Airport Feedback App</h1>
        <p> 
          AAI airports collect feedback forms as part of customer satisfaction, grievance feedback mechanism. 
          Project is to collect the data electronically in the form of an APP with selectable parameters and rating . 
          The APP will be available by default on the free WIFI service that AAI is going to provide at Airports.
        </p>
      </div>
      <div className='footer-developed'>
        <h2>Developed By : </h2>
        <h3>Akshat Gadodia</h3>
        <div className='footer-contact-information'>
          <a href="https://www.linkedin.com/in/akshat-gadodia" target="_blank" rel='noopener noreferrer'><LinkedInIcon fontSize="medium" style={{color:"white"}}/> </a>
          <a href="https://www.github.com/akshatgadodia/" target="_blank" rel='noopener noreferrer'><GitHubIcon fontSize="medium" style={{color:"white"}}/> </a>
          <a href="https://www.instagram.com/akshat_gadodia/" target="_blank" rel='noopener noreferrer'><InstagramIcon fontSize="medium" style={{color:"white"}}/> </a>
          <a href="https://www.facebook.com/akshat.gadodia" target="_blank" rel='noopener noreferrer'><FacebookIcon fontSize="medium" style={{color:"white"}}/></a>
          <a href="mailto:akshatgadodia@gmail.com"><AlternateEmailIcon fontSize="medium" style={{color:"white"}}/> </a><br /></div>
        <h3>Akshita Sharma</h3>
        <div className='footer-contact-information'>
          <a href="https://www.linkedin.com/in/akshita-sharma-a60444220" target="_blank" rel='noopener noreferrer'><LinkedInIcon fontSize="medium" style={{color:"white"}}/> </a>
          <a href="https://www.github.com/Akshita44/" target="_blank" rel='noopener noreferrer'><GitHubIcon fontSize="medium" style={{color:"white"}}/> </a>
          <a href="https://www.instagram.com/akshitasharma407/" target="_blank" rel='noopener noreferrer'><InstagramIcon fontSize="medium" style={{color:"white"}}/> </a>
          <a href="https://www.facebook.com/akshita.sharma.90834" target="_blank" rel='noopener noreferrer'><FacebookIcon fontSize="medium" style={{color:"white"}}/></a>
          <a href="mailto:akshitasharma407@gmail.com"><AlternateEmailIcon fontSize="medium" style={{color:"white"}}/> </a><br /></div>
      </div>
    </div>
    <hr className='footer-hr'/>
    <div className='footer-copyright'>© {new Date().getFullYear()} Airport. All Rights Reserved.</div>
    </div>
  )
}

export default Footer