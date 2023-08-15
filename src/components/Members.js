import { Link } from "react-router-dom";
import "./members.css";
import React from "react";

const Members = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Members :</h1>
        <Link to="create" className="addUser">
          Add New User
        </Link>
      </div>
      <p>VTP 23 participants, good luck to all of you &#129488;</p>
    </div>
  );
};

export default Members;
