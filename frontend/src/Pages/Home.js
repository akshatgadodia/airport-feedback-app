import React from 'react'
import "./Stylesheets/Home.css"
import image from "../Images/pexels-martin-dickson-2366581.jpg"
function Home() {
  return (
    <div className='home'>
    <div>
        <h1>Welcome To Our Website</h1>
        </div>
        <div>
        <img src={image} alt="home"></img>
        </div>
    </div>
  )
}

export default Home