import "./AdminFeedback.css";
import React, { useEffect, useState, useContext } from "react";
import { List, Collapse, message } from "antd";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../hooks/useHttpClient";
import { Tabs } from "antd";
import FeedbackDataDisplayCard from "./components/FeedbackDataDisplayCard";
import { Context } from "../../App";
import Loader from "../../common/components/Loader";

const AdminFeedback = () => {
  const { loggedInDetails } = useContext(Context);
  const { Panel } = Collapse;
  const { isLoading, sendRequest } = useHttpClient();
  const { feedbackType } = useParams();
  const [feedback, setFeedback] = useState([]);
  const [feedbackMessages, setFeedbackMessages] = useState([]);
  const [dropdownRequired, setDropdownRequired] = useState(false);
  let messages = [];

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("UserName"));
    if (["airline", "lounge", "store"].includes(feedbackType)) {
      setDropdownRequired(true);
    }
    const getData = async () => {
      const fetchedData = await sendRequest(
        `/api/${feedbackType}/`,
        "GET",
        null,
        {
          Authorization: "Bearer " + loginData.token || loggedInDetails.token
        }
      );
      //console.log("Fetched Data")
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
              else typeOfFeedback[name][i] = obj[i];
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
              else details[i] = obj[i];
            }
          }
        });
        setFeedbackMessages([...details.feedbackMessage]);
        setFeedback([...Object.entries(details)]);
      }
    };
    getData();
  }, []);

  return (
    <div className="admin-feedback-page">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="admin-feedback-page-title">
            {feedbackType.toUpperCase()}
          </h1>
          <h1 className="admin-feedback-page-subtitle">
            FEEDBACK SUMMARY REPORT
          </h1>
          {!dropdownRequired ? (
            <>
              <div className="admin-feedback-page-display">
                {feedback.map((feild, idx) => {
                  if (feild[0] !== "feedbackMessage") {
                    return (
                      <FeedbackDataDisplayCard
                        key={idx}
                        title={feild[0]}
                        averageRating={feild[1] / feedbackMessages.length}
                        personsRated={feedbackMessages.length}
                      />
                    );
                  }
                })}
              </div>
              <Collapse
                expandIcon={false}
                accordion
                expandIconPosition="end"
                className="admin-feedback-page-accordion"
              >
                <Panel
                  header="Feedback Messages"
                  key="1"
                  className="admin-feedback-page-panel"
                >
                  <List
                    className="admin-feedback-page-list"
                    bordered
                    dataSource={feedbackMessages.filter((message) => {
                      return message !== "NA";
                    })}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </Panel>
              </Collapse>
            </>
          ) : (
            <Tabs centered defaultActiveKey="1">
              {feedback.map((type, idx) => {
                return (
                  <Tabs.TabPane tab={type[0]} key={idx}>
                    <div className="admin-feedback-page-display">
                      {Object.entries(type[1]).map((feild, idx) => {
                        //console.log(feild)
                        if (feild[0] === "feedbackMessage") {
                          messages = feild[1];
                        }
                      })}
                      {Object.entries(type[1]).map((feild, idx) => {
                        if (feild[0] !== "feedbackMessage")
                          return (
                            <FeedbackDataDisplayCard
                              key={idx}
                              title={feild[0]}
                              averageRating={feild[1] / messages.length}
                              personsRated={messages.length}
                            />
                          );
                      })}
                    </div>
                    <Collapse
                      expandIcon={false}
                      accordion
                      expandIconPosition="end"
                      className="admin-feedback-page-accordion"
                    >
                      <Panel
                        header="Feedback Messages"
                        key="1"
                        className="admin-feedback-page-panel"
                      >
                        <List
                          key="list"
                          className="admin-feedback-page-list"
                          bordered
                          dataSource={messages.filter((message) => {
                            return message !== "NA";
                          })}
                          renderItem={(item) => <List.Item>{item}</List.Item>}
                        />
                      </Panel>
                    </Collapse>
                    {(messages = [])}
                  </Tabs.TabPane>
                );
              })}
            </Tabs>
          )}
        </>
      )}
    </div>
  );
};

export default AdminFeedback;
