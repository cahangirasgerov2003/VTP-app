import { NavLink, Outlet } from "react-router-dom";
import "./events.css";
import React from "react";

const Events = () => {
  return (
    <div className="eventContainer">
      <h2>Help</h2>
      <p className="titleEvent">
        In this section, it is possible to add an event and view information
        about that event &#129312;
      </p>

      <nav>
        <NavLink to="create" className="me-3">
          Create
        </NavLink>
        <NavLink to="see">See events</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default Events;
