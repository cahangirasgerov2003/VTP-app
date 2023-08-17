import { connect } from "react-redux";
import "./seeEvent.css";
import React from "react";

const SeeEvent = (props) => {
  return (
    <div className="see">
      <h3>Information about the events is here &#128526;</h3>
      <ol>
        {props.events.map((event) => {
          return (
            <li key={event.id} className="seeEvent">
              <h1>Event Name : {event.eventName}</h1>
              <p>Event Description : {event.eventDesc}</p>
              <p>
                Event DeadLine : {event.eventDeadLine}{" "}
                <i className="fa-regular fa-clock fa-spin fa-xl ms-3"></i>{" "}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

export default connect(mapStateToProps)(SeeEvent);
