import { Link } from "react-router-dom";
import "./members.css";
import React from "react";
import Users from "./Users";
import { connect } from "react-redux";

const Members = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Members :</h1>
        <Link to="create" className="addUser">
          Add New User
        </Link>
      </div>
      <p className="h5">
        VTP 23 participants, good luck to all of you &#129488;
      </p>
      <div className="row mt-4">
        {props.users &&
          props.users.map((user) => {
            return <Users user={user} key={user.id} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

export default connect(mapStateToProps)(Members);
