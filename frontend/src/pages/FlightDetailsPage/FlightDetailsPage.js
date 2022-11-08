import "./FlightDetailsPage.css";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../App";
import axios from "axios";

const FlightDetailsPage = () => {
  const { loggedInDetails } = useContext(Context);
  const [flightData, setFlightData] = useState({});

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
          var dept = new Date(data.data[0].departure.scheduledTimeUtc).toLocaleString();
          var arr = new Date(data.data[0].arrival.scheduledTimeUtc).toLocaleString();
          const requiredData = {
            arrivalAirportName: data.data[0].arrival.airport.name + " Airport",
            departureAirportName: data.data[0].departure.airport.name + " Airport",
            airlineName: data.data[0].airline.name,
            departureTime: dept,
            arrivalTime: arr,
            flightNumber: data.data[0].number,
            flightStatus: data.data[0].status,
            aircraftModel: data.data[0].aircraft.model
          };
          setFlightData(requiredData);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (loggedInDetails.userType === "user") {
      fetchData();
    }
  }, [loggedInDetails]);

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
        <div className="flight-details-ticket-header">
          <div>
            <span>Departure</span>
            <p>{flightData.departureTime}</p>
          </div>
          <div>
            <span>Arrival</span>
            <p>{flightData.arrivalTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsPage;
