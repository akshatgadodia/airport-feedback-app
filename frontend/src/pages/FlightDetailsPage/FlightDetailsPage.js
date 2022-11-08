import "./FlightDetailsPage.css";
import React, { useEffect, useState, useContext } from "react";
import { useHttpClient } from "../../hooks/useHttpClient";
import { Context } from "../../App";
import axios from 'axios';

const AdminFeedback = () => {
  const { sendRequest } = useHttpClient();
  const { loggedInDetails } = useContext(Context);
  useEffect(() => {
    const fetchData = async () =>{
      console.log(loggedInDetails.flightNumber)
      const options = {
        method: 'GET',
        url: `https://aerodatabox.p.rapidapi.com/flights/number/${loggedInDetails.flightNumber}`,
        params: {withAircraftImage: 'false', withLocation: 'false'},
        headers: {
          'X-RapidAPI-Key': 'f8b1fc798bmshd3fd5dbb496e3a1p165482jsne9fcdb005ffe',
          'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
        }
      };
      const data = await axios.request(options)
      console.log(data.data[0])
    }
    if (loggedInDetails.userType === "user") {
      fetchData()
    }
  }, [loggedInDetails]);


  return (
    <div className="admin-feedback-page">
    </div>
  );
};

export default AdminFeedback;
