import React from 'react'
import "./stylesheets/Feedback.css"
import food from "../images/food.jpg"
import store from "../images/stores.jpg"
import helpdesk from "../images/helpdesk.jpg"
import washroom from "../images/washroom.jpg"
import lounge from "../images/lounge.jpg"
import airline from "../images/airline.jpg"
import checkin from "../images/checkin.jpg"
import FeedbackOptions from '../Components/FeedbackOptions'

function Feedbacks() {
    const data = [
        {'src':food, 'title':"Food",'feedbackType':'foodcourt'},
        {'src':airline, 'title':"Airline",'feedbackType':'airline'},
        {'src':checkin, 'title':"Check-in",'feedbackType':'checkin'},
        {'src':lounge, 'title':"Lounge",'feedbackType':'lounge'},
        {'src':store, 'title':"Store",'feedbackType':'store'},
        {'src':helpdesk, 'title':"Help Desk", 'styles':{objectPosition:'top left'},'feedbackType':'helpdesk'},
        {'src':washroom, 'title':"Washroom", 'styles':{objectPosition:'center'},'feedbackType':'washroom'},
    ]

  return (
    <div>
        <div className='departments'>
            {data.map((data,idx)=>{
                return <FeedbackOptions key={idx} src={data.src} title={data.title} styles={data.styles} feedbackType={data.feedbackType}/>
            })}
        </div>
    </div>
  )
}

export default Feedbacks