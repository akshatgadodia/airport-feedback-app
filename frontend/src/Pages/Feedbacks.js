import React from 'react'
import "./Stylesheets/feedbacks.css"
import food from "../Images/food.jpg"
import store from "../Images/stores.jpg"
import helpdesk from "../Images/helpdesk.jpg"
import washroom from "../Images/washroom.jpg"
import lounge from "../Images/lounge.jpg"
import Airline from "../Images/airline.jpg"
import Checkin from "../Images/checkin.jpg"

function Feedbacks() {
  return (
    <div>
        <div className='departments'>
            <div>
                <button className='department'>
                <img src={food}></img></button>
                <p>Food</p>
            </div>
            <div><button className='department'>
            <img src={Airline}></img></button>
            <p>Airline</p></div>
            <div><button className='department'>
            <img src={Checkin}></img>
                </button><p>Check In</p>
            </div>
            <div>
                <button className='department'>
                <img src={lounge}></img>
                </button>
            <p>Lounge</p>
            </div>
            <div>
                <button className='department'>
                <img src={store}></img>
                </button>
            <p>Store</p>
            </div>
            <div>
                <button className='department'>
                <img src={helpdesk} style={{objectPosition:"top left"}}></img>
                </button>
            <p>Help Desk</p></div>
            <div>
                <button className='department'>
                <img src={washroom} style={{objectPosition:"center"}}></img>
                </button>
                <p>Washroom</p></div>
        </div>
    </div>
  )
}

export default Feedbacks