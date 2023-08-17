import { Link } from "react-router-dom";
import "./members.css";
import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import Search from "./Search";

const Members = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Members :</h1>
        <div className="d-flex align-items-center">
          <Search />
          <Link to="create" className="addUser ms-4">
            Add New User
          </Link>
        </div>
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
    users: state.users,
  };
};

export default connect(mapStateToProps)(Members);
