import React from "react";
import "./FeedbackPage.css";
import FeedbackOptions from "../../common/components/FeedbackOptions";

function FeedbackPage() {
  const data = [
    { src: "/Images/food.jpg", title: "Food", feedbackType: "foodcourt" },
    { src: "/Images/airline.jpg", title: "Airline", feedbackType: "airline" },
    { src: "/Images/checkin.jpg", title: "Check-in", feedbackType: "checkin" },
    { src: "/Images/lounge.jpg", title: "Lounge", feedbackType: "lounge" },
    { src: "/Images/store.jpg", title: "Store", feedbackType: "store" },
    { src: "/Images/helpdesk.jpg", title: "Help Desk", styles: { objectPosition: "top left" }, feedbackType: "helpdesk" },
    { src: "/Images/washroom.jpg", title: "Washroom", styles: { objectPosition: "center" },feedbackType: "washroom" },
  ];

  return (
    <div>
      <div className="departments">
        {data.map((data, idx) => {
          return (
            <FeedbackOptions
              key={idx}
              src={data.src}
              title={data.title}
              styles={data.styles}
              feedbackType={data.feedbackType}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FeedbackPage;
