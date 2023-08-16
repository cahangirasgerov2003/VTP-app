import { connect } from "react-redux";
import "./departments.css";
import React from "react";
import Users from "./Users";

const Departments = (props) => {
  const web = props.users.filter((user) => {
    return user.department === "Web proqramlaşdırma";
  });
  const Ir = props.users.filter((user) => {
    return user.department === "İnsan Resursları";
  });
  const Rm = props.users.filter((user) => {
    return user.department === "Rəqamsal Marketinq";
  });
  const Im = props.users.filter((user) => {
    return user.department === "İnşaat Mühəndisliyi";
  });
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Department :</h1>
      </div>
      <p className="h5 departmentText">
        In this part, the departments and the participants of that department
        are shown accordingly &#129297;
      </p>
      <h2 className="h4 text-success">1) Web Proqramlaşdırma :</h2>
      <div className="row mt-4">
        {web.length > 0
          ? web.map((user) => {
              return <Users user={user} key={user.id} />;
            })
          : "There are no users belonging to this department!"}
      </div>

      <h2 className="h4 text-success">2) İnsan Resursları :</h2>
      <div className="row mt-4">
        {Ir.length > 0
          ? Ir.map((user) => {
              return <Users user={user} key={user.id} />;
            })
          : "There are no users belonging to this department!"}
      </div>

      <h2 className="h4 text-success">3) Rəqamsal Marketinq :</h2>
      <div className="row mt-4">
        {Rm.length > 0
          ? Rm.map((user) => {
              return <Users user={user} key={user.id} />;
            })
          : "There are no users belonging to this department!"}
      </div>

      <h2 className="h4 text-success">4) İnşaat Mühəndisliyi :</h2>
      <div className="row mt-4">
        {Im.length > 0 ? (
          Im.map((user) => {
            return <Users user={user} key={user.id} />;
          })
        ) : (
          <p className="text-danger h5">
            There are no users belonging to this department!
          </p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

export default connect(mapStateToProps)(Departments);
