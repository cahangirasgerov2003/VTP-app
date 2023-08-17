import "./createEvent.css";

import React from "react";

const CreateEvent = () => {
  return (
    <div className="create">
      <h2>Create new event !</h2>
      <form>
        <div>
          <label htmlFor="event">Event Name :</label>
          <input type="text" name="event" />
        </div>

        <div>
          <label htmlFor="deadline">Deadline :</label>
          <input type="date" name="deadline" />
        </div>

        <div>
          <label htmlFor="description">Description :</label>
          <textarea name="description"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateEvent;
