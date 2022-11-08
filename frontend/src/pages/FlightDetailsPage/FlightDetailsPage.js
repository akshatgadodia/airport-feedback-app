import "./FlightDetailsPage.css";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../App";
import axios from "axios";

const FlightDetailsPage = () => {
  const { loggedInDetails } = useContext(Context);
  const [flightData, setFlightData] = useState({});
  const [time, setTime] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: `https://aerodatabox.p.rapidapi.com/flights/number/${loggedInDetails.flightNumber}`,
          params: { withAircraftImage: "false", withLocation: "false" },
          headers: {
            "X-RapidAPI-Key":
              "f8b1fc798bmshd3fd5dbb496e3a1p165482jsne9fcdb005ffe",
            "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com"
          }
        };
        const data = await axios.request(options);
        //console.log(data.data[0]);
        if (data.data[0]) {
          const requiredData = {
            arrivalAirportName: data.data[0].arrival.airport.name + " Airport",
            departureAirportName:
              data.data[0].departure.airport.name + " Airport",
            airlineName: data.data[0].airline.name,
            departureTimeUTC: data.data[0].departure.scheduledTimeUtc,
            arrivalTimeUTC: data.data[0].arrival.scheduledTimeUtc,
            flightNumber: data.data[0].number,
            flightStatus: data.data[0].status,
            aircraftModel: data.data[0].aircraft.model
          };
          setFlightData(requiredData);
          var arrivalDateTime = new Date(flightData.arrivalTimeUTC);
          var cuurentDateTime = new Date();
          var differenceInTime =
            (arrivalDateTime.getTime() - cuurentDateTime.getTime()) / 1000;
          if (differenceInTime <= 0) {
            setTime(0);
          } else {
            setTime(differenceInTime);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (loggedInDetails.userType === "user") {
      fetchData();
    }
  }, [loggedInDetails]);

  const getTime = () => {
    if (time) return new Date(time).toISOString().slice(11, 19);
    else return new Date(0).toISOString().slice(11, 19);
  };

  return (
    <div className="flight-details-page">
      <div className="flight-details-ticket">
        <div className="flight-details-ticket-header">
          <div>
            <span>Airline Name</span>
            <p>{flightData.airlineName}</p>
          </div>
          <div>
            <span>Aircraft Model</span>
            <p>{flightData.aircraftModel}</p>
          </div>
          <div>
            <span>Flight Number</span>
            <p>{flightData.flightNumber}</p>
          </div>
          <div>
            <span>Flight Status</span>
            <p>{flightData.flightStatus}</p>
          </div>
        </div>
        <div className="flight-details-ticket-location">
          <h1>{`${flightData.departureAirportName} -> ${flightData.arrivalAirportName}`}</h1>
        </div>
        <div className="flight-details-ticket-time">
          <h3>Estimated Time Left To Arrive</h3> <br />
          <h2>{getTime(time)}</h2>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsPage;
