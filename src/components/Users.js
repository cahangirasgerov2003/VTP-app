import "./users.css";
import React from "react";
import { Link } from "react-router-dom";

const Users = (props) => {
  return (
    <div className="card col-lg-4 col-md-6 mb-4 border-0 backgroundColor">
      <img
        src={props.user.picture}
        alt="Users"
        style={{
          height: "256px",
          width: "256px",
          objectFit: "cover",
          margin: "auto",
        }}
      ></img>
      <div className="card-body cardBG mt-2 rounded">
        <h5 className="card-title">Name : {props.user.name}</h5>
        <h5 className="card-title">Surname : {props.user.surName}</h5>
        <p>{props.user.department}</p>
        <Link
          to={`/members/${props.user.id}`}
          className="btn btn-success text-white"
        >
          User Details
        </Link>
      </div>
    </div>
  );
};

export default Users;
