import React from "react";
import "./FeedbackPage.css";
// import FeedbackOptions from "../../common/components/FeedbackOptions";

function FeedbackPage() {
  return (
    <div className="feedback-page-main-div">
      <a href="/feedback">
        <div
          className="feedback-page-elements-div-2"
          style={{
            backgroundImage: "url('Images/FeedbackPage/food-court.jpg')",
          }}
        >
          <p>Food Court</p>
        </div>
      </a>

      <div
        className="feedback-page-elements-div-2"
        style={{
          backgroundImage: "url('Images/FeedbackPage/check-in.jpg')",
        }}
      >
        <p>Check In</p>
      </div>
      <div
        className="feedback-page-elements-div-2"
        style={{
          backgroundImage: "url('Images/FeedbackPage/help-desk.jpeg')",
        }}
      >
        <p>Help Desk</p>
      </div>
      <div
        className="feedback-page-elements-div-1"
        style={{
          backgroundImage: "url('Images/FeedbackPage/airline.jpg')",
        }}
      >
        <p>Airline</p>
      </div>
      <div
        className="feedback-page-elements-div-1"
        style={{
          backgroundImage: "url('Images/FeedbackPage/lounge.jpg')",
        }}
      >
        <p>Lounge</p>
      </div>
      <div
        className="feedback-page-elements-div-1"
        style={{
          backgroundImage: "url('Images/FeedbackPage/store.jpg')",
        }}
      >
        <p>Store</p>
      </div>
      <div
        className="feedback-page-elements-div-1"
        style={{
          backgroundImage: "url('Images/FeedbackPage/washroom.jpg')",
        }}
      >
        <p>Washroom</p>
      </div>
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
