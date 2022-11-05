import React from "react";
import "../stylesheets/FeedbackDataDisplayCard.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const FeedbackDataDisplayCard = (props) => {
  const maxRating = 5;
  const averageRating = props.averageRating.toFixed(1);
  const personsRated = props.personsRated;
  const maxPersons = averageRating * personsRated;
  const title = props.title.toUpperCase();
  return (
    <div className="feedback-data-display">
      <div className="feedback-data-display-div">
        <h1>{title}</h1>
        <div className="feedback-data-display-progress-bar-inside-div">
          <CircularProgressbarWithChildren
            value={averageRating}
            text={`${averageRating}`}
            maxValue={maxRating}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              strokeLinecap: "butt",
              trailColor: "gold",
            })}
          >
            <div style={{ width: "84%" }}>
              <CircularProgressbar
                value={personsRated}
                maxValue={maxPersons}
                styles={buildStyles({
                  trailColor: "transparent",
                })}
              />
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className="feedback-data-display-div-text">
        <h3>Average Rating</h3>
        <h2>{averageRating}</h2>
        <h3>Persons Rated</h3>
        <h2>{personsRated}</h2>
      </div>
    </div>
  );
};

export default FeedbackDataDisplayCard;
