import React, { /*useContext,*/ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Stylesheets/AdminFeedbackPage.css";
import { useHttpClient } from "../hooks/useHttpClient";
import FeedbackDataDisplayCard from "./../Components/FeedbackDataDisplayCard";
import { Collapse } from "antd";
import { Divider, List, Typography } from "antd";
const FeedbackPage = () => {
  const { Panel } = Collapse;
  const { sendRequest } = useHttpClient();
  const { feedbackType } = useParams();
  const [feedback, setFeedback] = useState([]);
  const [displayFeedbackMessages, setDisplayFeedbackMessages] = useState(false);
  const [feedbackMessages, setFeedbackMessages] = useState([]);
  const [dropdownRequired, setDropdownRequired] = useState(false);

  useEffect(() => {
    if (["airline", "lounge", "store"].includes(feedbackType)) {
      setDropdownRequired(true);
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await sendRequest(`/${feedbackType}/`);
      if (["airline", "lounge", "store"].includes(feedbackType)) {
        const typeOfFeedback = {};
        fetchedData.data.map((obj) => {
          let name = obj["name"];
          if (!(name in typeOfFeedback))
            typeOfFeedback[name] = { feedbackMessage: [] };
          for (let i in obj) {
            if (i === "feedbackMessage") {
              typeOfFeedback[name][i].push(obj[i]);
            } else if (i !== "_id" && i !== "__v" && i !== "name") {
              if (i in typeOfFeedback[name]) typeOfFeedback[name][i] += obj[i];
              else typeOfFeedback[name][i] = 0;
            }
          }
          const result = [...Object.entries(typeOfFeedback)];
          setFeedback([...result]);
        });
      } else {
        const details = { feedbackMessage: [] };
        fetchedData.data.map((obj) => {
          for (let i in obj) {
            if (i === "feedbackMessage") {
              details[i].push(obj[i]);
            } else if (i !== "_id" && i !== "__v") {
              if (i in details) details[i] += obj[i];
              else details[i] = 0;
            }
          }
        });
        setFeedbackMessages([...details.feedbackMessage]);
        setFeedback([...Object.entries(details)]);
      }
    };
    getData();
  }, []);

  const showfeedbackMessages = () => {
    setDisplayFeedbackMessages(!displayFeedbackMessages);
  };

  return (
    <div className="admin-feedback-page">
      <h1 className="admin-feedback-page-title">
        {feedbackType.toUpperCase()}
      </h1>
      <h1 className="admin-feedback-page-subtitle">FEEDBACK SUMMARY REPORT</h1>
      {!dropdownRequired ? (
        <>
          <div className="admin-feedback-page-display">
            {feedback.map((feild, idx) => {
              if (feild[0] !== "feedbackMessage") {
                return (
                  <FeedbackDataDisplayCard
                    key={idx}
                    title={feild[0]}
                    averageRating={Math.ceil(feild[1] / (feedback.length * 5))}
                  />
                );
              }
            })}
          </div>
          <Collapse accordion className="admin-feedback-page-accordion">
            <Panel
              header="Feedback Messages"
              key="1"
              className="admin-feedback-page-panel"
            >
              <List
                className="admin-feedback-page-list"
                bordered
                dataSource={feedbackMessages}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Panel>
          </Collapse>
        </>
      ) : (
        <>
          {feedback.map((type) => {
            return (
              <div className="admin-feedback-page-dropdown-display">
                <h1 className="admin-feedback-page-dropdown-display-title">
                  {type[0]}
                </h1>
                <div className="admin-feedback-page-display">
                  {Object.entries(type[1]).map((feild, idx) => {
                    if (feild[0] !== "feedbackMessage")
                      return (
                        <FeedbackDataDisplayCard
                          key={idx}
                          title={feild[0]}
                          averageRating={Math.ceil(
                            feild[1] / (feedback.length * 5)
                          )}
                        />
                      );
                  })}
                </div>
                <Collapse accordion className="admin-feedback-page-accordion">
                  <Panel
                    header="Feedback Messages"
                    key="1"
                    className="admin-feedback-page-panel"
                  >
                    <List
                      key="x"
                      className="admin-feedback-page-list"
                      bordered
                      dataSource={feedbackMessages}
                      renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                  </Panel>
                </Collapse>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FeedbackPage;