import React from "react";
import "./FeedbackPage.css";
// import FeedbackOptions from "../../common/components/FeedbackOptions";
import { Link } from 'react-router-dom';

function FeedbackPage() {
  return (
    <div className="feedback-page-main-div">
      <Link href="/feedback/foodcourt/1">
        <div
          className="feedback-page-elements-div-2"
          style={{
            backgroundImage: "url('Images/FeedbackPage/food-court.jpg')",
          }}
        >
          <p>Food Court</p>
        </div>
      </Link>

      <Link href="/feedback/checkin/1">    
      <div
        className="feedback-page-elements-div-2"
        style={{
          backgroundImage: "url('Images/FeedbackPage/check-in.jpg')",
        }}
      >
        <p>Check In</p>
      </div>
      </Link>

      <Link href="/feedback/helpdesk/1">
      <div
        className="feedback-page-elements-div-2"
        style={{
          backgroundImage: "url('Images/FeedbackPage/help-desk.jpeg')",
        }}
      >
        <p>Help Desk</p>
      </div>
      </Link>

      <Link href="/feedback/airline/1">
      <div
        className="feedback-page-elements-div-1"
        style={{
          backgroundImage: "url('Images/FeedbackPage/airline.jpg')",
        }}
      >
        <p>Airline</p>
      </div>
      </Link>

      <Link href="/feedback/lounge/1">
      <div
        className="feedback-page-elements-div-1"
        style={{
          backgroundImage: "url('Images/FeedbackPage/lounge.jpg')",
        }}
      >
        <p>Lounge</p>
      </div>
      </Link>  

      <Link href="/feedback/store/1"> 
      <div
        className="feedback-page-elements-div-1"
        style={{
          backgroundImage: "url('Images/FeedbackPage/store.jpg')",
        }}
      >
        <p>Store</p>
      </div>
      </Link>

      <Link href="/feedback/washroom/1">
      <div
        className="feedback-page-elements-div-1"
        style={{
          backgroundImage: "url('Images/FeedbackPage/washroom.jpg')",
        }}
      >
        <p>Washroom</p>
      </div>
      </Link>
    </div>
  );
}

export default FeedbackPage;

// const data = [
//   { src: "/Images/food.jpg", title: "Food", feedbackType: "foodcourt" },
//   { src: "/Images/airline.jpg", title: "Airline", feedbackType: "airline" },
//   { src: "/Images/checkin.jpg", title: "Check-in", feedbackType: "checkin" },
//   { src: "/Images/lounge.jpg", title: "Lounge", feedbackType: "lounge" },
//   { src: "/Images/stores.jpg", title: "Store", feedbackType: "store" },
//   { src: "/Images/helpdesk.jpg", title: "Help Desk", styles: { objectPosition: "top left" }, feedbackType: "helpdesk" },
//   { src: "/Images/washroom.jpg", title: "Washroom", styles: { objectPosition: "center" },feedbackType: "washroom" },
// ];

// <div className="departments">
// {data.map((data, idx) => {
//   return (
//     <FeedbackOptions
//       key={idx}
//       src={data.src}
//       title={data.title}
//       styles={data.styles}
//       feedbackType={data.feedbackType}
//     />
//   );
// })}
// </div>
