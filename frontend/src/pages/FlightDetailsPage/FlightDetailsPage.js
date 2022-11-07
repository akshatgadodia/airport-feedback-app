import "./FlightDetailsPage.css";
import React, { useEffect, useState, useContext } from "react";
import { useHttpClient } from "../../hooks/useHttpClient";
import { Context } from "../../App";

const AdminFeedback = () => {
  const { sendRequest } = useHttpClient();
  const { loggedInDetails } = useContext(Context);
  useEffect(() => {
    const fetchData = async () =>{
      //${loggedInDetails.flightNumber}
      const data = await sendRequest(`http://api.aviationstack.com/v1/flights?access_key=c9773a42bb367ccf332341397762458e&flight_iata=
                                6E373`)
      console.log(data)
    }
    if (loggedInDetails.userType === "user") {
      fetchData()
    }
  }, []);


  return (
    <div className="admin-feedback-page">
    </div>
  );
};

export default AdminFeedback;
