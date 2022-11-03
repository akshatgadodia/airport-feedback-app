import React from 'react'
import "./stylesheets/Home.css"
import image from "../images/pexels-martin-dickson-2366581.jpg"
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