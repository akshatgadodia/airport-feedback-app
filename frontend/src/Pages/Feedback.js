import React from 'react'
import "./Stylesheets/Feedback.css"
import food from "../Images/food.jpg"
import store from "../Images/stores.jpg"
import helpdesk from "../Images/helpdesk.jpg"
import washroom from "../Images/washroom.jpg"
import lounge from "../Images/lounge.jpg"
import airline from "../Images/airline.jpg"
import checkin from "../Images/checkin.jpg"
import FeedbackOptions from '../Components/FeedbackOptions'

function Feedbacks() {
    const data = [
        {'src':food, 'title':"Food",'feedbackType':'food'},
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