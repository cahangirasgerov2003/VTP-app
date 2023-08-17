import { connect } from "react-redux";
import "./createEvent.css";

import React, { useState } from "react";
import { addEventToDb } from "../actions/eventsActions";
import { useNavigate } from "react-router-dom";

const CreateEvent = (props) => {
  const [eventName, setEventName] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventDeadLine, setEventDeadLine] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitEventForm = (e) => {
    e.preventDefault();
    if (
      eventDesc.trim().length > 40 &&
      eventName.trim().length > 3 &&
      eventDeadLine.trim().length === 10
    ) {
      setError("");
      props.dispatch(
        addEventToDb({
          eventName,
          eventDeadLine,
          eventDesc,
        })
      );
      navigate("/events/see");
    } else {
      setError("Please fill in all fields of the form !");
    }
  };

  return (
    <div className="create">
      <h2>Create new event !</h2>
      <form onSubmit={submitEventForm}>
        <div>
          <label htmlFor="event">Event Name :</label>
          <input
            type="text"
            name="event"
            onChange={(e) => {
              setEventName(e.target.value);
            }}
            placeholder="Add 3 symbols and more symbols"
          />
        </div>

        <div>
          <label htmlFor="deadline">Deadline :</label>
          <input
            type="date"
            name="deadline"
            onChange={(e) => {
              setEventDeadLine(e.target.value);
            }}
          />
        </div>

        <div className="mb-0">
          <label htmlFor="description">Description :</label>
          <textarea
            name="description"
            onChange={(e) => {
              setEventDesc(e.target.value);
            }}
            placeholder="Add 40 symbols and more symbols"
          ></textarea>
        </div>

        <div className="mt-3 mb-0">
          <small className="text-danger">{error ? error : ""}</small>
        </div>

        <button type="submit" className="mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(CreateEvent);
